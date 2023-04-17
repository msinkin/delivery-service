import { Tab } from "@headlessui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function SearchTab() {
    const { t, i18n } = useTranslation();
    const [trackNumber, setTrackNumber] = useState("");
    
    return (
        <Tab.Panel className="flex flex-col sm:flex-row sm:items-center">
            <input
                className="w-full border border-blue-300/25 focus:border-blue-500 px-8 py-3 bg-white text-blue-500 placeholder-blue-300 shadow-md shadow-blue-300/25 rounded-full mb-4 sm:mb-0"
                placeholder={t("trackInputPlaceholder", { ns: "hero" }) || ""}
                onChange={(e) => setTrackNumber(e.target.value)}
                value={trackNumber}
            />
            <Link to={`/track/${trackNumber}`} className="bg-blue-500 text-white py-3 px-12 rounded-full mb-4 sm:mb-0">
                {t("trackButton", { ns: "hero" })}
            </Link>
        </Tab.Panel>
    )
}

export default SearchTab;