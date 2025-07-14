import React from "react";
import {
  useTable,
  Column,
  useFlexLayout,
  TableOptions,
  TableInstance,
} from "react-table";

type UrlType = {
  url: string;
};

const UrlColumn: React.FC = () => {
  const urls = React.useMemo<UrlType[]>(
    () => [
      { url: "www.aishapatel.com" },
      { url: "www.irfankhanportfolio.com" },
      { url: "www.markjohnson.dev" },
      { url: "www.emilygreen.io" },
      { url: "www.jessicabrown.me" },
    ],
    []
  );

  const columns = React.useMemo<Column<UrlType>[]>(
    () => [
      {
        Header: "URL",
        accessor: "url",
        Cell: ({ value }) => (
          <span className="text-[12px] leading-4 font-normal text-[#121212] underline decoration-solid underline-offset-0 truncate w-[108px]">
            {value}
          </span>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable<UrlType>(
    {
      columns,
      data: urls,
    } as TableOptions<UrlType>,
    useFlexLayout
  ) as TableInstance<UrlType>;

  const { headerGroups, rows, prepareRow } = tableInstance;

  const fillerTopRows = 1;
  const fillerBottomRows = 19;

  return (
    <div className="w-[124px] space-y-[1px]">

      {/* top filler */}
      <div
        className="w-[124px] h-[32px] p-2 bg-white border-r border-[#E9E9E9]"
      ></div>

      <div className="w-[124px] h-[32px] p-2 bg-[#EEEEEE] text-sm font-medium text-gray-800 flex items-center gap-1 border-r border-[#E9E9E9]">
        🌐 <span>URL</span>
      </div>

      {headerGroups.map((headerGroup) =>
        headerGroup.headers.map((column, columnIndex) => (
          <div key={columnIndex} className="space-y-[1px]">
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <div
                  key={i}
                  className="w-[124px] h-[32px] px-2 flex items-center bg-white border-r border-[#E9E9E9] hover:bg-gray-100 cursor-pointer"
                >
                  {row.cells[columnIndex].render("Cell")}
                </div>
              );
            })}
            
            {Array.from({ length: fillerBottomRows }).map((_, idx) => (
              <div
                key={`filler-${columnIndex}-${idx}`}
                className="w-[124px] h-[32px] p-2 bg-white border-r border-[#E9E9E9]"
              ></div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default UrlColumn;
