import { Inter, Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import ResponsiveAppBar from "@/components/Navbar/Navbar";
import TranslationsProvider from "@/components/TranslationsProvider";
import { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const i18nNamespaces = ["default"];
// Font configurations
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "GlobalCare+",
  description: "Your Premier Medical Tourism Partner",
};

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="bg-white">
        <TranslationsProvider namespaces={i18nNamespaces} locale={locale}>
          <ResponsiveAppBar />
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
              },
            }}
          />
          {children}
          <Footer />
        </TranslationsProvider>
      </body>
    </html>
  );
}
