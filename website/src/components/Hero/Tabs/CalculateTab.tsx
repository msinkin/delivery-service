import { Tab } from "@headlessui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function CalculateTab() {
    const { t, i18n } = useTranslation();
    const [fromAddress, setFromAddress] = useState("");
    const [toAddress, setToAddress] = useState("");

    
    return (
        <Tab.Panel className="flex flex-col sm:flex-row sm:items-center">
            <input
                className="w-full border border-blue-300/25 focus:border-blue-500 px-8 py-3 bg-white text-blue-500 placeholder-blue-300 shadow-md shadow-blue-300/25 rounded-full mb-4 sm:mb-0"
                placeholder={t("fromAddress", { ns: "hero" }) || ""}
                onChange={e => setFromAddress(e.target.value)}
                value={fromAddress}
            />
            <input
                className="w-full border border-blue-300/25 focus:border-blue-500 px-8 py-3 bg-white text-blue-500 placeholder-blue-300 shadow-md shadow-blue-300/25 rounded-full mb-4 sm:mb-0"
                placeholder={t("toAddress", { ns: "hero" }) || ""}
                onChange={e => setToAddress(e.target.value)}
                value={toAddress}
            />
            <Link to={`/calc/${fromAddress}/${toAddress}`} className="bg-blue-500 text-white py-3 px-12 rounded-full mb-4 sm:mb-0">
                {t("sendButton", { ns: "hero" })}
            </Link>
        </Tab.Panel>
    )
}

export default CalculateTab;