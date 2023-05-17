import { Dispatch, SetStateAction } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import Logo from "@components/elements/Logo";

function MobileMenu({ setMobileMenuOpen }: { setMobileMenuOpen: Dispatch<SetStateAction<boolean>> }) {
    const { t } = useTranslation();

    const navigation = [
        { name: t("forBusiness", { ns: "header" }), href: "#" },
        { name: t("forOnlineStores", { ns: "header" }), href: "#" },
        { name: t("about", { ns: "header" }), href: "/about" },
        { name: t("forIndividuals", { ns: "header" }), href: "/career" },
    ];

    return (
        <Dialog.Panel className="fixed inset-0 z-10 bg-white p-6 lg:hidden font-noto">
            <div className="flex items-center justify-between">
                <Logo />
                <button
                    type="button"
                    className="-m-4 p-4 text-blue-300 hover:text-blue-500"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <XMarkIcon className="h-10 w-10" aria-hidden="true" />
                </button>
            </div>
            <div className="font-semibold leading-6 text-blue-300">
                <div className="py-8">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-xl -mx-3 p-4 block rounded-lg hover:bg-blue-300/10 hover:text-blue-500"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <a
                    href="#"
                    className="text-xl -mx-3 p-4 block rounded-lg hover:bg-blue-300/10 hover:text-blue-500"
                >
                    {t("signIn", { ns: "header" })}
                </a>
            </div>
        </Dialog.Panel>
    )
}

export default MobileMenu;