import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import objects, { IObjects } from '../../../Placemarks';
import { useState } from "react";
import { ArchiveBoxIcon, ClockIcon } from '@heroicons/react/24/outline';
import Button from "@components/elements/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Points() {
    const { t } = useTranslation("points");
    const [currentObject, setCurrentObject] = useState<IObjects>();
    const [cords, setCords] = useState([56.010569, 92.852572]);

    return (
        <YMaps>
            <section className="max-w-screen-xl mx-auto flex flex-row flex-grow basis-0 shadow-md shadow-blue-300/25 rounded-3xl mt-6">
                <Map
                    width="100%"
                    height="600px"
                    state={{ center: cords, zoom: 12 }}
                    options={{
                        minZoom: 10,
                        maxZoom: 15,
                        autoFitToViewport: "always",
                        copyrightUaVisible: false,
                        copyrightLogoVisible: false,
                        copyrightProvidersVisible: false
                    }}>
                    {objects.map((object, index) => (
                        <Placemark
                            key={index}
                            geometry={object.coords}
                            options={
                                {
                                    iconColor: 'blue'
                                }}
                            onClick={() => {
                                setTimeout(() => { setCurrentObject(object); setCords(object.coords) }, 0)
                            }}
                        />
                    ))}
                </Map>
                {
                    currentObject &&
                    <div className="w-[500px] p-4 space-y-4 text-blue-900">
                        <h1 className="font-semibold">{currentObject.name}</h1>
                        <h2 className="font-semibold">{currentObject.address}</h2>
                        <div className="flex space-x-2">
                            <ArchiveBoxIcon className="w-6 h-6" />
                            <p>{currentObject.weight}</p>
                        </div>
                        <div className="flex space-x-2">
                            <ClockIcon className="w-6 h-6" />
                            <div>
                                {currentObject.time.map((time, index) => (
                                    <p key={index}>{time}</p>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <Link to={`/calc?from=${currentObject.address}`}>
                                    <Button>{t("sendPackage")}</Button>
                                </Link>
                            </div>
                            <div>
                                <Link to={`/calc?to=${currentObject.address}`}>
                                    <Button>{t("recivePackage")}</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                }
            </section>
        </YMaps>
    )
}

export default Points;