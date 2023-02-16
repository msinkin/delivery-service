import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const languages: any = {
    en: "English",
    ru: "Русский",
  };

  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.resolvedLanguage);

  return (
    <div className="w-32 z-10">
      <Listbox
        value={currentLanguage}
        onChange={(s) => {
            setCurrentLanguage(s);
          i18n.changeLanguage(s);
        }}
      >
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full rounded-lg bg-white py-2 pl-4 text-left shadow-md shadow-blue-300/25 text-sm">
            <span className="block text-blue-500">{languages[currentLanguage]}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-blue-300"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-md shadow-blue-300/25 ring-1 text-sm">
            {Object.keys(languages).map((language) => (
              <Listbox.Option
                key={language}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 px-4
                    ${active ? "bg-blue-300/10 text-blue-500" : "text-blue-300"}
                    `
                }
                value={language}
              >
                <span className="block truncate">{languages[language]}</span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}

export default LanguageSwitcher;
