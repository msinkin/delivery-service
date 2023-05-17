import Button from "@components/elements/Button";
import Textbox from "@components/elements/Textbox";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function SearchTab() {
    const { t, i18n } = useTranslation();
    const [trackNumber, setTrackNumber] = useState("");

    return (
        <Tab.Panel className="flex flex-col sm:flex-row sm:items-center">
            <Textbox
                value={trackNumber}
                onChange={(e) => setTrackNumber(e.target.value)}
                placeholder={t("trackInputPlaceholder", { ns: "hero" }) || ""}/>
            <Link to={`/track/${trackNumber}`}>
                <Button>{t("trackButton", { ns: "hero" })}</Button>
            </Link>
        </Tab.Panel>
    )
}

export default SearchTab;