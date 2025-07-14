import React from "react";
import {
  useTable,
  Column,
  useFlexLayout,
  TableOptions,
  TableInstance,
} from "react-table";

type DataType = {
  priority: string;
  dueDate: string;
};

const getPriorityColor = (level: string) => {
  switch (level.toLowerCase()) {
    case "medium":
      return "text-[#C29210]";
    case "high":
      return "text-[#EF4D44]";
    case "low":
      return "text-[#1A8CFF]";
    default:
      return "text-gray-300";
  }
};

const AnswerBlock: React.FC = () => {
  const fillerRows = 18;

  const data = React.useMemo<DataType[]>(
    () => [
      { priority: "Medium", dueDate: "20-11-2024" },
      { priority: "High", dueDate: "30-10-2024" },
      { priority: "Medium", dueDate: "10-12-2024" },
      { priority: "Low", dueDate: "15-01-2025" },
      { priority: "Low", dueDate: "30-01-2025" },
    ],
    []
  );

  const columns = React.useMemo<Column<DataType>[]>(
    () => [
      {
        Header: "Priority",
        accessor: "priority",
        Cell: ({ value }) => (
          <div
            className={`w-[48px] h-[16px] text-[12px] leading-4 font-semibold text-center rounded ${getPriorityColor(
              value
            )}`}
          >
            {value}
          </div>
        ),
      },
      {
        Header: "Due Date",
        accessor: "dueDate",
        Cell: ({ value }) => (
          <span className="text-[12px] font-normal text-[#121212] leading-4 w-[109px] text-right truncate">
            {value}
          </span>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable<DataType>(
    {
      columns,
      data,
    } as TableOptions<DataType>,
    useFlexLayout
  ) as TableInstance<DataType>;

  const { getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div className="w-[251px] space-y-[1px]">
      {/* header */}
      <div className="w-full h-[32px] px-4 bg-[#DCCFFC] flex items-center">
        <div className="w-[179px] h-[24px] px-1 py-[2px] rounded-[4px] bg-white flex items-center gap-1">
          <div className="w-[16px] h-[16px] flex items-center justify-center">🔤</div>
          <span className="text-[14px] font-medium leading-5 text-[#505450]">
            Answer a question
          </span>
          <div className="w-[20px] h-[20px] rounded-[4px] flex items-center justify-center">
            ⋯
          </div>
        </div>
      </div>

      {/* content cell */}
      <div className="flex space-x-[1px]">
        {headerGroups.map((headerGroup) =>
          headerGroup.headers.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="w-[125px] space-y-[1px]"
            >
              {/* content cell header */}
              <div className="h-[32px] px-[8px] pr-[4px] flex items-center bg-[#DCCFFC]">
                <span className="text-[12px] font-semibold text-[#121212]">
                  {column.render("Header")}
                </span>
              </div>

              {/* content cells */}
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <div
                    key={i}
                    className="h-[32px] px-2 flex items-center bg-white justify-between border-r"
                  >
                    {row.cells[columnIndex].render("Cell")}
                  </div>
                );
              })}

              {/* filler row */}
              {Array.from({ length: fillerRows }).map((_, idx) => (
                <div
                  key={`filler-${columnIndex}-${idx}`}
                  className="h-[32px] p-2 bg-white border-r"
                ></div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AnswerBlock;