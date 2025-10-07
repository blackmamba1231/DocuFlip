"use client"

import Link from "next/link"
import { FileText } from "lucide-react"
import { Button } from "../components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex px-10 items-center gap-2 font-semibold text-lg">
          <FileText className="h-6 w-6 text-primary" />
          <span>DocuFlip</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/tools/pdf-to-docx"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Tools
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/privacy"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy
          </Link>
        </nav>

        <Button asChild>
          <Link href="/tools/pdf-to-docx">Convert Now</Link>
        </Button>
      </div>
    </header>
  )
}
