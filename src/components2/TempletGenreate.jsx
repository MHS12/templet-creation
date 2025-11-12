import React from "react";

const TempletGenreate = () => {
  return (
    <div>
      <div className=" flex justify-between px-10 bg-slate-500 py-2">
        <h1 className="text-xl text-white"> Templet Genreate</h1>
        <div className=" space-x-5">
          <button className="border bg-blue-700 rounded-lg px-3 text-white">
            print
          </button>
          <button className="border bg-blue-700 rounded-lg px-3 text-white">
            Downlode
          </button>
        </div>
      </div>
    </div>
  );
};

export default TempletGenreate;
