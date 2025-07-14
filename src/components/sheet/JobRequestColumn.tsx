import React from "react";

const jobTasks = [
  "Launch social media campaign for product XYZ",
  "Update press kit for company redesign",
  "Finalize user testing feedback for app onboarding",
  "Design new features for the website",
  "Prepare financial report for Q4",
];

const fillerCount = 19;

const JobRequestColumn: React.FC = () => {
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
      {jobTasks.map((task, idx) => (
        <div
          key={idx}
          onClick={() => console.log(`Clicked on Job Request's content row ${idx}`)}
          className="w-[256px] h-[32px] px-2 flex items-center bg-white border-r border-b border-gray-200 hover:bg-gray-100"
        >
          <span className="text-[12px] text-[#121212] leading-3 truncate w-[240px]">
            {task}
          </span>
        </div>
      ))}

      {/* filler rows */}
      {Array.from({ length: fillerCount }).map((_, idx) => (
        <div
          key={`filler-${idx}`}
          onClick={() => console.log(`Clicked on Job Request's filler row ${idx}`)}
          className="w-full h-[32px] p-2 bg-white border-r border-b border-gray-200 hover:bg-gray-100"
        ></div>
      ))}
    </div>
  );
};

export default JobRequestColumn;
