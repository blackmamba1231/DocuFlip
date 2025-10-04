import Link from "next/link"
import { FileText } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-40">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
              <FileText className="h-5 w-5 text-primary" />
              <span>DocuFlip</span>
            </Link>
            <p className="text-sm text-muted-foreground">Fast, secure, and free PDF conversion tools.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tools/pdf-to-docx"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  PDF to DOCX
                </Link>
              </li>
              <li className="text-muted-foreground/50">PDF Merge (Coming Soon)</li>
              <li className="text-muted-foreground/50">Compress PDF (Coming Soon)</li>
              <li className="text-muted-foreground/50">Split PDF (Coming Soon)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@pdfconvert.app"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li className="text-muted-foreground">No files stored permanently</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} PDF Converter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
