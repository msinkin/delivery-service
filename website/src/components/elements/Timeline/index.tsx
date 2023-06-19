import TimelineElement from "./TimelineElement";

interface HistoryItem {
    title: string,
    description: string,
    date: Date
}

function Timeline(history: HistoryItem[]) {
    return (
        <ol className="border-l-2 border-blue-500">
            {
                history.map((historyItem: HistoryItem, index: number) =>
                    <TimelineElement key={index} title={historyItem.title} description={historyItem.description} date={historyItem.date} />
                )
            }
        </ol>
    )
}