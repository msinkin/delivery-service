function Table({ header, values }: { header: string[], values: string[][] }) {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase text-blue-500">
                    <tr>
                        {header.map((title, index) =>
                            <th
                                key={index}
                                className="px-6 py-3">
                                {title}
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody className="text-blue-900 bg-blue-300/5 rounded-3xl">
                    {values.map((value, index) =>
                        <tr key={index}>
                            {value.map((column, index) =>
                                <td key={index} className="px-6 py-4">
                                    <p className="text-gray-900 whitespace-no-wrap">{column}</p>
                                </td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    )
}

export default Table;