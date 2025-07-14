import React from "react";

const urls = [
  "www.aishapatel.com",
  "www.irfankhanportfolio.com",
  "www.markjohnson.dev",
  "www.emilygreen.io",
  "www.jessicabrown.me",
];

const fillerTopRows = 1;
const fillerBottomRows = 19;
const totalRows = urls.length + fillerBottomRows;
const columnIndex = 5;

const UrlColumn: React.FC = () => {
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    row: number,
    col: number
  ) => {
    e.preventDefault();

    const moveFocus = (r: number, c: number) => {
      const target = document.querySelector(
        `[data-coordinates="${r}-${c}"]`
      ) as HTMLDivElement;
      if (target) target.focus();
    };

    if (e.key === "ArrowDown" && row < totalRows - 1) moveFocus(row + 1, col);
    else if (e.key === "ArrowUp" && row > 0) moveFocus(row - 1, col);
    else if (e.key === "ArrowLeft" && col > 0) moveFocus(row, col - 1);
    else if (e.key === "ArrowRight") moveFocus(row, col + 1);
  };

  return (
    <div className="w-[124px] flex flex-col space-y-[1px]">
      
      <div className="w-[124px] h-[32px] p-2 bg-white border-r border-[#E9E9E9]" />

      <div className="w-[124px] h-[32px] p-2 bg-[#EEEEEE] text-sm font-medium text-gray-800 flex items-center gap-1 border-r border-[#E9E9E9]">
        🌐 <span>URL</span>
      </div>

      {[...urls, ...Array.from({ length: fillerBottomRows }, () => "")].map(
        (url, rowIdx) => (
          <div
            key={rowIdx}
            role="button"
            tabIndex={0}
            data-coordinates={`${rowIdx}-${columnIndex}`}
            onClick={(e) => e.currentTarget.focus()}
            onKeyDown={(e) => handleKeyDown(e, rowIdx, columnIndex)}
            className="w-[124px] h-[32px] px-2 flex items-center bg-white border-r border-b border-[#E9E9E9] hover:bg-gray-100 cursor-pointer outline-none focus:ring-1 focus:ring-green-800"
          >
            {url && (
              <span className="text-[12px] leading-4 font-normal text-[#121212] underline decoration-solid underline-offset-0 truncate w-[108px]">
                {url}
              </span>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default UrlColumn;
