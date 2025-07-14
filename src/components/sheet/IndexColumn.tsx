import React from "react";


export default function IndexColumn() {
  const totalVisibleRows = 23;
  const rows = Array.from({ length: totalVisibleRows }, (_, i) => i + 1);

  return (
    <div className="w-[32px] flex flex-col border-r border-gray-200 bg-white">
      {/* filler  */}
      <div className="w-full h-[32px] bg-white border-b border-gray-200" />

        {/* header  */}
      <div className="w-full h-[32px] py-[16px] bg-[#EEEEEE] flex items-center justify-center border-b border-gray-200">
        <span className="text-[14px] leading-[20px] text-[#757575] font-normal">
          #
        </span>
      </div>

      {/* index rows  */}
      {rows.map((num) => (
        <div
          key={num}
          className="w-full max-h-[32px] py-4 h-[32px]  flex items-center justify-center border-b border-gray-200 bg-white"
        >
          <span className="text-[14px] leading-[20px] text-[#757575] font-normal">
            {num}
          </span>
        </div>
      ))}

      <div className="w-full h-[32px] bg-white border-b border-gray-200" />
    </div>
  );
};
