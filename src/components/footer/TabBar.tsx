import React from "react";

const TabBar: React.FC = () => {
  return (
    <div className="w-[1440px] h-[48px] flex items-start gap-[24px] px-[32px] pt-[4px] pr-[16px] border-t border-[#E0E0E0] bg-white">

      <div className="w-[111px] h-[44px] flex items-center px-[16px] pt-[10px] pb-[10px] border-t-[2px] border-[#4B6A4F] bg-[#E8F0E9]">
        <span className="text-[16px] font-semibold leading-[24px] text-[#3E5741]">
          All Orders
        </span>
      </div>

      <div className="w-[94px] h-[44px] flex items-center px-[16px] pt-[10px] pb-[10px]">
        <span className="text-[16px] font-medium leading-[24px] text-[#757575]">
          Pending
        </span>
      </div>

      <div className="w-[94px] h-[44px] flex items-center px-[16px] pt-[10px] pb-[10px]">
        <span className="text-[16px] font-medium leading-[24px] text-[#757575]">
          Reviewed
        </span>
      </div>

      <div className="w-[94px] h-[44px] flex items-center px-[16px] pt-[10px] pb-[10px]">
        <span className="text-[16px] font-medium leading-[24px] text-[#757575]">
          Arrived
        </span>
      </div>

      <div className="w-[36px] h-[44px] flex items-center justify-center px-[4px] pt-[8px] pb-[8px]">
        <div className="w-[28px] h-[28px] p-[4px] rounded-[4px] bg-white flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0.5C7.54 0.5 7.16667 0.873333 7.16667 1.33333V7.16667H1.33333C0.873333 7.16667 0.5 7.54 0.5 8C0.5 8.46 0.873333 8.83333 1.33333 8.83333H7.16667V14.6667C7.16667 15.1267 7.54 15.5 8 15.5C8.46 15.5 8.83333 15.1267 8.83333 14.6667V8.83333H14.6667C15.1267 8.83333 15.5 8.46 15.5 8C15.5 7.54 15.1267 7.16667 14.6667 7.16667H8.83333V1.33333C8.83333 0.873333 8.46 0.5 8 0.5Z"
              fill="#757575"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TabBar;