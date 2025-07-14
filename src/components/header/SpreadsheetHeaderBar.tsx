import React from "react";
import { Search, Bell } from "lucide-react";
import avatar from "../assets/johndoe.png";

export default function SpreadsheetHeaderBar() {
  return (
    <header className="w-full h-[56px] px-4 py-2 flex items-center justify-between border-b border-[#EEEEEE] bg-white">
      {/* left block */}
      <div className="flex items-center gap-4 w-[343px] h-[24px]">
        {/* icon */}
        <div className="w-[24px] h-[24px] flex items-center justify-center">
          <div className="w-[20px] h-[16px] bg-[#618666] rounded-sm" />
        </div>

        {/* breadcrumb */}
        <div className="flex items-center gap-1 text-[14px] font-medium text-[#AFAFAF] leading-[20px]">
          <span>Workspace</span>
          <span className="px-1">›</span>
          <span>Folder 2</span>
          <span className="px-1">›</span>
          <span>Spreadsheet 3</span>
          <span className="px-1">⋯</span>
        </div>
      </div>

      {/* right block */}
      <div className="flex items-center gap-4 w-[325px] h-[40px]">
        {/* search */}
        <div className="flex items-center gap-2 w-[165px] h-[40px] px-3 bg-[#F6F6F6] rounded-[6px]">
          <Search className="w-[16px] h-[16px] text-[#757575]" />
          <span className="text-[12px] text-[#757575] leading-[16px] w-[117px]">
            Search within sheet
          </span>
        </div>

        {/* notification icon */}
        <div className="relative w-[40px] h-[40px] p-2 rounded-[8px] hover:bg-gray-100">
          <Bell className="w-[18px] h-[20px] text-[#121212]" />
          <div className="absolute top-1 right-1 w-[16px] h-[16px] rounded-full bg-[#4B6A4F] border-2 border-white flex items-center justify-center">
            <span className="text-[10px] font-medium text-[#F6F6F6] leading-[16px]">
              2
            </span>
          </div>
        </div>

        {/* profile block */}
        <div className="flex items-center gap-2 p-[6px_12px_6px_8px] rounded-[8px] hover:bg-gray-100 transition">
          <img
            src={avatar}
            alt="User avatar"
            className="w-[28px] h-[28px] rounded-full object-cover"
          />
          <div className="flex flex-col max-w-[120px] leading-tight">
            <span className="text-[12px] font-normal text-[#121212] leading-[16px] truncate">
              John Doe
            </span>
            <span className="text-[10px] text-[#757575] leading-[12px] truncate">
              john.doe@companyname.com
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

