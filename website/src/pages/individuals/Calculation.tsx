import Button from "@components/elements/Button";
import Textbox from "@components/elements/Textbox";
import { useTranslation } from "react-i18next";
import { useParams, useSearchParams } from "react-router-dom";

function CalculationPage() {
    const { t, i18n } = useTranslation();
    let [searchParams] = useSearchParams();

    return (
        <div className="max-w-screen-xl mx-auto flex flex-wrap">
            <div className="text-blue-300">
                <h2 className="text-4xl font-bold mb-4 text-blue-900">Оформить посылку</h2>
                <p className="mb-6 font-light text-gray-500 dark:text-gray-400 sm:text-xl">Рассчитайте стоимость и срок доставки</p>
                <h2 className="text-4xl font-bold mb-4 text-blue-900">Параметры доставки</h2>
                <form className="space-y-8">
                    <Textbox
                        value={searchParams.get("from") || ""}
                        label={t("fromAddress", { ns: "hero" }) || ""}
                        for="fromAddress" />
                    <Textbox
                        value={searchParams.get("to") || ""}
                        label={t("toAddress", { ns: "hero" }) || ""}
                        for="toAddress" />
                    <div className="flex flex-wrap space-x-4">
                        <div className="grow">
                            <Textbox
                                label="Вес"
                                placeholder="100 г"
                                for="weight" />
                        </div>
                        <div className="grow">
                            <Textbox
                                label="Ценность"
                                placeholder="1000"
                                for="value" />
                        </div>
                    </div>
                    <Button type="submit">{t("trackButton", { ns: "hero" })}</Button>
                </form>
            </div>
        </div>
    )
}

export default CalculationPage;