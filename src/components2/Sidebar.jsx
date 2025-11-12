import React from "react";
import { X } from "lucide-react";

const Sidebar = ({ activeTool, onClose, sidebarContent, offsetTop = "0" }) => {
  return (
    <div
      className={`fixed right-0 h-[calc(100%-${offsetTop})] w-64 bg-white shadow-lg border-l border-gray-200 transform transition-transform duration-300 z-50
      ${activeTool ? "translate-x-0" : "translate-x-full"}`}
      style={{ top: offsetTop }}
    >
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 bg-gray-50">
        <h2 className="font-semibold capitalize text-gray-700">
          {activeTool || ""}
        </h2>
        <button
          onClick={onClose}
          className="p-1 rounded hover:bg-gray-100 text-gray-500"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 text-sm text-gray-700 overflow-y-auto h-[calc(100%-3rem)]">
        {activeTool ? sidebarContent[activeTool] : null}
      </div>
    </div>
  );
};

export default Sidebar;
