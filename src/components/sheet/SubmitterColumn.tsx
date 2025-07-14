import React from "react";

const submitters = [
  "Aisha Patel",
  "Irfan Khan",
  "Mark Johnson",
  "Emily Green",
  "Jessica Brown",
];

const fillerRows = 19;
const totalRows = submitters.length + fillerRows;
const columnIndex = 4;

const SubmitterColumn: React.FC = () => {
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
    <div className="w-[124px] space-y-[1px]">
      
      <div className="w-[124px] h-[32px] p-2 bg-[#E2E2E2] border-r"></div>

      <div className="w-[124px] h-[32px] px-[8px] pr-[4px] bg-[#EEEEEE] flex items-center justify-between">
        <div className="w-[88px] h-[16px] flex items-center gap-[4px]">
          <div className="w-[16px] h-[16px] flex items-center justify-center">🌐</div>
          <span className="w-[68px] h-[16px] text-[12px] font-semibold text-[#757575] leading-4 truncate">
            Submitter
          </span>
        </div>
        <div className="w-[20px] h-[20px] p-[4px] rounded-[4px] flex items-center justify-center">
          <span className="w-[12px] text-[#757575] text-sm leading-none rotate-180">^</span>
        </div>
      </div>

      {[...submitters, ...Array.from({ length: fillerRows }, () => "")].map(
        (name, rowIdx) => (
          <div
            key={`submitter-${rowIdx}`}
            role="button"
            tabIndex={0}
            data-coordinates={`${rowIdx}-${columnIndex}`}
            onClick={(e) => e.currentTarget.focus()}
            onKeyDown={(e) => handleKeyDown(e, rowIdx, columnIndex)}
            className="w-[124px] h-[32px] px-2 flex items-center bg-white hover:bg-gray-100 cursor-pointer border-r border-b outline-none focus:ring-1 focus:ring-green-800"
          >
            {name && (
              <span className="text-[12px] leading-4 font-normal text-[#121212] truncate w-[108px]">
                {name}
              </span>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default SubmitterColumn;
