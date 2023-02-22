import { useTranslation } from "react-i18next";
import mockup from "@images/mockup.svg";
//import heroBackground from "./assets/land.svg";

function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 py-24 sm:py-40 lg:py-48">
          <div className="mr-auto place-self-center lg:col-span-7">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-blue-300 ring-1 ring-blue-500/10 hover:ring-blue-500/20">
                Новая версия Sturdy уже доступна.{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Узнать больше<span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-6xl font-bold tracking-tight text-blue-900">
                {t("title", { ns: "hero" })}
              </h1>
              <p className="mt-6 text-lg leading-8 text-blue-300">
                {t("description", { ns: "hero" })}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
                <input
                  className="grow shadow-md shadow-blue-300/25 rounded-full bg-white text-blue-500 placeholder-blue-300 py-2 p-8"
                  placeholder={t("trackInputPlaceholder", { ns: "hero" }) || ""}
                />
                <button className="bg-blue-500 text-white py-2 px-12 rounded-full">
                  {t("trackButton", { ns: "hero" })}
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:col-span-5 lg:flex">
            <img src={mockup} alt="mockup" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
