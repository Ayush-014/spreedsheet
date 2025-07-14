import { ChevronDown, Filter, Eye, ArrowDownUp, Download, Upload, Share2, Plus } from "lucide-react";

export default function ToolbarRow() {
  return (
    <div className="w-full h-[48px] px-2 py-[6px] flex items-center justify-between border-b border-[#EEEEEE] bg-white gap-2">
      {/* left block */}
      <div className="flex items-center gap-2">
        {/* tool-bar */}
        <button className="w-[91px] h-[36px] px-2 flex items-center gap-1 rounded-[4px] bg-white">
          <span className="text-[14px] text-[#121212] leading-[20px]">Tool bar</span>
          <ChevronDown className="w-4 h-4 text-[#121212]" />
        </button>

        {/* verticalbar */}
        <div className="w-[1px] h-[24px] bg-[#EEEEEE]" />

        {/* action button */}
        <div className="flex items-center gap-1">
          <button className="flex items-center gap-2 px-2 py-[8px] rounded-[6px]">
            <Eye className="w-5 h-5 text-[#121212]" />
            <span className="text-[14px] text-[#121212]">Hide fields</span>
          </button>

          <button className="flex items-center gap-2 px-2 py-[8px] rounded-[6px]">
            <ArrowDownUp className="w-5 h-5 text-[#121212]" />
            <span className="text-[14px] text-[#121212]">Sort</span>
          </button>

          <button className="flex items-center gap-2 px-2 py-[8px] rounded-[6px]">
            <Filter className="w-5 h-5 text-[#121212]" />
            <span className="text-[14px] text-[#121212]">Filter</span>
          </button>

          <button className="flex items-center gap-2 px-2 py-[8px] rounded-[6px]">
            <Eye className="w-5 h-5 text-[#121212]" />
            <span className="text-[14px] text-[#121212]">Cell view</span>
          </button>
        </div>
      </div>

      {/* right block */}
      <div className="flex items-center gap-2">
        {/* import */}
        <button className="flex items-center gap-2 px-2 py-[8px] border border-[#D0D0D0] rounded-[6px]">
          <Upload className="w-5 h-5 text-[#545454]" />
          <span className="text-[14px] text-[#545454]">Import</span>
        </button>

        {/* export */}
        <button className="flex items-center gap-2 px-2 py-[8px] border border-[#D0D0D0] rounded-[6px]">
          <Download className="w-5 h-5 text-[#545454]" />
          <span className="text-[14px] text-[#545454]">Export</span>
        </button>

        <button className="flex items-center gap-2 px-2 py-[8px] border border-[#D0D0D0] rounded-[6px]">
          <Share2 className="w-5 h-5 text-[#545454]" />
          <span className="text-[14px] text-[#545454]">Share</span>
        </button>

        {/* new action */}
        <button className="flex items-center gap-2 px-6 py-[8px] bg-[#4B6A4F] rounded-[6px]">
          <Plus className="w-4 h-4 text-white" />
          <span className="text-[14px] font-medium text-white">New Action</span>
        </button>
      </div>
    </div>
  );
};
