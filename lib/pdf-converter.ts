// lib/pdf-converter.ts

import { Document, Packer, Paragraph, HeadingLevel } from "docx";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.js";

// Polyfill DOMMatrix for Node.js (required by pdfjs-dist)
if (typeof (global as any).DOMMatrix === "undefined") {
  const { DOMMatrix } = require("canvas");
  (global as any).DOMMatrix = DOMMatrix;
}

pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.js";
// Disable worker in Node.js environment
if (typeof window === "undefined") {
  // @ts-ignore
  pdfjsLib.GlobalWorkerOptions.workerSrc = null;
}

interface TextItem {
  str: string;
  transform: number[];
  width: number;
  height: number;
  fontName: string;
}

export async function convertPdfToDocx(pdfBuffer: Buffer): Promise<Buffer> {
  try {
    // PDF.js expects Uint8Array
    const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(pdfBuffer) });
    const pdfDocument = await loadingTask.promise;

    const paragraphs: Paragraph[] = [];

    for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
      const page = await pdfDocument.getPage(pageNum);
      const textContent = await page.getTextContent();

      // Group text items by Y position
      const lines = new Map<number, TextItem[]>();
      textContent.items.forEach((item: any) => {
        if ("str" in item && item.str.trim()) {
          const y = Math.round(item.transform[5]);
          if (!lines.has(y)) lines.set(y, []);
          lines.get(y)!.push(item as TextItem);
        }
      });

      // Sort lines top-to-bottom
      const sortedLines = Array.from(lines.entries()).sort((a, b) => b[0] - a[0]);

      sortedLines.forEach(([_, items]) => {
        items.sort((a, b) => a.transform[4] - b.transform[4]); // left-to-right
        const lineText = items.map((i) => i.str).join(" ");
        if (!lineText.trim()) return;

        const avgHeight = items.reduce((sum, i) => sum + i.height, 0) / items.length;
        const isHeading = avgHeight > 15;

        paragraphs.push(
          new Paragraph({
            text: lineText,
            heading: isHeading ? HeadingLevel.HEADING_1 : undefined,
            spacing: { after: 200 },
          })
        );
      });

      if (pageNum < pdfDocument.numPages) {
        paragraphs.push(new Paragraph({ text: "", pageBreakBefore: true }));
      }
    }

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: paragraphs.length > 0 ? paragraphs : [new Paragraph({ text: "No text content found in PDF" })],
        },
      ],
    });

    const docxBuffer = await Packer.toBuffer(doc);
    return Buffer.from(docxBuffer);
  } catch (error) {
    console.error("PDF conversion error:", error);
    throw new Error("Failed to convert PDF to DOCX. The PDF may be corrupted or unsupported.");
  }
}
