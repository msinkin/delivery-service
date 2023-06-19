import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to="/" className="flex items-center">
            <img
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 mr-2"
                alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-500">
                Служба доставки
            </span>
        </Link>
    )
}

export default Logo;