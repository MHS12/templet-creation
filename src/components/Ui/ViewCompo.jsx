import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import Box from "./Box";

const ViewCompo = () => {
  const A4_Page_Layout = {
    width: "210mm",
    height: "297mm",
  };
  const [boxes, setBoxes] = useState([]);
  const printRef = useRef(null);

  // Add new box
  const handleAddBox = () => {
    setBoxes((prev) => [...prev, {}]);
  };
  // Download as PDF
  const handleDownloadPDF = () => {
    const element = printRef.current;
    const options = {
      margin: 0,
      filename: "A4_Page_Layout.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().from(element).set(options).save();
  };

  
  return (
    <div className="flex flex-col items-center mx-auto gap-4 p-6 min-h-screen">
      <div className="flex gap-2">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
          onClick={handleAddBox}
        >
          + Add Box
        </button>
        <button
          className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
          onClick={handleDownloadPDF}
        >
          📄 Download PDF
        </button>
      </div>
      <div
        className=" p-4 rounded-md mx-auto shadow-md border"
        style={{
          ...A4_Page_Layout,
        }}
      >
        <h1 className="text-center text-xl font-bold mb-4">A4 Page Preview</h1>

        <div ref={printRef} className="min-h-[250mm] bg-white">
          {boxes.map((_, index) => (
            <Box key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewCompo;
