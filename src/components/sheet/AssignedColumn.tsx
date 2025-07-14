import React from "react";
import {
  useTable,
  Column,
  useFlexLayout,
  TableOptions,
  TableInstance,
} from "react-table";

type AssignedUser = {
  name: string;
};

const assignedUsersData: AssignedUser[] = [
  { name: "Sophie Choudhury" },
  { name: "Tejaa Pandey" },
  { name: "Rachel Lee" },
  { name: "Tom Wright" },
  { name: "Kevin Smith" },
];

const AssignedColumn: React.FC = () => {
  const columns = React.useMemo<Column<AssignedUser>[]>(
    () => [
      {
        Header: "Assigned",
        accessor: "name",
        Cell: ({ value }) => (
          <span className="text-[12px] leading-4 font-normal text-[#121212] truncate">
            {value}
          </span>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable<AssignedUser>(
    {
      columns,
      data: assignedUsersData,
    } as TableOptions<AssignedUser>,
    useFlexLayout
  ) as TableInstance<AssignedUser>;

  const { rows, prepareRow } = tableInstance;

  const fillerRows = 18;

  return (
    <div className="w-[124px] space-y-[1px]">
      {/* header */}
      <div className="w-[124px] h-[32px] px-4 bg-[#D2E0D4] flex items-center">
        <div className="w-[81px] h-[24px] px-1 py-[2px] rounded-[4px] flex items-center gap-1">
          <div className="w-[16px] h-[16px] flex items-center justify-center">
            🔤
          </div>
          <span className="text-[14px] font-medium leading-5 text-[#505450]">
            ABC
          </span>
          <div className="w-[20px] h-[20px] rounded-[4px] flex items-center justify-center">
            ⋯
          </div>
        </div>
      </div>

      {/* subheader */}
      <div className="w-[124px] h-[32px] px-[8px] pr-[4px] flex items-center gap-1 bg-[#D2E0D4]">
        <div className="w-[16px] h-[16px] flex items-center justify-center">
          🧑‍💼
        </div>
        <span className="w-[92px] h-[16px] text-[12px] leading-4 font-semibold text-[#666C66] truncate">
          Assigned
        </span>
      </div>

      {/* content cells */}
      {rows.map((row, idx) => {
        prepareRow(row);
        return (
          <div
            key={idx}
            className="w-[124px] h-[32px] p-2 flex items-center bg-white hover:bg-gray-100 cursor-pointer border-r"
          >
            {row.cells.map((cell) => cell.render("Cell"))}
          </div>
        );
      })}

      {/* filler row */}
      {Array.from({ length: fillerRows }).map((_, idx) => (
        <div
          key={`filler-${idx}`}
          className="w-[124px] h-[32px] p-2 bg-white border-r"
        ></div>
      ))}
    </div>
  );
};

export default AssignedColumn;