"use client";

import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function DownloadPdfButton() {
  const handleDownload = async () => {
    const element = document.body; // You can target specific container if needed

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("presentation.pdf");
  };

  return (
    <Button onClick={handleDownload} variant="outline">
      Download PDF
    </Button>
  );
}
