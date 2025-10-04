"use client"

import { motion } from "framer-motion"
import { Zap, Shield, DollarSign, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Convert your PDF files to DOCX in seconds with our optimized conversion engine.",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your files are processed securely and deleted immediately after conversion. No storage, no tracking.",
  },
  {
    icon: DollarSign,
    title: "Completely Free",
    description: "No hidden fees, no subscriptions, no limits. Convert as many files as you need, absolutely free.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description:
      "Access from any device with a browser. No installation required, works on desktop, tablet, and mobile.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Features() {
  return (
    <section id="converter-section" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl mb-4">
            Why Choose Our Converter?
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Built with modern technology to provide the best PDF conversion experience.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur hover:border-border transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
