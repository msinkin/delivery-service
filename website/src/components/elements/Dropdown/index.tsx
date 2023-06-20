import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction, useState } from "react";

function Dropdown({ values, selecred }: { values: string[], selecred: [number, Dispatch<SetStateAction<number>>] }) {
    const [index, setIndex] = selecred;

    return (
        <Listbox
            value={index}
            onChange={(v) => { setIndex(v) }}
        >
            <div className="relative mt-1">
                <Listbox.Button className="relative w-full rounded-lg bg-white py-2 pl-4 text-left shadow-md shadow-blue-300/25 text-base">
                    <span className="block text-blue-500">{values[index]}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                            className="h-5 w-5 text-blue-300"
                            aria-hidden="true"
                        />
                    </span>
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-md shadow-blue-300/25 ring-1 text-base">
                    {values.map((value, i) => (
                        <Listbox.Option
                            key={i}
                            className={({ active }) =>
                                `relative cursor-pointer select-none py-2 px-4
                                ${active ? "bg-blue-300/10 text-blue-500" : "text-blue-300"}
                                `
                            }
                            value={i}
                        >
                            <span className="block truncate">{value}</span>
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </div>
        </Listbox>
    )
}

export default Dropdown;