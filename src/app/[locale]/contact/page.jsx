"use client";
import { Button, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { createContact } from "@/lib/data-service";
import { schema } from "@/lib/schemas/contactSchema";

export default function ContactPage() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    return handleSubmit(async formData => {
      createContact(formData);
      reset();
    });
  };

  return (
    <div className="flex flex-col items-center bg-white">
      <div className="w-full h-[500px] relative">
        <Image
          src="https://theplasticsclinic.com/wp-content/uploads/2024/10/DSC00329.jpg"
          alt="Contact Image"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center p-8">
          <div className="px-20">
            <h2 className="text-lg font-poppinsLight text-white">
              Get in touch with us
            </h2>
            <h1 className="text-4xl lg:text-6xl font-poppinsSemiBold text-white mt-4">
              Contact
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between py-10 px-5 lg:px-20 space-y-10 lg:space-y-0">
        <div className="w-full lg:w-1/2 space-y-6">
          <form onSubmit={onSubmit()} className="space-y-4">
            <Tooltip
              content={
                errors.fullName?.message || "Enter your full name"
              }
              className="text-black"
            >
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className={`w-full border-b-2 text-black border-gray-300 p-2 focus:outline-none ${
                    errors.fullName ? "border-red-500" : ""
                  }`}
                  {...register("fullName")}
                />
              </div>
            </Tooltip>

            <Tooltip
              content={errors.email?.message || "Enter your email"}
              className="text-black"
            >
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className={`w-full border-b-2 text-black border-gray-300 p-2 focus:outline-none ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  {...register("email")}
                />
              </div>
            </Tooltip>

            <Tooltip
              className="text-black"
              content={
                errors.phone?.message || "Enter your phone number"
              }
            >
              <div>
                <input
                  type="text"
                  placeholder="Phone"
                  className={`w-full border-b-2 text-black border-gray-300 p-2 focus:outline-none ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  {...register("phone")}
                />
              </div>
            </Tooltip>

            <Tooltip
              className="text-black"
              content={
                errors.message?.message || "Enter your message"
              }
            >
              <div>
                <textarea
                  placeholder="Message"
                  className={`w-full border-b-2 text-black border-gray-300 p-2 focus:outline-none h-24 resize-none ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  {...register("message")}
                ></textarea>
              </div>
            </Tooltip>
            <Button
              type="submit"
              className="bg-lightbackground text-black px-10 text-md py-3 rounded font-poppinsLight hover:bg-gray-300"
            >
              SUBMIT
            </Button>
          </form>
        </div>

        <div className="w-full lg:w-1/2 space-y-6 lg:pl-10">
          <div className="font-poppinsLight text-black">
            <h3 className="text-2xl font-semibold mb-4">Phone</h3>
            <p className="text-lg">801-839-5557</p>
          </div>
          <div className="font-poppinsLight text-black ">
            <h3 className="text-2xl font-semibold mb-4">Address</h3>
            <p className="text-lg">
              14658 S Bangerter Pkwy #200, Draper, UT 84020
            </p>
          </div>

          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.18570778468!2d10.166458199300832!3d36.83802822137255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd33601788bfd3%3A0xe3bdaad1ce82eed!2z2YXYtdit2Kkg2KfZhdin2YY!5e0!3m2!1sen!2stn!4v1727802432740!5m2!1sen!2stn"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
