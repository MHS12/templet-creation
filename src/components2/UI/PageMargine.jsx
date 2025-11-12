import { RotateCcw } from "lucide-react";
import React from "react";
import defaults from "../../config/defaults.json";
const PageMargine = ({
  pageMargins,
  setPageMargins,
  pageType,
  setPageType,
  orientation,
  setOrientation,
  zoom,
  setZoom,
}) => {
  // const MAX_MARGINS = { top: 300, right: 300, bottom: 300, left: 300 };
  const { defaultMargins, maxMargins } = defaults;
  // Clamp margins safely
  const handleMarginChange = (side, value) => {
    const num = parseInt(value) || 0;
    const safeValue = Math.min(Math.max(0, num), maxMargins[side]);
    setPageMargins({ ...pageMargins, [side]: safeValue });
  };

  return (
    <div className="space-y-6 text-sm text-gray-700">
      {/* Margins Section */}
      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-800 mb-2">
            Page Margins (pt)
          </h3>
          <button
            onClick={() => setPageMargins({ ...defaultMargins })}
            className="mb-3 text-xs text-blue-600 hover:underline flex items-center gap-1"
          >
            <RotateCcw size={15} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {["top", "right", "bottom", "left"].map((side) => (
            <div key={side} className="flex flex-col">
              <label className="capitalize text-gray-600 text-xs mb-1">
                {side}
              </label>
              <input
                type="number"
                min="0"
                max={maxMargins[side]}
                value={pageMargins[side]}
                onChange={(e) => handleMarginChange(side, e.target.value)}
                className="border border-gray-300 rounded p-1 text-center text-sm focus:ring-1 focus:ring-blue-500 outline-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Page Type Section */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Page Type</h3>
        <select
          value={pageType}
          onChange={(e) => setPageType(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
        >
          <option value="A4">A4</option>
          <option value="A3">A3</option>
          <option value="Letter">Letter</option>
          <option value="Legal">Legal</option>
        </select>
      </div>

      {/* Orientation Section */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Orientation</h3>
        <select
          value={orientation}
          onChange={(e) => setOrientation(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
        >
          <option value="portrait">Portrait</option>
          <option value="landscape">Landscape</option>
        </select>
      </div>

      {/* Zoom Section */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Zoom</h3>
        <div className="flex items-center gap-3">
          <input
            type="range"
            min="0.5"
            max="1.5"
            step="0.05"
            value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))}
            className="w-full accent-blue-600"
          />
          <span className="text-sm w-10 text-right">
            {Math.round(zoom * 100)}%
          </span>
        </div>
      </div>

      {/* background image */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Background Image</h3>
        <p className="text-xs text-gray-600">
          (Feature coming soon! You will be able to set a background image for
          your pages.)
        </p>
      </div>
      {/* page border */}
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Page Border</h3>
        <p className="text-xs text-gray-600">
          (Feature coming soon! You will be able to customize page borders.)
        </p>
      </div>
    </div>
  );
};

export default PageMargine;
