import { DetailedHTMLProps, HTMLProps, InputHTMLAttributes } from "react";

interface ITextboxProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string,
    for?: string
}

function Textbox(props: ITextboxProps) {
    if (props.label) {
        return (
            <div className="w-full">
                <label className="block uppercase tracking-wide text-blue-300 text-xs font-bold mb-2" htmlFor={props.for}>
                    {props.label}
                </label>
                <input
                    className="w-full border border-blue-300/25 focus:border-blue-500 px-8 py-3 bg-white text-blue-500 placeholder-blue-300 shadow-md shadow-blue-300/25 rounded-full mb-3 sm:mb-0"
                    id={props.for}
                    {...props}
                />
            </div>
        )
    } else {
        return (
            <input
                className="w-full border border-blue-300/25 focus:border-blue-500 px-8 py-3 bg-white text-blue-500 placeholder-blue-300 shadow-md shadow-blue-300/25 rounded-full mb-3 sm:mb-0"
                {...props}
            />
        )
    }
}

export default Textbox;