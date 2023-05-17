import { ButtonHTMLAttributes } from "react";

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className="w-full bg-blue-500 text-white py-3 px-12 rounded-full mb-4 sm:mb-0"
            {...props}>
            {props.children}
        </button>
    )
}

export default Button;