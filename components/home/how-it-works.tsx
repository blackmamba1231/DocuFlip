"use client"

import { motion } from "framer-motion"
import { Upload, RefreshCw, Download,FileText} from "lucide-react"

interface Step {
  step: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const steps: Step[] = [
  {
    step: 1,
    title: "Upload Your File",
    description: "Select the file you want to convert. We support PDFs, DOCX, PPTX, Images, and more.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Choose Conversion",
    description: "Pick the output format you need — PDF, DOCX, PPTX, or Image formats.",
    icon:  FileText,
  },
  {
    step: 3,
    title: "Download Instantly",
    description: "Get your converted file immediately. No registration or email required.",
    icon: Download,
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4 md:py-32 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Convert your files in three simple steps — fast, free, and secure.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center space-y-4"
            >
              {/* Step Icon & Number */}
              <div className="relative">
                <div className="absolute -top-4 -right-4 text-6xl font-bold text-primary/10">
                  {step.step}
                </div>
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-8 w-8" />
                </div>
              </div>

              {/* Step Title & Description */}
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>

              {/* Connector Line for desktop */}
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
