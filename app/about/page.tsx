import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Info, Zap, Shield, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our PDF to DOCX converter and the technology behind it.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                <Info className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight">About DocuFlip</h1>
            </div>

            <div className="space-y-8">
              <section className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  DocuFlip is a free, fast, and secure online tool for converting PDF files to Microsoft Word DOCX
                  format. We built this tool with a focus on privacy, performance, and ease of use.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that document conversion should be simple, fast, and accessible to everyone. Our mission is
                  to provide a reliable PDF conversion tool that respects your privacy and doesn't require registration
                  or payment.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-semibold">Technology</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-border/50 bg-card/50">
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">Next.js 14</h3>
                      <p className="text-sm text-muted-foreground">
                        Built with the latest Next.js App Router for optimal performance and SEO.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 bg-card/50">
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">Secure Processing</h3>
                      <p className="text-sm text-muted-foreground">
                        All conversions happen server-side with automatic file deletion after processing.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 bg-card/50">
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">Modern Stack</h3>
                      <p className="text-sm text-muted-foreground">
                        TypeScript, Tailwind CSS, and shadcn/ui for a polished user experience.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Performance</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our conversion engine is optimized for speed and accuracy. Most PDF files are converted to DOCX format
                  in just a few seconds. We use advanced text extraction algorithms to preserve the layout and
                  formatting of your documents as much as possible.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Privacy First</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We don't store your files, track your usage, or require registration. Your documents are processed
                  securely and deleted immediately after conversion. Read our{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>{" "}
                  for more details.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Have questions, feedback, or suggestions? We'd love to hear from you. Contact us at{" "}
                  <a href="mailto:DocuFlip@gmail.com" className="text-primary hover:underline">
                     DocuFlip@gmail.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
