import React from "react";
import Text from "./UI/Text";
const EditorView = ({ width, height, pageMargins, zoom }) => {
  return (
    <div className="flex justify-center w-full ">
      <div
        id="editor"
        className="border bg-white rounded relative shadow-lg top-5 "
        style={{
          width: `${width}px`,
          height: `${height}px`,
          paddingTop: `${pageMargins.top}pt`,
          paddingRight: `${pageMargins.right}pt`,
          paddingBottom: `${pageMargins.bottom}pt`,
          paddingLeft: `${pageMargins.left}pt`,
          transform: `scale(${zoom})`, // ✅ now zoom is dynamic
          transformOrigin: "top center",
        }}
        contentEditable={false}
      >
        <Text />
        <Text />
        <Text />
        <Text />
      </div>
    </div>
  );
};

export default EditorView;
