import Button from "@components/elements/Button";
import Textbox from "@components/elements/Textbox";
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
            <Textbox
                value={fromAddress}
                onChange={(e) => setFromAddress(e.target.value)}
                placeholder={t("fromAddress", { ns: "hero" }) || ""} />
            <Textbox
                value={toAddress}
                onChange={(e) => setToAddress(e.target.value)}
                placeholder={t("toAddress", { ns: "hero" }) || ""} />
            <Link to={`/calc?from=${fromAddress}&to=${toAddress}`}>
                <Button>{t("sendButton", { ns: "hero" })}</Button>
            </Link>
        </Tab.Panel>
    )
}

export default CalculateTab;