import { CheckIcon } from "@heroicons/react/24/outline";
import Button from "../Button";
import { useTranslation } from "react-i18next";

interface IProps {
    title: string,
    description: string,
    includedFeatures: string[],
    price: string
}

function PriceBox({ title, description, includedFeatures, price }: IProps) {
    const { t } = useTranslation("pricebox");

    return (
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-blue-900">{title}</h3>
                <p className="mt-6 text-base leading-7 text-blue-300">
                    {description}
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-blue-900">{t("conditions")}</h4>
                    <div className="h-px flex-auto" />
                </div>
                <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-blue-300 sm:grid-cols-2 sm:gap-6"
                >
                    {includedFeatures.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                            <CheckIcon className="h-6 w-5 flex-none" aria-hidden="true" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                        {/*<p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>*/}
                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                            <span className="text-5xl font-bold tracking-tight text-blue-900">{price}</span>
                            <span className="text-sm font-semibold leading-6 tracking-wide text-blue-900">{t("money")}</span>
                        </p>
                        <Button type="submit">{t("calculate")}</Button>
                        {/*
                        <p className="mt-6 text-xs leading-5 text-gray-600">
                            Invoices and receipts available for easy company reimbursement
                        </p>
                        */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceBox;