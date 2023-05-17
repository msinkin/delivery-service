import { Tab } from "@headlessui/react";
import SearchTab from "./SearchTab";
import CalculateTab from "./CalculateTab";
import { useTranslation } from "react-i18next";

function HeroTabs() {
    const { t, i18n } = useTranslation();

    return (
        <Tab.Group>
            <div className="bg-blue-300/5 p-3 rounded-3xl mt-5 text-lg">
                <Tab.List className="text-left mb-3">
                    <Tab className="w-full sm:w-auto text-blue-300 ui-selected:bg-white ui-selected:text-blue-500 px-7 py-3 rounded-full mr-3">{t("searchTab", { ns: "hero" })}</Tab>
                    <Tab className="w-full sm:w-auto text-blue-300 ui-selected:bg-white ui-selected:text-blue-500 px-7 py-3 rounded-full">{t("calculateTab", { ns: "hero" })}</Tab>
                </Tab.List>
                <Tab.Panels>
                    <SearchTab />
                    <CalculateTab />
                </Tab.Panels>
            </div>
        </Tab.Group>
    )
}

export default HeroTabs;