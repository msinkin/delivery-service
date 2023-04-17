import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

function CalculationPage() {
    const { t, i18n } = useTranslation();
    let { fromAddress, toAddress } = useParams();

    return (
        <div className="">
            <div className="text-blue-300">
                <h1 className="text-4xl font-bold mb-4 text-blue-900">Оформить посылку</h1>
                <p className="mb-4">Рассчитайте стоимость и срок доставки</p>
                <h2 className="text-2xl font-bold mb-4 text-blue-900">Параметры доставки</h2>
                <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-blue-300 text-xs font-bold mb-2" htmlFor="grid-password">
                                {t("fromAddress", { ns: "hero" })}
                            </label>
                            <input value={fromAddress} className="border border-blue-300/25 focus:border-blue-500 block w-full px-8 py-2 mb-3 bg-white text-blue-500 placeholder-blue-300 shadow-md shadow-blue-300/25 rounded-full" id="grid-password" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-blue-300 text-xs font-bold mb-2" htmlFor="grid-password">
                                {t("toAddress", { ns: "hero" })}
                            </label>
                            <input value={toAddress} className="border border-blue-300/25 focus:border-blue-500 block w-full px-8 py-2 mb-3 bg-white text-blue-500 placeholder-blue-300 shadow-md shadow-blue-300/25 rounded-full" id="grid-password" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-blue-300 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Вес
                            </label>
                            <input className="border border-blue-300/25 focus:border-blue-500 block w-full px-8 py-2 mb-3 bg-white text-blue-500 placeholder-blue-300 shadow-md shadow-blue-300/25 rounded-full" id="grid-password" placeholder="100 г" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-blue-300 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Ценность
                            </label>
                            <input className="border border-blue-300/25 focus:border-blue-500 block w-full px-8 py-2 mb-3 bg-white text-blue-500 placeholder-blue-300 shadow-md shadow-blue-300/25 rounded-full" id="grid-password" placeholder="1000" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CalculationPage;