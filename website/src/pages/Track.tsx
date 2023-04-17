import Timeline from "@components/Timeline";
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
                <input
                    className="w-full border border-blue-300/25 focus:border-blue-500 px-8 py-3 bg-white text-blue-500 placeholder-blue-300 shadow-md shadow-blue-300/25 rounded-full mb-3 sm:mb-0"
                    placeholder={t("trackInputPlaceholder", { ns: "hero" }) || ""}
                    onChange={(e) => setNewTrackNumber(e.target.value)}
                    value={newTrackNumber}
                />
                <Link to={`/track/${newTrackNumber}`} className="bg-blue-500 text-white py-3 px-12 rounded-full">
                    {t("trackButton", { ns: "hero" })}
                </Link>
            </div>
            <div className="bg-blue-300/5 p-6 m-5 rounded-3xl">
                <div className="flex justify-between text-xl">
                    <div>№ {trackNumber}</div>
                    <div>Москва - Москва</div>
                    <div>Вручён</div>
                </div>
                <hr className="border-blue-300 border-dashed my-5"/>
                <Timeline/>
            </div>
        </div>
    )
}

export default Track;