import React from "react";
import { Button } from "@nextui-org/react";
import servicesData from "@/servicesData";
import Link from "next/link";

export default function Services({ params }) {
  const { service } = params;

  const selectedService = servicesData[service];

  if (!selectedService) {
    return <p>Service not found.</p>;
  }

  return (
    <>
      <div className="relative overflow-hidden h-screen">
        <div
          className="bg-cover h-full transform scale-125 origin-top-left"
          style={{
            backgroundImage: `url('https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_486436419-scaled.jpeg')`,
          }}
        ></div>
        <div className="absolute top-44 px-20 justify-center sm:w-1/2 md:w-1/2 lg:w-1/2 text-primaryBlack">
          <h1 className="text-xl font-poppinsLight">
            Redéfinissez votre élégance avec
          </h1>
          <h2 className="text-6xl mt-8 font-poppinsSemiBold">
            {selectedService.title}
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
      <div className="bg-lightbackground h-28 flex flex-col justify-center">
        <p className="text-center text-5xl text-black font-poppinsLight">
          TRAITEMENTS
        </p>
      </div>
      <div className="grid gap-4 grid-cols-1 bg-white sm:grid-cols-3 lg:grid-cols-3 sm:p-20 p-8">
        {selectedService.subservices.map((subservice, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden h-[65vh] flex flex-col"
          >
            <div className="relative h-full w-full">
              <img
                className="h-full w-full object-cover"
                src={subservice.imageSrc}
                alt={subservice.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            <div
              className={`flex flex-col justify-between absolute bottom-0 left-0 right-0 p-4 z-10 transition-opacity duration-500`}
            >
              <h3 className="text-2xl font-poppinsRegular text-primaryBlack">
                {subservice.title}
              </h3>
              <p className="mt-2 text-primaryBlack text-sm font-thin">
                {subservice.description}
              </p>
              <div className="flex gap-20 mx-auto">
                <Button className="mt-4 bg-primaryBlack text-white  py-2 text-md rounded-sm  w-full">
                  Book Now
                </Button>
                <Link href={subservice.link || "#"} className="w-full ">
                  <Button className="mt-4 bg-transparent border-2 border-primaryBlack text-primaryBlack  text-md py-2 rounded-sm ">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
