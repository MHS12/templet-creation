import React from "react";

const IconTool = ({ icon, text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center py-1 p-2 rounded-md transition-all 
        ${
          active
            ? "bg-blue-500 text-white"
            : "bg-slate-200 text-gray-700 hover:bg-slate-300"
        }`}
    >
      <div className="w-5 h-5">{icon}</div>
      <span className="text-[10px] font-medium capitalize">{text}</span>
    </button>
  );
};

export default IconTool;
