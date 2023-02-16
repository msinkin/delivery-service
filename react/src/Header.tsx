import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navigation = [
    { name: t("forBusiness", { ns: "header" }), href: "#" },
    { name: t("forOnlineStores", { ns: "header" }), href: "#" },
    { name: t("about", { ns: "header" }), href: "#" },
    { name: t("forIndividuals", { ns: "header" }), href: "#" },
  ];

  return (
    <div className="px-6 pt-6">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="flex items-center">
            {
              <img
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 mr-2"
                alt="Logo"
              />
            }
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-500">
              Лого
            </span>
          </a>
        </div>
        <button
          type="button"
          className="-m-4 p-4 text-blue-300 hover:text-blue-500 lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm leading-6 text-blue-300 hover:text-blue-500"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
            <LanguageSwitcher/>
          <a href="#" className="text-sm font-semibold leading-6 text-blue-500">
            {t("signIn", { ns: "header" })} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-0 z-10 bg-white p-6 lg:hidden font-noto">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center">
              {
                <img
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 mr-2"
                  alt="Logo"
                />
              }
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-500">
                Лого
              </span>
            </a>
            <button
              type="button"
              className="-m-4 p-4 text-blue-300 hover:text-blue-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="font-semibold leading-6 text-blue-300">
            <div className="py-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 p-3 block rounded-lg hover:bg-blue-300/10 hover:text-blue-500"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a
              href="#"
              className="-mx-3 p-3 block rounded-lg hover:bg-blue-300/10 hover:text-blue-500"
            >
              {t("signIn", { ns: "header" })}
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}

export default Header;
