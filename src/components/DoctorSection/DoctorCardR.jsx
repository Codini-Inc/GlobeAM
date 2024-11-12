"use client";
import { Button } from "@nextui-org/react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DoctorCard = ({ imgsrc, title, paragraph, drName }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col md:flex-row items-center justify-start h-screen bg-white p-8 md:p-24"
    >
      <div className="relative w-full md:w-1/2 flex justify-center">
        <img src={imgsrc} alt={drName} className="rounded-2xl object-cover" />

        <motion.div
          initial={{ right: "-200vh" }}
          animate={isInView ? { right: "-80vh" } : { right: "-200vh" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute transform translate-y-2/4 w-full md:w-full p-4 md:p-10 border-2 border-primaryBlack rounded-3xl bg-white"
        >
          <h2 className="text-4xl text-primaryBlack font-bold">{drName}</h2>
          <p className="text-xl font-semibold text-gray-500 mt-2">{title}</p>
          <p className="mt-4 text-gray-600">{paragraph}</p>
          <Button className="mt-8 px-6 py-3 mx-auto bg-primaryColor text-white rounded-md hover:bg-gray-800 transition">
            Get to Know {drName}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default DoctorCard;
