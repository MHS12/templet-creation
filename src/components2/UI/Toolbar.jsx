import React from "react";
import { Files, Layout, Settings } from "lucide-react";
import IconTool from "./IconTool";

const Toolbar = ({ activeTool, setActiveTool }) => {
  const tools = [
    { id: "pages", icon: <Files className="w-5 h-5" />, label: "Pages" },
    { id: "layout", icon: <Layout className="w-5 h-5" />, label: "Layout" },
    {
      id: "settings",
      icon: <Settings className="w-5 h-5" />,
      label: "Settings",
    },
  ];

  return (
    <div className="flex gap-3 bg-zinc-500 w-full mt-1 px-4  py-2 rounded shadow-lg">
      {tools.map((tool) => (
        <IconTool
          key={tool.id}
          icon={tool.icon}
          text={tool.label}
          active={activeTool === tool.id}
          onClick={() => setActiveTool(tool.id)}
        />
      ))}
    </div>
  );
};

export default Toolbar;
