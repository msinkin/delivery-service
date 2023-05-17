import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";

import { useAppSelector } from "hooks";
import LanguageSwitcher from "@components/elements/LanguageSwitcher";
import ConnectWalletRedux from "@components/elements/ConnectWallet";
import MobileMenu from "./MobileMenu";
import Logo from "@components/elements/Logo";

function Header() {
  const selectedAddress = useAppSelector(state => state.auth.selectedAddress);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navigation = [
    { name: t("forBusiness", { ns: "header" }), href: "#" },
    { name: t("forOnlineStores", { ns: "header" }), href: "#" },
    { name: t("about", { ns: "header" }), href: "/about" },
    { name: t("forIndividuals", { ns: "header" }), href: "/career" },
  ];

  return (
    <div className="px-6 pt-6">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <button
          type="button"
          className="-m-4 p-4 text-blue-300 hover:text-blue-500 lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className="h-10 w-10" aria-hidden="true" />
        </button>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-base leading-6 text-blue-300 hover:text-blue-500"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <LanguageSwitcher className="w-32 z-10 mx-4" />
          {selectedAddress || <ConnectWalletRedux />}
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <MobileMenu setMobileMenuOpen={setMobileMenuOpen} />
      </Dialog>
    </div>
  );
}

export default Header;
