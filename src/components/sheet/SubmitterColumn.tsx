import React from "react";

const submitters = [
  "Aisha Patel",
  "Irfan Khan",
  "Mark Johnson",
  "Emily Green",
  "Jessica Brown",
];

const fillerRows = 19;

const SubmitterColumn: React.FC = () => {
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
          <span className="w-[12px] text-[#757575] text-sm leading-none">⋯</span>
        </div>
      </div>

      {submitters.map((name, idx) => (
        <div
          key={idx}
          className="w-[124px] h-[32px] px-2 flex items-center bg-white hover:bg-gray-100 cursor-pointer border-r border-b"
        >
          <span className="text-[12px] leading-4 font-normal text-[#121212] truncate w-[108px]">
            {name}
          </span>
        </div>
      ))}

      {Array.from({ length: fillerRows }).map((_, idx) => (
        <div
          key={`filler-${idx}`}
          className="w-[124px] h-[32px] p-2 bg-white border-r border-b"
        ></div>
      ))}
    </div>
  );
};

export default SubmitterColumn;