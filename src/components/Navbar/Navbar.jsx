"use client";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../LanguageChanger";
import { specialities } from "@/app/data/specialities";

const ResponsiveAppBar = () => {
  const [language, setLanguage] = useState("Français");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);
  const [bgColor, setBgColor] = useState("bg-transparent");

  const handleMobileExpand = (item) => {
    setExpandedMobileItem(expandedMobileItem === item ? null : item);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const updateBgColor = () => {
    const currentPath = window.location.pathname;
    if (
      currentPath !== "/" &&
      currentPath !== "/fr" &&
      currentPath !== "/en" &&
      currentPath !== "/ar"
    ) {
      setBgColor("bg-white");
    } else {
      setBgColor("bg-transparent");
    }
  };

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang === "en") {
      setLanguage("English");
    } else {
      setLanguage("Français");
    }
    updateBgColor();

    window.addEventListener("popstate", updateBgColor);

    return () => {
      window.removeEventListener("popstate", updateBgColor);
    };
  }, []);

  return (
    <nav
      className={`w-full ${bgColor} font-Montserrat-Regular transition duration-300 ease-in-out z-50 absolute top-0 left-0`}
    >
      <div className="container sm:mx-16 p-8 sm:p-2 flex justify-between items-center py-4">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Clinique MutuelleVille Logo"
            width={150}
            height={50}
            className="transition duration-300 ease-in-out"
          />
        </Link>
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center text-primaryBlack"
        >
          <Icon icon="mdi:menu" width={30} className="text-primaryBlack" />
        </button>
        <ul className="hidden md:flex space-x-8 text-white items-center">
          {["NOS SPÉCIALITÉS", "À PROPOS", "SERVICES"].map((item, index) => (
            <li className="relative group" key={index}>
              {item === "NOS SPÉCIALITÉS" ? (
                <div className="relative">
                  <button className="flex justify-between items-center w-full transition duration-300 ease-in-out ">
                    <span>{item}</span>
                    <Icon
                      className="transition-transform duration-300 ease-in-out group-hover:rotate-180"
                      icon="mingcute:down-line"
                      width={15}
                    />
                  </button>
                  <ul className="absolute left-0 w-full bg-white text-gray-700 shadow-md rounded-md mt-2 transition-all duration-300 ease-in-out transform max-h-0 opacity-0 scale-y-75 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 group-hover:scale-y-100">
                    {specialities.map(({ link, title }) => (
                      <Link href={link} key={title}>
                        <li className="px-4 py-2 hover:bg-gray-200">{title}</li>
                      </Link>
                    ))}
                  </ul>
                  <div className="absolute left-0 right-0 h-1 bg-primaryBlack scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 mt-1"></div>
                </div>
              ) : item === "À PROPOS" ? (
                <div className="relative">
                  <button className="flex justify-between items-center w-28 transition duration-300 ease-in-out ">
                    <span>{item}</span>
                    <Icon
                      className="transition-transform duration-300 ease-in-out group-hover:rotate-180"
                      icon="mingcute:down-line"
                      width={15}
                    />
                  </button>
                  <ul className="absolute left-0 w-28 bg-white text-gray-700 shadow-md rounded-md mt-2 transition-all duration-300 ease-in-out transform max-h-0 opacity-0 scale-y-75 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 group-hover:scale-y-100">
                    <Link href="/OurTeam">
                      <li className="px-4 py-2 hover:bg-gray-200">Our Team</li>
                    </Link>
                  </ul>
                  <div className="absolute left-0 right-0 h-1 bg-primaryBlack scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 mt-1"></div>
                </div>
              ) : (
                <Link href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}>
                  <button className="transition duration-300 ease-in-out relative">
                    {item}
                    <div className="absolute left-0 right-0 h-1 bg-primaryBlack scale-x-0 transition-transform duration-300 ease-in-out hover:scale-x-100 mt-1"></div>
                  </button>
                </Link>
              )}
              <div className="absolute left-0 right-0 h-1 bg-primaryBlack scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 mt-1"></div>
            </li>
          ))}
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
        <div
          className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } w-full md:hidden`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleMobileMenu} className="text-gray-700">
              <Icon icon="mdi:close" width={30} className="text-gray-700" />
            </button>
          </div>
          <div className="flex items-center justify-start p-4">
            <Image
              src="/assets/images/logo.svg"
              alt="Clinique MutuelleVille Logo"
              width={100}
              height={10}
              className="h-16 w-auto transition duration-300 ease-in-out"
            />
            {/* <img
                src="/assets/images/logo.svg"
                alt="Company Logo"
                className="h-24"
              /> */}
            <span className="ml-4 text-xl text-primaryBlack ">
              Global Care +
            </span>
          </div>

          <ul className="flex flex-col p-8 space-y-4">
            {[
              { title: "NOS SPÉCIALITÉS", subItems: [] },
              {
                title: "À PROPOS",
                subItems: [
                  { name: "1", link: "/" },
                  { name: "2", link: "/" },
                ],
              },
              {
                title: "SERVICES",
                subItems: [
                  {
                    name: "Nos Specialites Chirurgicales",
                    link: "/",
                  },
                  { name: "2", link: "/" },
                ],
              },
            ].map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleMobileExpand(item.title)}
                  className="text-gray-700 w-full text-lg text-center flex items-center justify-between"
                >
                  <span>{item.title}</span>
                  {item.subItems.length > 0 && (
                    <Icon
                      className={`transition-transform duration-300 ease-in-out ${
                        expandedMobileItem === item.title ? "rotate-180" : ""
                      }`}
                      icon="mingcute:down-line"
                      width={22}
                    />
                  )}
                </button>
                <ul
                  className={`sub-menu ${
                    expandedMobileItem === item.title ? "expanded" : ""
                  } pl-4 mt-2 space-y-2`}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="text-gray-700 text-md">
                      <Link href={subItem.link}>{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveAppBar;
