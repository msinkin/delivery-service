import { Link } from "react-router-dom";

interface IFooterColumnProps {
    title: string,
    nav: { name: string, href: string }[]
}

function FooterColumn({ title, nav }: IFooterColumnProps) {
    return (
        <div>
            <h2 className="mb-6 text-xl font-semibold text-blue-500 uppercase">
                {title}
            </h2>
            <ul className="text-blue-300 text-lg">
                {nav.map((item, index) => (
                    <li key={index} className="mb-4">
                        <Link to={item.href} className="hover:underline">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterColumn;