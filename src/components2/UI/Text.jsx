import React, { useRef } from "react";

const Text = () => {
  const titleRef = useRef();
  const bodyRef = useRef();

  return (
    <div>
      <h2
        ref={titleRef}
        contentEditable
        suppressContentEditableWarning={true}
        className="text-2xl font-bold outline-none border-b border-gray-300 mb-2"
      >
        Template Generate
      </h2>

      <p
        ref={bodyRef}
        contentEditable
        suppressContentEditableWarning={true}
        className="text-gray-700 outline-none"
      >
        This is an editable example of a document. You can edit this text, and
        when you click Generate PDF, it will appear in the PDF.
      </p>
    </div>
  );
};

export default Text;
