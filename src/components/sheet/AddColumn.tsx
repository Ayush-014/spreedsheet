import React from "react";

const totalRows = 24;

const AddColumn: React.FC = () => {
  return (
    <div className="w-[124px] flex flex-col space-y-[1px]">
      
      <div
        tabIndex={0}
        role="button"
        className="w-[124px] h-[32px] flex items-center justify-center text-[20px] text-[#505050] bg-[#E2E2E2] border-r border-b cursor-pointer outline-none focus:ring-1 focus:ring-green-800"
        onClick={(e) => e.currentTarget.focus()}
        data-coordinates={`0-9`}
      >
        +
      </div>

      {Array.from({ length: totalRows - 1 }).map((_, i) => (
        <div
          key={i}
          tabIndex={0}
          role="button"
          data-coordinates={`${i + 1}-9`}
          onClick={(e) => e.currentTarget.focus()}
          onKeyDown={(e) => {
            e.preventDefault();
            const move = (r: number, c: number) => {
              const el = document.querySelector(
                `[data-coordinates="${r}-${c}"]`
              ) as HTMLDivElement;
              if (el) el.focus();
            };

            const row = i + 1;
            if (e.key === "ArrowDown" && row < totalRows - 1) move(row + 1, 9);
            else if (e.key === "ArrowUp" && row > 1) move(row - 1, 9);
            else if (e.key === "ArrowLeft") move(row, 8);
            else if (e.key === "ArrowRight") move(row, 10);
          }}
          className="w-[124px] h-[32px] bg-white border-r border-b hover:bg-gray-100 cursor-pointer outline-none focus:ring-1 focus:ring-green-800"
        />
      ))}
    </div>
  );
};

export default AddColumn;
