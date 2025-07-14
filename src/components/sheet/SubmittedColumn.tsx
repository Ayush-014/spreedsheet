import React from "react";

const submittedDates = [
  "15-11-2024",
  "28-10-2024",
  "05-12-2024",
  "10-01-2025",
  "25-01-2025",
];

const SubmittedColumn: React.FC = () => {
  const fillerRows = 19;
  const totalRows = submittedDates.length + fillerRows;
  const columnIndex = 2;

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    row: number,
    col: number
  ) => {
    e.preventDefault();
    const moveFocus = (r: number, c: number) => {
      const el = document.querySelector(
        `[data-coordinates="${r}-${c}"]`
      ) as HTMLDivElement;
      if (el) el.focus();
    };

    if (e.key === "ArrowDown" && row < totalRows - 1) moveFocus(row + 1, col);
    else if (e.key === "ArrowUp" && row > 0) moveFocus(row - 1, col);
    else if (e.key === "ArrowLeft" && col > 0) moveFocus(row, col - 1);
    else if (e.key === "ArrowRight") moveFocus(row, col + 1);
  };

  return (
    <div className="w-[124px] space-y-[1px]">
      {/* top cell */}
      <div className="w-full h-[32px] p-2 bg-[#E2E2E2]"></div>

      {/* header */}
      <div className="w-[124px] h-[32px] px-[8px] pr-[4px] bg-[#EEEEEE] flex items-center justify-between border-r border-b">
        {/* icon + label */}
        <div className="w-[88px] h-[16px] flex items-center gap-[4px]">
          {/* icon */}
          <div className="w-[16px] h-[16px] flex items-center justify-center">
            🌐
          </div>

          {/* label */}
          <span className="w-[68px] h-[16px] text-[12px] font-semibold text-[#757575] leading-4 truncate">
            Submitted
          </span>
        </div>

        {/* dropdown */}
        <div className="w-[20px] h-[20px] p-[4px] rounded-[4px] flex items-center justify-center">
          <span className="w-[12px] text-[#757575] text-sm leading-none rotate-180">^</span>
        </div>
      </div>

      {/* content cells */}
      {[...submittedDates, ...Array.from({ length: fillerRows }, () => "")].map(
        (date, idx) => (
          <div
            key={`submitted-${idx}`}
            role="button"
            tabIndex={0}
            data-coordinates={`${idx}-${columnIndex}`}
            onClick={(e) => e.currentTarget.focus()}
            onKeyDown={(e) => handleKeyDown(e, idx, columnIndex)}
            className="w-full h-[32px] px-2 bg-white flex items-center justify-end border-r border-b hover:bg-gray-100 cursor-pointer outline-none focus:ring-1 focus:ring-green-800"
          >
            {date && (
              <span className="text-[12px] font-normal text-[#121212] leading-4 text-right w-[108px] truncate">
                {date}
              </span>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default SubmittedColumn;
