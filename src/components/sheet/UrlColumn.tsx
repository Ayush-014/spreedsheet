import React from "react";

const urls = [
  "www.aishapatel.com",
  "www.irfankhanportfolio.com",
  "www.markjohnson.dev",
  "www.emilygreen.io",
  "www.jessicabrown.me",
];

const fillerTopRows = 1;
const fillerBottomRows = 19;

const UrlColumn: React.FC = () => {
  return (
    <div className="w-[124px] flex flex-col space-y-[1px]">
      
      <div className="w-[124px] h-[32px] p-2 bg-white border-r border-[#E9E9E9]"></div>

      <div className="w-[124px] h-[32px] p-2 bg-[#EEEEEE] text-sm font-medium text-gray-800 flex items-center gap-1 border-r border-[#E9E9E9]">
        🌐 <span>URL</span>
      </div>

      {urls.map((url, idx) => (
        <div
          key={idx}
          onClick={() => console.log(`Clicked on Url-Coulmn's content row ${idx}`)}
          className="w-[124px] h-[32px] px-2 flex items-center bg-white border-r border-b border-[#E9E9E9] hover:bg-gray-100 cursor-pointer"
        >
          <span className="text-[12px] leading-4 font-normal text-[#121212] underline decoration-solid underline-offset-0 truncate w-[108px]">
            {url}
          </span>
        </div>
      ))}

      {Array.from({ length: fillerBottomRows }).map((_, idx) => (
        <div
          key={`filler-${idx}`}
          onClick={() => console.log(`Clicked on Url-Coulmn's filler row ${idx}`)}
          className="w-[124px] h-[32px] p-2 bg-white border-r border-b border-[#E9E9E9] hover:bg-gray-100"
        ></div>
      ))}
    </div>
  );
};

export default UrlColumn;
