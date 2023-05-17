import { DetailedHTMLProps, HTMLProps, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface ITextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    label?: string,
    for?: string
}

function Textarea(props: ITextareaProps) {
    if (props.label) {
        return (
            <div className="w-full">
                <label className="block uppercase tracking-wide text-blue-300 text-xs font-bold mb-2" htmlFor={props.for}>
                    {props.label}
                </label>
                <textarea
                    className="w-full border border-blue-300/25 focus:border-blue-500 px-8 py-3 bg-white text-blue-500 placeholder-blue-300 shadow-md shadow-blue-300/25 rounded-3xl mb-3 sm:mb-0"
                    id={props.for}
                    {...props}
                />
            </div>
        )
    } else {
        return (
            <textarea
                className="w-full border border-blue-300/25 focus:border-blue-500 px-8 py-3 bg-white text-blue-500 placeholder-blue-300 shadow-md shadow-blue-300/25 rounded-3xl mb-3 sm:mb-0"
                {...props}
            />
        )
    }
}

export default Textarea;