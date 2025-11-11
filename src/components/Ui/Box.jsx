import React from "react";

const Box = ({ index }) => {
  return (
    <div className="border p-3 my-2 resize overflow-auto bg-gray-200 rounded shadow-sm">
      <h3 className="font-semibold">Box #{index + 1}</h3>
      <p className="text-gray-600 text-sm">This is a dynamic Box component.</p>
    </div>
  );
};


export default Box;
