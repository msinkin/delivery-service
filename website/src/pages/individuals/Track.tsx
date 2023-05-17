import Button from "@components/elements/Button";
import Textbox from "@components/elements/Textbox";
import Timeline from "@components/elements/Timeline";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

function Track() {
    let { trackNumber } = useParams();
    const { t, i18n } = useTranslation();
    const [newTrackNumber, setNewTrackNumber] = useState("");

    return (
        <div className="container m-auto text-blue-900">
            <div className="flex flex-col sm:flex-row m-5 mt-20 text-lg">
                <Textbox
                    value={newTrackNumber}
                    onChange={(e) => setNewTrackNumber(e.target.value)}
                    placeholder={t("trackInputPlaceholder", { ns: "hero" }) || ""}
                />
                <Link to={`/track/${newTrackNumber}`}>
                    <Button>{t("trackButton", { ns: "hero" })}</Button>
                </Link>
            </div>
            <div className="bg-blue-300/5 p-6 m-5 rounded-3xl">
                <div className="flex justify-between text-xl">
                    <div>№ {trackNumber}</div>
                    <div>Москва - Москва</div>
                    <div>Вручён</div>
                </div>
                <hr className="border-blue-300 border-dashed my-5" />
                <Timeline />
            </div>
        </div>
    )
}

export default Track;