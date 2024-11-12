import React from "react";
import { Input, Button } from "@nextui-org/react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="mb-6">
              <img
                src="/assets/images/logo.svg"
                alt="Company Logo"
                className="h-24"
              />
            </div>
            <p className="text-gray-400">
              Votre partenaire de confiance pour des soins médicaux de qualité
              internationale. Une expertise médicale au service de votre
              bien-être.
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Icon icon="mdi:facebook" width="20" height="20" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Icon icon="mdi:instagram" width="20" height="20" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Icon icon="mdi:linkedin" width="20" height="20" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Icon icon="mdi:twitter" width="20" height="20" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Chirurgie plastique
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Médecine esthétique
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Greffe de cheveux
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Chirurgie bariatrique
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Chirurgie dentaire
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Icon
                  icon="mdi:map-marker"
                  className="text-blue-500"
                  width="18"
                  height="18"
                />
                <span>123 Boulevard Example, Paris</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon
                  icon="mdi:phone"
                  className="text-blue-500"
                  width="18"
                  height="18"
                />
                <Link
                  href="tel:+33123456789"
                  className="hover:text-blue-500 transition-colors"
                >
                  +33 1 23 45 67 89
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Icon
                  icon="mdi:email"
                  className="text-blue-500"
                  width="18"
                  height="18"
                />
                <Link
                  href="mailto:contact@example.com"
                  className="hover:text-blue-500 transition-colors"
                >
                  contact@example.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Recevez nos actualités et offres spéciales.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Votre email"
                variant="bordered"
                classNames={{
                  input: "text-white",
                  inputWrapper:
                    "bg-gray-800 border-gray-700 hover:border-blue-500",
                }}
              />
              <Button color="primary" className="w-full">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} GlobalCare+. Crée par{" "}
              <Link
                href="www.codini.tn"
                target="_blank"
                className="text-gray-400 font-semibold hover:text-blue-500 transition-colors"
              >
                Codini
              </Link>
            </div>
            <div className="flex gap-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
