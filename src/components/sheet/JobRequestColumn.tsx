import React from "react";

const jobTasks = [
  "Launch social media campaign for product XYZ",
  "Update press kit for company redesign",
  "Finalize user testing feedback for app onboarding",
  "Design new features for the website",
  "Prepare financial report for Q4",
];

const fillerCount = 19;
const totalRows = jobTasks.length + fillerCount;
const columnIndex = 1;

const JobRequestColumn: React.FC = () => {
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
    <div className="w-[256px] space-y-[1px]">

      <div className="h-[32px] w-full flex items-center justify-between px-2 bg-[#E2E2E2] border-b border-gray-200 text-[12px] text-[#121212]">
        <div className="w-[158px] h-[24px] bg-[#EEEEEE] px-1 py-[2px] rounded flex items-center gap-1 truncate">
          🔗 Q3 Financial Overview
        </div>
        <div className="w-[16px] h-[16px] flex items-center justify-center rotate-180">^</div>
      </div>

      {/* header */}
      <div className="w-full h-[32px] px-[8px] pr-[4px] bg-[#EEEEEE] flex items-center justify-between border-r border-b border-gray-200">
        {/* icon + label */}
        <div className="flex items-center gap-[4px]">
          <div className="w-[16px] h-[16px] flex items-center justify-center">📄</div>
          <span className="text-[12px] font-semibold text-[#121212] leading-4">
            Job Request
          </span>
        </div>

        {/* dropdown */}
        <div className="w-[20px] h-[20px] p-[4px] rounded-[4px] flex items-center justify-center cursor-pointer">
          <span className="text-[#757575] text-sm leading-none rotate-180">^</span>
        </div>
      </div>

      {/* content Row */}
      {[...jobTasks, ...Array.from({ length: fillerCount }, () => "")].map(
        (task, idx) => (
          <div
            key={`job-${idx}`}
            role="button"
            tabIndex={0}
            data-coordinates={`${idx}-${columnIndex}`}
            onClick={(e) => e.currentTarget.focus()}
            onKeyDown={(e) => handleKeyDown(e, idx, columnIndex)}
            className="w-[256px] h-[32px] px-2 flex items-center bg-white border-r border-b border-gray-200 hover:bg-gray-100 cursor-pointer outline-none focus:ring-1 focus:ring-green-800"
          >
            {task && (
              <span className="text-[12px] text-[#121212] leading-3 truncate w-[240px]">
                {task}
              </span>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default JobRequestColumn;
