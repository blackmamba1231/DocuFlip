import { Document, Packer, Paragraph, HeadingLevel } from "docx"
import * as pdfjsLib from "pdfjs-dist"

// Configure PDF.js worker
if (typeof window === "undefined") {
  // Server-side configuration
  pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`
}

interface TextItem {
  str: string
  transform: number[]
  width: number
  height: number
  fontName: string
}

export async function convertPdfToDocx(pdfBuffer: Buffer): Promise<Buffer> {
  try {
    // Load PDF document
    const loadingTask = pdfjsLib.getDocument({ data: pdfBuffer })
    const pdfDocument = await loadingTask.promise

    const paragraphs: Paragraph[] = []

    // Process each page
    for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
      const page = await pdfDocument.getPage(pageNum)
      const textContent = await page.getTextContent()

      // Group text items by line (based on Y position)
      const lines = new Map<number, TextItem[]>()

      textContent.items.forEach((item: any) => {
        if ("str" in item && item.str.trim()) {
          const y = Math.round(item.transform[5]) // Y position
          if (!lines.has(y)) {
            lines.set(y, [])
          }
          lines.get(y)!.push(item as TextItem)
        }
      })

      // Sort lines by Y position (top to bottom)
      const sortedLines = Array.from(lines.entries()).sort((a, b) => b[0] - a[0])

      // Convert each line to a paragraph
      sortedLines.forEach(([_, items]) => {
        // Sort items by X position (left to right)
        items.sort((a, b) => a.transform[4] - b.transform[4])

        // Combine text items in the line
        const lineText = items.map((item) => item.str).join(" ")

        if (lineText.trim()) {
          // Detect if line is likely a heading (larger font size)
          const avgHeight = items.reduce((sum, item) => sum + item.height, 0) / items.length
          const isHeading = avgHeight > 15 // Threshold for heading detection

          paragraphs.push(
            new Paragraph({
              text: lineText,
              heading: isHeading ? HeadingLevel.HEADING_1 : undefined,
              spacing: {
                after: 200,
              },
            }),
          )
        }
      })

      // Add page break after each page except the last one
      if (pageNum < pdfDocument.numPages) {
        paragraphs.push(
          new Paragraph({
            text: "",
            pageBreakBefore: true,
          }),
        )
      }
    }

    // Create DOCX document
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: paragraphs.length > 0 ? paragraphs : [new Paragraph({ text: "No text content found in PDF" })],
        },
      ],
    })

    // Generate DOCX buffer
    const docxBuffer = await Packer.toBuffer(doc)
    return Buffer.from(docxBuffer)
  } catch (error) {
    console.error("PDF conversion error:", error)
    throw new Error("Failed to convert PDF to DOCX. The PDF may be corrupted or contain unsupported features.")
  }
}
