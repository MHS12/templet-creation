import React, { useState } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import htmlToPdfmake from "html-to-pdfmake";
import { FileDown } from "lucide-react";
import Toolbar from "./UI/Toolbar";
import EditorView from "./EditorView";
import defaults from "../config/defaults.json";
import Sidebar from "./Sidebar";
import PageMargin from "./UI/PageMargine";

pdfMake.vfs = pdfFonts.vfs || pdfFonts.pdfMake?.vfs;

const TemplateGenerate = () => {
  const {
    pageSizes,
    defaultMargins,
    defaultPageType,
    defaultOrientation,
    defaultZoom,
    maxMargins,
  } = defaults;
  const [pageMargins, setPageMargins] = useState(defaultMargins);
  const [zoom, setZoom] = useState(defaultZoom);
  const [pageType, setPageType] = useState(defaultPageType);
  const [orientation, setOrientation] = useState(defaultOrientation);

  // Dynamically calculate preview size
  const size = pageSizes[pageType];
  const width = orientation === "portrait" ? size.width : size.height;
  const height = orientation === "portrait" ? size.height : size.width;
  const [activeTool, setActiveTool] = useState(null);
 
  const generatePdf = () => {
    const html = document.getElementById("editor").innerHTML;
    const pdfContent = htmlToPdfmake(html);
    const docDefinition = {
      pageSize: pageType,
      pageOrientation: orientation,
      pageMargins: [
        pageMargins.left,
        pageMargins.top,
        pageMargins.right,
        pageMargins.bottom,
      ],
      content: pdfContent,
    };
    pdfMake.createPdf(docDefinition).open();
  };
  const sidebarContent = {
    pages: (
      <PageMargin
        pageMargins={pageMargins}
        setPageMargins={setPageMargins}
        pageType={pageType}
        setPageType={setPageType}
        orientation={orientation}
        setOrientation={setOrientation}
        zoom={zoom}
        setZoom={setZoom}
      />
    ),
    layout: <p>📐 Adjust page orientation, margins, and alignment here.</p>,
    settings: <p>⚙️ Configure document settings and default styles.</p>,
  };
  return (
    <div className=" flex flex-col items-center bg-gray-200 overflow-y-hidden w-full no-scrollbar ">
      {/* Head bar */}
      <div className="flex justify-between items-center bg-slate-500 px-5 py-2 rounded w-full  ">
        <h1 className="text-white text-lg font-semibold">Template Editor</h1>
        <button
          onClick={generatePdf}
          className="flex items-center gap-2 bg-blue-700 text-white rounded px-4 py-1 hover:bg-blue-800"
        >
          <FileDown className="w-4 h-4" /> Generate PDF
        </button>
      </div>
      {/* All Tools */}
      <Toolbar activeTool={activeTool} setActiveTool={setActiveTool} />

      {/* Page preview container */}
      <div className="overflow-y-auto h-[88vh] w-full no-scrollbar  ">
        <EditorView
          width={width}
          height={height}
          pageMargins={pageMargins}
          zoom={zoom}
        />
      </div>
      <Sidebar
        activeTool={activeTool}
        onClose={() => setActiveTool(null)}
        sidebarContent={sidebarContent}
      />
    </div>
  );
};

export default TemplateGenerate;
