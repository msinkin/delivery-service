import PriceBox from '@components/elements/PriceBox';
import { useTranslation } from "react-i18next";

function Pricing() {
    const { t, i18n } = useTranslation("pricing");

    return (
        <div className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">{t("title")}</h2>
                    <p className="mt-6 text-lg leading-8 text-blue-300">
                        {t("description")}
                    </p>
                </div>
                {
                    t("cards", { returnObjects: true }).map((card, index) =>
                        <PriceBox
                            key={index}
                            price={card.price}
                            title={card.title}
                            description={card.description}
                            includedFeatures={card.includedFeatures}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Pricing;