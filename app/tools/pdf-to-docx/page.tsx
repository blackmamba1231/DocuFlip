import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PdfConverter } from "@/components/tools/pdf-converter"

export const metadata: Metadata = {
  title: "PDF to DOCX Converter - Free Online Tool",
  description:
    "Convert PDF files to Word DOCX format instantly. Free, secure, and fast PDF to DOCX converter with no registration required.",
  keywords: [
    "PDF to DOCX",
    "PDF to Word",
    "convert PDF to DOCX",
    "PDF converter online",
    "free PDF converter",
    "PDF to Word converter",
  ],
  openGraph: {
    title: "PDF to DOCX Converter - Free Online Tool",
    description: "Convert PDF files to Word DOCX format instantly. Free, secure, and fast.",
    type: "website",
  },
}

export default function PdfToDocxPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-40">
        <div className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl mb-4">PDF to DOCX Converter</h1>
              <p className="text-lg text-muted-foreground text-balance">
                Convert your PDF files to editable Word documents in seconds. No registration required.
              </p>
            </div>

            <PdfConverter />

            <div className="mt-16 space-y-8">
              <div className="rounded-lg border border-border/50 bg-muted/30 p-6">
                <h2 className="text-xl font-semibold mb-3">About PDF to DOCX Conversion</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our PDF to DOCX converter uses advanced algorithms to preserve the formatting, layout, and content of
                  your PDF files when converting to Microsoft Word format. The conversion happens entirely in your
                  browser for maximum privacy and security.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg border border-border/50 bg-card/50 p-6">
                  <h3 className="font-semibold mb-2">File Size Limit</h3>
                  <p className="text-sm text-muted-foreground">Maximum file size: 10 MB per PDF</p>
                </div>
                <div className="rounded-lg border border-border/50 bg-card/50 p-6">
                  <h3 className="font-semibold mb-2">Privacy First</h3>
                  <p className="text-sm text-muted-foreground">Files are deleted immediately after conversion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
