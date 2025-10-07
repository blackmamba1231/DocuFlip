"use client"

import { Button } from "../../components/ui/button"
import { ArrowRight, FileText } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  const scrollToConverter = () => {
    const element = document.getElementById("converter-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background to-muted/20">
      <div className="container py-24 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm"
          >
            <FileText className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Free • Fast • Secure • No Signup</span>
          </motion.div>
  
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Convert Files Instantly - For Free
          </motion.h1>
  
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 text-lg text-muted-foreground text-balance md:text-xl"
          >
            Convert PDF, DOCX, PPTX, Images and more - instantly, securely, and at no cost. 
            Just upload and convert.
          </motion.p>
  
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/tools">
                Start Converting
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToConverter}
              className="w-full sm:w-auto bg-transparent"
            >
              Learn More
            </Button>
          </motion.div>
  
          {/* Quick Supported Formats List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-muted-foreground"
          >
            {['PDF → DOCX', 'DOCX → PDF', 'PPTX → PDF', 'Images → PDF', 'HTML → PDF'].map((item) => (
              <span key={item} className="rounded-full border border-border bg-muted/30 px-3 py-1">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
  
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  );
  
}
