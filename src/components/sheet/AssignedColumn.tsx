import React from "react";

const assignedUsers = [
  "Sophie Choudhury",
  "Tejaa Pandey",
  "Rachel Lee",
  "Tom Wright",
  "Kevin Smith",
];

const fillerRows = 19;

const AssignedColumn: React.FC = () => {
  return (
    <div className="w-[124px] flex flex-col space-y-[1px]">
     
      <div className="w-[124px] h-[32px] px-4 bg-[#D2E0D4] flex items-center border-r border-[#E0E0E0]">
        <div className="w-[81px] h-[24px] px-1 py-[2px] rounded-[4px] flex items-center gap-1">
          <div className="w-[16px] h-[16px] flex items-center justify-center">🔤</div>
          <span className="text-[14px] font-medium leading-5 text-[#505450]">
            ABC
          </span>
          <div className="w-[20px] h-[20px] rounded-[4px] flex items-center justify-center">
            ⋯
          </div>
        </div>
      </div>

      <div className="w-[124px] h-[32px] px-[8px] pr-[4px] flex items-center gap-1 bg-[#D2E0D4] border-r border-[#E0E0E0]">
        <div className="w-[16px] h-[16px] flex items-center justify-center">🧑‍💼</div>
        <span className="w-[92px] h-[16px] text-[12px] leading-4 font-semibold text-[#666C66] truncate">
          Assigned
        </span>
      </div>

      {assignedUsers.map((name, idx) => (
        <div
          key={idx}
          className="w-[124px] h-[32px] px-2 flex items-center text-[12px] leading-4 font-normal text-[#121212] bg-white hover:bg-gray-100 truncate border-r border-b border-[#E0E0E0]"
        >
          {name}
        </div>
      ))}

      {Array.from({ length: fillerRows }).map((_, idx) => (
        <div
          key={`filler-${idx}`}
          className="w-[124px] h-[32px] p-2 bg-white border-r border-b border-[#E0E0E0]"
        ></div>
      ))}
    </div>
  );
};

export default AssignedColumn;
