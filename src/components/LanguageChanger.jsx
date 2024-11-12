"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const availableLanguages = [
    { code: "en", label: "EN", icon: "cif:gb" },
    { code: "fr", label: "FR", icon: "cif:fr" },
    { code: "ar", label: "AR", icon: "cif:sa" },
  ];
  const [currentLocale, setCurrentLocale] = useState("fr");

  useEffect(() => {
    const detectedLocale = pathname.split("/")[1];
    setCurrentLocale(
      availableLanguages.some(lang => lang.code === detectedLocale)
        ? detectedLocale
        : "fr",
    );
  }, [pathname]);

  const changeLanguage = locale => {
    if (locale !== currentLocale) {
      const newPath = `/${locale}${pathname.replace(
        `/${currentLocale}`,
        "",
      )}`;
      router.push(newPath);

      setCurrentLocale(locale);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <ul className="group cursor-pointer text-md font-medium text-white transition-colors duration-200 ease-in-out">
        <Icon icon="bx:globe" width={24} className="text-white" />
        <li className="absolute left-0 w-20 bg-white text-gray-700 shadow-md rounded-md mt-2 transition-all duration-300 ease-in-out transform max-h-0 opacity-0 scale-y-75 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 group-hover:scale-y-100 z-10">
          <ul className="py-1">
            {availableLanguages.map(lang => (
              <li
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`flex items-center justify-start gap-2 px-4 py-2 cursor-pointer text-sm font-medium ${
                  lang.code === currentLocale
                    ? "bg-gray-200 text-gray-800"
                    : "text-gray-600 hover:bg-gray-100"
                } transition-all duration-200 ease-in-out`}
              >
                <Icon icon={lang.icon} width={24} />
                {lang.label}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
