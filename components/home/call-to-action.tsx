"use client"

import { Button } from "../../components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function CallToAction() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center space-y-8 rounded-2xl border border-border/50 bg-gradient-to-b from-muted/50 to-muted/20 p-12 md:p-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Start Converting Now
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Join thousands of users who trust our PDF converter for their document conversion needs.
          </p>
          <Button size="lg" asChild>
            <Link href="/tools/pdf-to-docx">
              Convert Your First PDF
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
