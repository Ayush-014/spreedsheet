import React from "react";

type DataType = {
  priority: string;
  dueDate: string;
};

const getPriorityColor = (level: string) => {
  switch (level.toLowerCase()) {
    case "medium":
      return "text-[#C29210]";
    case "high":
      return "text-[#EF4D44]";
    case "low":
      return "text-[#1A8CFF]";
    default:
      return "text-gray-300";
  }
};

const AnswerBlock: React.FC = () => {
  const data: DataType[] = [
    { priority: "Medium", dueDate: "20-11-2024" },
    { priority: "High", dueDate: "30-10-2024" },
    { priority: "Medium", dueDate: "10-12-2024" },
    { priority: "Low", dueDate: "15-01-2025" },
    { priority: "Low", dueDate: "30-01-2025" },
  ];

  const fillerRows = 19;
  const totalRows = data.length + fillerRows;

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
    <div className="w-[251px] space-y-[1px]">
      
      <div className="w-full h-[32px] px-4 bg-[#DCCFFC] flex items-center">
        <div className="w-[179px] h-[24px] px-1 py-[2px] rounded-[4px] flex items-center gap-1">
          <div className="w-[16px] h-[16px] flex items-center justify-center">🔤</div>
          <span className="text-[14px] font-medium leading-5 text-[#505450]">
            Answer a question
          </span>
          <div className="w-[20px] h-[20px] rounded-[4px] flex items-center justify-center rotate-180">
            ^
          </div>
        </div>
      </div>

      <div className="flex space-x-[1px]">
        
        <div className="w-[125px] space-y-[1px]">
          <div className="h-[32px] px-[8px] pr-[4px] flex items-center bg-[#DCCFFC]">
            <span className="text-[12px] font-semibold text-[#121212]">Priority</span>
          </div>

          {[...data, ...Array.from({ length: fillerRows }, () => ({ priority: "" }))].map(
            (item, rowIdx) => (
              <div
                key={`priority-${rowIdx}`}
                role="button"
                tabIndex={0}
                data-coordinates={`${rowIdx}-6`}
                onClick={(e) => e.currentTarget.focus()}
                onKeyDown={(e) => handleKeyDown(e, rowIdx, 6)}
                className="h-[32px] px-2 flex items-center bg-white justify-center border-r border-b hover:bg-gray-100 cursor-pointer outline-none focus:ring-1 focus:ring-green-800"
              >
                {item.priority && (
                  <div
                    className={`w-[48px] h-[16px] text-[12px] leading-4 font-semibold text-center rounded ${getPriorityColor(
                      item.priority
                    )}`}
                  >
                    {item.priority}
                  </div>
                )}
              </div>
            )
          )}
        </div>

        <div className="w-[125px] space-y-[1px]">
          <div className="h-[32px] px-[8px] pr-[4px] flex items-center bg-[#DCCFFC]">
            <span className="text-[12px] font-semibold text-[#121212]">Due Date</span>
          </div>

          {[...data, ...Array.from({ length: fillerRows }, () => ({ dueDate: "" }))].map(
            (item, rowIdx) => (
              <div
                key={`due-${rowIdx}`}
                role="button"
                tabIndex={0}
                data-coordinates={`${rowIdx}-7`}
                onClick={(e) => e.currentTarget.focus()}
                onKeyDown={(e) => handleKeyDown(e, rowIdx, 7)}
                className="h-[32px] px-2 flex items-center bg-white justify-end border-r border-b hover:bg-gray-100 cursor-pointer outline-none focus:ring-1 focus:ring-green-800"
              >
                {item.dueDate && (
                  <span className="text-[12px] font-normal text-[#121212] leading-4 w-[109px] text-right truncate">
                    {item.dueDate}
                  </span>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AnswerBlock;
