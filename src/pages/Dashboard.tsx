import { IndexColumn, JobRequestColumn, SpreadsheetHeaderBar, StatusColumn, SubmittedColumn, SubmitterColumn, ToolbarRow } from "../components/index.components";

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
        </main>
    </>
    )
}