import React from "react";

const AddColumn: React.FC = () => {
  const totalRows = 26;

  return (
    <div className="w-[124px] h-[872px] flex flex-col border-r border-gray-200 bg-white">
      
      <div className="h-[32px] py-[15px] flex items-center justify-center border-b border-gray-200 bg-[#E2E2E2]">
        <span className="text-[20px] leading-[20px] text-[#505050]">+</span>
      </div>


      {Array.from({ length: totalRows - 1 }).map((_, i) => (
        <div
          key={i}
          onClick={() => console.log(`Clicked on Add-Coulmn's filler row ${i}`)}
          className="h-[32px] py-4 px-2 border-b border-gray-200 flex items-center bg-white hover:bg-gray-100"
        ></div>
      ))}
    </div>
  );
};

export default AddColumn;
