const Box = ({ index }) => {
  return (
    <div
      className="border p-3 my-2 resize overflow-auto bg-gray-100 rounded shadow-sm"
      style={{
        resize: "both",
        maxWidth: "190mm", // fits within A4 width (210mm - ~20mm margin)
        maxHeight: "250mm", // leaves space from bottom margin
        minWidth: "50mm",
        minHeight: "20mm",
        margin: "5mm auto", // adds equal space on sides
        boxSizing: "border-box",
      }}
    >
      <h3 className="font-semibold text-base mb-1">Box #{index + 1}</h3>
      <p className="text-gray-600 text-sm">
        This is a dynamic Box component. You can resize it freely, but it will
        stay within page limits.
      </p>
    </div>
  );
};

export default Box;
