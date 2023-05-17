interface IProps {
    title: string
    description: string,
    date: Date
}

function TimelineElement({ title, description, date } : IProps) {
    return (
        <li>
            <div className="flex-start flex items-center">
                <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500"></div>
                <h4 className="-mt-2 text-xl font-semibold">{title}</h4>
            </div>
            <div className="ml-6 pb-6">
                <a>
                    {date.toLocaleDateString()}
                </a>
                <p className="mt-2">
                    {description}
                </p>
            </div>
        </li>
    )
}

export default TimelineElement;