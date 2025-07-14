import React from "react";

type StatusType = "In-process" | "Need to start" | "Complete" | "Blocked" | "";

const statusData: StatusType[] = [
  "In-process",
  "Need to start",
  "In-process",
  "Complete",
  "Blocked",
  "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
];

const getStatusStyle = (status: StatusType) => {
  switch (status) {
    case "In-process":
      return "bg-[#FFF3D6] text-yellow-800";
    case "Need to start":
      return "bg-[#E2E8F0] text-gray-700";
    case "Complete":
      return "bg-[#D3F2E3] text-green-800";
    case "Blocked":
      return "bg-[#FFE1DE] text-red-700";
    default:
      return "";
  }
};

export default function StatusColumn() {
  return (
    <div
      className="bg-white"
      style={{ width: "124px",
        //  height: "872px" 
        }}
    >

      {/* first filler  */}
      <div
        className="w-[124px] h-[32px] bg-[#E2E2E2] border-r"
      ></div>

      {/* header */}
      <div className="w-[124px] h-[32px] mt-[1px] px-[8px] pr-[4px] bg-[#EEEEEE] flex items-center justify-between border-r">
        {/* icon + label */}
        <div className="w-[88px] h-[16px] flex items-center gap-[4px]">
          {/* icon */}
          <div className="w-[16px] h-[16px] flex items-center justify-center">
            🌐
          </div>

          {/* label */}
          <span className="w-[68px] h-[16px] text-[12px] font-semibold text-[#757575] leading-4 truncate">
            Status
          </span>
        </div>

        {/* dropdown */}
        <div className="w-[20px] h-[20px] p-[4px] rounded-[4px] flex items-center justify-center">
          <span className="w-[12px] text-[#757575] text-sm leading-none rotate-180">^</span>
        </div>
      </div>

      {/* rows */}
      {statusData.map((status, idx) => (
        <div
          key={idx}
          onClick={() => console.log(`Clicked on Status's row ${idx}`)}
          className={`h-[32px] border-b px-2 flex items-center bg-white py-4 justify-center border-r hover:bg-gray-100`}
        >
          {status && (
            <span
              className={`text-xs rounded-full px-2 py-1 ${getStatusStyle(
                status
              )}`}
            >
              {status}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
