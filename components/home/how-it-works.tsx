"use client"

import { motion } from "framer-motion"
import { Upload, RefreshCw, Download } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Upload Your PDF",
    description: "Drag and drop your PDF file or click to browse from your device.",
    step: "01",
  },
  {
    icon: RefreshCw,
    title: "Convert Instantly",
    description: "Our engine processes your file and converts it to DOCX format in seconds.",
    step: "02",
  },
  {
    icon: Download,
    title: "Download DOCX",
    description: "Download your converted Word document immediately. Files are deleted after processing.",
    step: "03",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Three simple steps to convert your PDF to Word document.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 text-6xl font-bold text-primary/10">{step.step}</div>
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground">
                    <step.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border/50" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
