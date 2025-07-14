import { AnswerBlock, AssignedColumn, IndexColumn, JobRequestColumn, SpreadsheetHeaderBar, StatusColumn, SubmittedColumn, SubmitterColumn, ToolbarRow, UrlColumn } from "../components/index.components";

export default function Dashboard() {
    return(<>
        <SpreadsheetHeaderBar />
        <ToolbarRow />
        <main className="py-4">
            <IndexColumn />
            <JobRequestColumn />
            <SubmitterColumn />
            <StatusColumn />
            <SubmittedColumn />
            <UrlColumn />
            <AssignedColumn />
            <AnswerBlock />
        </main>
    </>
    )
}