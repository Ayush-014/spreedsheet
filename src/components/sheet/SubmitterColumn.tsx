import React from "react";
import {
  useTable,
  Column,
  useFlexLayout,
  TableOptions,
  TableInstance,
} from "react-table";

type Submitter = {
  name: string;
};

const submittersData: Submitter[] = [
  { name: "Aisha Patel" },
  { name: "Irfan Khan" },
  { name: "Mark Johnson" },
  { name: "Emily Green" },
  { name: "Jessica Brown" },
];

const SubmitterColumn: React.FC = () => {
  const columns = React.useMemo<Column<Submitter>[]>(
    () => [
      {
        Header: "Submitter",
        accessor: "name",
        Cell: ({ value }) => (
          <span className="text-[12px] leading-4 font-normal text-[#121212] truncate w-[108px]">
            {value}
          </span>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable<Submitter>(
    {
      columns,
      data: submittersData,
    } as TableOptions<Submitter>,
    useFlexLayout
  ) as TableInstance<Submitter>;

  const { rows, prepareRow } = tableInstance;
  const fillerRows = 19;

  return (
    <div className="w-[124px] space-y-[1px]">

      {/* first filler  */}
      <div
        className="w-[124px] h-[32px] p-2 bg-[#E2E2E2] border-r"
      ></div>

      {/* header */}
      <div className="w-[124px] h-[32px] px-[8px] pr-[4px] bg-[#EEEEEE] flex items-center justify-between">
        {/* icon + label */}
        <div className="w-[88px] h-[16px] flex items-center gap-[4px]">
          {/* icon */}
          <div className="w-[16px] h-[16px] flex items-center justify-center">
            🌐
          </div>

          {/* label */}
          <span className="w-[68px] h-[16px] text-[12px] font-semibold text-[#757575] leading-4 truncate">
            Submitter
          </span>
        </div>

        {/* dropdown */}
        <div className="w-[20px] h-[20px] p-[4px] rounded-[4px] flex items-center justify-center">
          <span className="w-[12px] text-[#757575] text-sm leading-none">⋯</span>
        </div>
      </div>


      {/* content row */}
      {rows.map((row, idx) => {
        prepareRow(row);
        return (
          <div
            key={idx}
            className="w-[124px] h-[32px] px-2 flex items-center bg-white hover:bg-gray-100 cursor-pointer border-r"
          >
            {row.cells.map((cell) => cell.render("Cell"))}
          </div>
        );
      })}

      {/* filler rows */}
      {Array.from({ length: fillerRows }).map((_, idx) => (
        <div
          key={`filler-${idx}`}
          className="w-[124px] h-[32px] p-2 bg-white border-r"
        ></div>
      ))}
    </div>
  );
};

export default SubmitterColumn;
