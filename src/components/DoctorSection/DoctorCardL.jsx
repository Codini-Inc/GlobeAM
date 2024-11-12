"use client";
import { Button } from "@nextui-org/react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function DoctorCardL({ imgsrc, title, paragraph, drName }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div className="flex justify-between items-center w-full h-auto bg-white p-8 md:p-24">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, x: "-50%" }}
        animate={
          isInView ? { opacity: 1, x: "20%" } : { opacity: 0, x: "-50%" }
        }
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="relative w-1/2 p-8 border-2 border-primaryBlack text-primaryBlack bg-white rounded-3xl shadow-lg z-10"
      >
        <h1 className="text-4xl font-bold mb-4">{drName}</h1>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{paragraph}</p>
        <Button className="bg-primaryBlack text-white py-2 px-4 rounded">
          Get to Know {drName}
        </Button>
      </motion.div>
      <div className="relative w-1/2 h-full">
        <img
          src={imgsrc}
          alt={drName}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
