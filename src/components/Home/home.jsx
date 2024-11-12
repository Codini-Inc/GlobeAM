import { NextUIProvider } from "@nextui-org/react";
import HeroSection from "@/components/HeroSection/HeroSection";
import MedicalCarousel from "../Carousel";
import MedicalTourismPage from "../Services";
import GoogleReviews from "../Reviews";
import InvoiceRequestForm from "../Contact";

export default function Home() {
  return (
    <NextUIProvider>
      <HeroSection />
      <MedicalCarousel />
      <MedicalTourismPage />
      <GoogleReviews />
      <InvoiceRequestForm />
    </NextUIProvider>
  );
}
