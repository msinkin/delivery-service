import { useTranslation } from "react-i18next";
import mockup from "@images/mockup.svg";
import HeroTabs from "./Tabs";
import heroBackground from "@images/land.svg";
import Button from "@components/elements/Button";

function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <main style={{ background: `url(${heroBackground})` }}>
      <div className="relative px-6 lg:px-8">
        <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 py-24 sm:py-40 lg:py-48">
          <div className="mr-auto place-self-center lg:col-span-7">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full py-1 px-3 text-base leading-6 text-blue-300 ring-1 ring-blue-500/10 hover:ring-blue-500/20">
                {t("promoText", { ns: "hero" })}{" "}
                <a href="#" className="font-semibold text-blue-300">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {t("promoButton", { ns: "hero" })}<span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-7xl font-bold tracking-tight text-blue-900">
                {t("title", { ns: "hero" })}
              </h1>
              <p className="mt-6 text-xl leading-8 text-blue-300">
                {t("description", { ns: "hero" })}
              </p>
              <HeroTabs />
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
