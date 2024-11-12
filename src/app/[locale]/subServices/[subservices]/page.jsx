import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import subservicesData from "@/subservicesData";
import CustomAccordion from "@/components/Accordion";

export default function SubService({ params }) {
  const { subservices } = params;
  const selectedSubservice = subservicesData[subservices];

  if (!selectedSubservice) {
    return <p>Subservice not found.</p>;
  }

  return (
    <>
      <div className="relative overflow-hidden">
        <div
          className="bg-cover h-screen"
          style={{
            backgroundImage: `url(${selectedSubservice.heroImage})`,
          }}
        ></div>
        <div className="absolute top-44 px-20 justify-center sm:w-1/2 md:w-1/2 lg:w-1/2 text-primaryBlack">
          <h2 className="text-6xl mt-8 text-white/80 font-poppinsSemiBold">
            {selectedSubservice.title}
          </h2>
        </div>
        <div className="absolute bottom-4 left-24 pb-16 flex space-x-4">
          <Button className="bg-primaryBlack text-white py-4 px-10 rounded-sm font-poppinsRegular">
            Read More
          </Button>
          <Button className="bg-transparent border-1 text-primaryBlack border-primaryBlack font-poppinsRegular rounded-sm py-4 px-16">
            Book your consultation
          </Button>
        </div>
      </div>
      <div className="bg-white text-primaryBlack p-24 text-left">
        <h1 className="text-5xl font-poppinsLight mb-6 underline decoration-lightbackground decoration-1 underline-offset-4">
          {selectedSubservice.descriptionTitle}
        </h1>
        <p className="text-sm font-poppinsRegular">
          {selectedSubservice.description}
        </p>
      </div>

      <div className="relative">
        <div
          className="bg-cover h-[60vh]"
          style={{
            backgroundImage: `url(${selectedSubservice.secondaryImage})`,
          }}
        ></div>
        <div className="absolute top-10 left-15 px-20 text-white/80">
          <h2 className="text-5xl mt-8 mb-8 font-poppinsLight underline decoration-white/80 decoration-1 underline-offset-8">
            {selectedSubservice.secondaryTitle}
          </h2>
          <p className="text-md text-left w-1/2">
            {selectedSubservice.secondaryDescription}
          </p>
        </div>
      </div>
      <section className="flex flex-col bg-white md:flex-row items-center justify-center space-x-12 py-10">
        <div className="flex-2">
          <Image
            src={selectedSubservice.additionalImage}
            alt={selectedSubservice.imageAlt}
            width={600}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 text-primaryBlack max-w-5xl font-poppinsLight mt-6 md:mt-0 p-8">
          <h1 className="text-3xl md:text-5xl underline decoration-lightbackground underline-offset-8 decoration-1">
            {selectedSubservice.additionalTitle}
          </h1>
          <p className="mt-4">{selectedSubservice.additionalDescription}</p>
        </div>
      </section>
      <div className="bg-primaryBlack">
        <CustomAccordion faqs={selectedSubservice.faqs} />
      </div>
      <div className="flex justify-between items-center w-full h-auto bg-white p-8 md:p-24">
        <div className="relative w-1/2 p-8 border-2 border-primaryBlack text-primaryBlack bg-white rounded-2xl shadow-lg z-10 left-16">
          <h1 className="text-xl font-poppinsLight mb-4">HAVE MORE</h1>
          <h2 className="text-4xl font-poppinsSemiBold mb-12">QUESTIONS</h2>
          <p className="text-gray-600 mb-7">
            We know that choosing us can come with many questions. Whether
            you’re curious about the process or have specific concerns, our
            dedicated team is ready to provide all the answers you need to make
            an informed decision.
          </p>
          <div className="flex mx-auto gap-12">
            <Button className="bg-primaryBlack text-white py-4 px-10 rounded-sm font-poppinsRegular">
              Read More
            </Button>
            <Button className="bg-transparent border-1 text-primaryBlack border-primaryBlack font-poppinsRegular rounded-sm py-4 px-16">
              Book your consultation
            </Button>
          </div>
        </div>
        <div className="relative w-1/2 h-full">
          <img
            src={selectedSubservice.contactImage}
            className="w-full h-full object-cover rounded-2xl"
            alt="Contact"
          />
        </div>
      </div>
    </>
  );
}
