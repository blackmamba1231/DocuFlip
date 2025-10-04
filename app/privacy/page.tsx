import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn about our privacy practices and how we handle your files during PDF conversion.",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight">DocuFlip</h1>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Our Commitment to Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At DocuFlip, we take your privacy seriously. We believe that your documents are your business,
                  and we've designed our service to ensure maximum privacy and security.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">No File Storage</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not store your files permanently on our servers. All uploaded PDF files are processed in memory
                  and automatically deleted immediately after conversion is complete. Your converted DOCX files are
                  temporarily available for download and are deleted within minutes.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Data Processing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you upload a PDF file for conversion, the file is transmitted securely to our servers where it is
                  processed entirely in memory. The conversion happens server-side, and the resulting DOCX file is sent
                  back to your browser. No copies are retained after the conversion process.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">No User Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not track individual users or create profiles based on your usage. We may collect anonymous
                  analytics data to improve our service, but this data cannot be used to identify you personally.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Security Measures</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All file transfers are encrypted using industry-standard SSL/TLS protocols. Our servers are secured
                  and regularly updated to protect against vulnerabilities. We implement rate limiting to prevent abuse
                  and ensure fair usage for all users.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may use third-party services for hosting and analytics. These services are carefully selected and
                  comply with privacy regulations. We do not share your files with any third parties.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Since we do not store your files or personal information, there is no data to request or delete.
                  However, if you have any privacy concerns or questions, please contact us at{" "}
                  <a href="mailto:DocuFlip@gmail.com" className="text-primary hover:underline">
                  DocuFlip@gmail.com
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this privacy policy from time to time. Any changes will be posted on this page with an
                  updated revision date.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this privacy policy or our practices, please contact us at{" "}
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
