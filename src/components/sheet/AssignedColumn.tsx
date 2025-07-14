import React from "react";

const assignedUsers = [
  "Sophie Choudhury",
  "Tejaa Pandey",
  "Rachel Lee",
  "Tom Wright",
  "Kevin Smith",
];

const fillerRows = 19;
const totalRows = assignedUsers.length + fillerRows;
const columnIndex = 6;

const AssignedColumn: React.FC = () => {
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
      
      <div className="w-[124px] h-[32px] px-4 bg-[#D2E0D4] flex items-center border-r border-[#E0E0E0]">
        <div className="w-[81px] h-[24px] px-1 py-[2px] rounded-[4px] flex items-center gap-1">
          <div className="w-[16px] h-[16px] flex items-center justify-center">🔤</div>
          <span className="text-[14px] font-medium leading-5 text-[#505450]">
            ABC
          </span>
          <div className="w-[20px] h-[20px] rounded-[4px] flex items-center justify-center rotate-180">
            ^
          </div>
        </div>
      </div>

      <div className="w-[124px] h-[32px] px-[8px] pr-[4px] flex items-center gap-1 bg-[#D2E0D4] border-r border-[#E0E0E0]">
        <div className="w-[16px] h-[16px] flex items-center justify-center">🧑‍💼</div>
        <span className="w-[92px] h-[16px] text-[12px] leading-4 font-semibold text-[#666C66] truncate">
          Assigned
        </span>
      </div>

      {[...assignedUsers, ...Array.from({ length: fillerRows }, () => "")].map(
        (name, rowIdx) => (
          <div
            key={`assigned-${rowIdx}`}
            role="button"
            tabIndex={0}
            data-coordinates={`${rowIdx}-${columnIndex}`}
            onClick={(e) => e.currentTarget.focus()}
            onKeyDown={(e) => handleKeyDown(e, rowIdx, columnIndex)}
            className="w-[124px] h-[32px] px-2 flex items-center text-[12px] leading-4 font-normal text-[#121212] bg-white hover:bg-gray-100 truncate border-r border-b border-[#E0E0E0] cursor-pointer outline-none focus:ring-1 focus:ring-green-800"
          >
            {name}
          </div>
        )
      )}
    </div>
  );
};

export default AssignedColumn;
