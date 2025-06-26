"use client";

import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function DownloadPdfButton() {
  const handleDownload = async () => {
    const capture = document.getElementById("pdf-content");
    if (!capture) {
      alert("Capture element not found!");
      return;
    }

    const canvas = await html2canvas(capture, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("slide.pdf");
  };

  return (
    <Button onClick={handleDownload} variant="outline">
      Download PDF
    </Button>
  );
}
