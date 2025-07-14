import { AddColumn, AnswerBlock, AssignedColumn, ExtractColumn, IndexColumn, JobRequestColumn, SpreadsheetHeaderBar, StatusColumn, SubmittedColumn, SubmitterColumn, ToolbarRow, UrlColumn, TabBar } from "../components/index.components";

export default function Dashboard() {
  return (
    <div className="h-screen w-screen flex flex-col font-sans text-gray-800 overflow-hidden">

      <div className="flex flex-col z-10">
        <SpreadsheetHeaderBar />
        <ToolbarRow />
      </div>

      <main className="flex-1 overflow-auto">
        <div className="flex w-max">
          <IndexColumn />
          <JobRequestColumn />
          <SubmittedColumn />
          <StatusColumn />
          <SubmitterColumn />
          <UrlColumn />
          <AssignedColumn />
          <AnswerBlock />
          <ExtractColumn />
          <AddColumn />
        </div>
      </main>

      <div className="z-10">
        <TabBar />
      </div>
    </div>
  );
}
