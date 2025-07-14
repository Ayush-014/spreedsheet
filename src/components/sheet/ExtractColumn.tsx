import React from "react";

const values = ["6,200,000", "3,500,000", "4,750,000", "5,900,000", "2,800,000"];
const fillerRows = 19;
const totalRows = values.length + fillerRows;
const columnIndex = 8;

const ExtractColumn: React.FC = () => {
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
    else if (e.key === "ArrowRight") moveFocus(row, col + 1);
    else if (e.key === "ArrowLeft" && col > 0) moveFocus(row, col - 1);
  };

  return (
    <div className="w-[124px] flex flex-col gap-[1px]">
      
      <div className="h-[32px] px-4 bg-[#FAC2AF] flex items-center rounded-t-[6px]">
        <div className="w-[102px] h-[24px] px-1 py-[2px] rounded-[4px] flex items-center gap-1">
          <div className="w-[16px] h-[16px] flex items-center justify-center">🔤</div>
          <span className="text-[14px] font-medium leading-5 text-[#695149]">Extract</span>
          <div className="w-[20px] h-[20px] rounded-[4px] flex items-center justify-center rotate-180">^</div>
        </div>
      </div>

      <div className="h-[32px] px-[8px] pr-[4px] bg-[#FFE9E0] flex items-center border-r">
        <span className="w-[112px] text-[12px] font-semibold text-[#121212] truncate">
          Est. Value
        </span>
      </div>

      {[...values, ...Array.from({ length: fillerRows }, () => "")].map(
        (val, rowIdx) => (
          <div
            key={rowIdx}
            role="button"
            tabIndex={0}
            data-coordinates={`${rowIdx}-${columnIndex}`}
            onClick={(e) => e.currentTarget.focus()}
            onKeyDown={(e) => handleKeyDown(e, rowIdx, columnIndex)}
            className="h-[32px] px-2 bg-white flex items-center justify-end border-r border-b hover:bg-gray-100 cursor-pointer outline-none focus:ring-1 focus:ring-green-800"
          >
            {val && (
              <>
                <span className="text-[12px] font-normal text-[#121212] leading-4">
                  {val}
                </span>
                <span className="text-[12px] font-medium text-[#AFAFAF] leading-4 ml-[2px]">
                  ₹
                </span>
              </>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default ExtractColumn;
