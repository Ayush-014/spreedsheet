import { AddColumn, AnswerBlock, AssignedColumn, ExtractColumn, IndexColumn, JobRequestColumn, SpreadsheetHeaderBar, StatusColumn, SubmittedColumn, SubmitterColumn, ToolbarRow, UrlColumn } from "../components/index.components";

export default function Dashboard() {
    return (<div className="min-h-screen font-sans text-gray-800 overflow-hidden">
        <SpreadsheetHeaderBar />
        <ToolbarRow />
        <main className="py-4 overflow-x-auto w-full">
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
    </div>
    )
}