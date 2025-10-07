"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Progress } from "../../components/ui/progress"
import { useToast } from "../../hooks/use-toast"
import { Upload, FileText, Download, X, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type ConversionState = "idle" | "uploading" | "converting" | "complete" | "error"

export function PdfConverter() {
  const [file, setFile] = useState<File | null>(null)
  const [state, setState] = useState<ConversionState>("idle")
  const [progress, setProgress] = useState(0)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const { toast } = useToast()

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const selectedFile = acceptedFiles[0]

      if (!selectedFile) return

      // Validate file type
      if (selectedFile.type !== "application/pdf") {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file.",
          variant: "destructive",
        })
        return
      }

      // Validate file size (10 MB limit)
      const maxSize = 10 * 1024 * 1024 // 10 MB
      if (selectedFile.size > maxSize) {
        toast({
          title: "File too large",
          description: "Maximum file size is 10 MB.",
          variant: "destructive",
        })
        return
      }

      setFile(selectedFile)
      setState("idle")
      setProgress(0)
      setDownloadUrl(null)
    },
    [toast],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    maxFiles: 1,
    multiple: false,
  })

  const handleConvert = async () => {
    if (!file) return

    setState("converting")
    setProgress(0)

    const formData = new FormData()
    formData.append("file", file)

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + 10
        })
      }, 200)

      const response = await fetch("/api/convert", {
        method: "POST",
        body: formData,
      })

      clearInterval(progressInterval)

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Conversion failed")
      }

      // Create blob from response
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)

      setDownloadUrl(url)
      setProgress(100)
      setState("complete")

      toast({
        title: "Conversion complete!",
        description: "Your DOCX file is ready to download.",
      })
    } catch (error) {
      console.error("Conversion error:", error)
      setState("error")
      toast({
        title: "Conversion failed",
        description: error instanceof Error ? error.message : "An error occurred during conversion.",
        variant: "destructive",
      })
    }
  }

  const handleDownload = () => {
    if (!downloadUrl || !file) return

    const link = document.createElement("a")
    link.href = downloadUrl
    link.download = file.name.replace(".pdf", ".docx")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleClear = () => {
    setFile(null)
    setState("idle")
    setProgress(0)
    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl)
      setDownloadUrl(null)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i]
  }

  return (
    <Card className="border-border/50">
      <CardContent className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          {!file ? (
            <motion.div
              key="upload"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div
                {...getRootProps()}
                className={`
                  relative cursor-pointer rounded-lg border-2 border-dashed p-12 text-center transition-colors
                  ${
                    isDragActive
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50 hover:bg-muted/50"
                  }
                `}
              >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold">
                      {isDragActive ? "Drop your PDF here" : "Drag & drop your PDF file"}
                    </p>
                    <p className="text-sm text-muted-foreground">or click to browse from your device</p>
                  </div>
                  <p className="text-xs text-muted-foreground">Maximum file size: 10 MB</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="file"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-muted/30">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{file.name}</p>
                  <p className="text-sm text-muted-foreground">{formatFileSize(file.size)}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={handleClear} disabled={state === "converting"}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {state === "converting" && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Converting...</span>
                    <span className="font-medium">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                {state === "complete" ? (
                  <>
                    <Button onClick={handleDownload} className="flex-1" size="lg">
                      <Download className="mr-2 h-4 w-4" />
                      Download DOCX
                    </Button>
                    <Button onClick={handleClear} variant="outline" size="lg">
                      Convert Another
                    </Button>
                  </>
                ) : (
                  <>
                    <Button onClick={handleConvert} disabled={state === "converting"} className="flex-1" size="lg">
                      {state === "converting" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Converting...
                        </>
                      ) : (
                        "Convert to DOCX"
                      )}
                    </Button>
                    <Button onClick={handleClear} variant="outline" disabled={state === "converting"} size="lg">
                      Clear
                    </Button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}
