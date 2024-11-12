"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OurTeam() {
  const reviews = [
    {
      name: "Savannah Zobrist",
      date: "2024-07-01",
      review:
        "Shannon was absolutely amazing! Not only friendly and made me feel so comfortable but is extremely knowledgeable! 10/10 recommend going to her!",
      rating: 5,
      imageUrl: "/assets/images/RegenC_Logo.png",
    },
    {
      name: "Savannah Zobrist",
      date: "2024-07-01",
      review:
        "Shannon was absolutely amazing! Not only friendly and made me feel so comfortable but is extremely knowledgeable! 10/10 recommend going to her!",
      rating: 5,
      imageUrl: "/assets/images/RegenC_Logo.png",
    },
    {
      name: "Savannah Zobrist",
      date: "2024-07-01",
      review:
        "Shannon was absolutely amazing! Not only friendly and made me feel so comfortable but is extremely knowledgeable! 10/10 recommend going to her!",
      rating: 5,
      imageUrl: "/assets/images/RegenC_Logo.png",
    },
    {
      name: "John Doe",
      date: "2024-06-15",
      review:
        "The service was exceptional and the staff were incredibly professional.",
      rating: 4,
      imageUrl: "/assets/images/RegenC_Logo.png",
    },
  ];
  const teamMembers = [
    {
      name: "Mindee Chidester",
      description:
        "Our talented and compassionate chief of all things, Mindee, has been in the beauty and aesthetics industries for more than 21 years...",
      imageSrc:
        "https://theplasticsclinic.com/wp-content/uploads/2024/09/953996.jpg",
    },
    {
      name: "Jeiseang Lieu",
      description:
        "A graduate of the University of Utah with a bachelor’s in strategic communications, Jeiseang is our office manager...",
      imageSrc:
        "https://theplasticsclinic.com/wp-content/uploads/2024/09/953996.jpg",
    },
    {
      name: "Emma Bradshaw",
      description:
        "Emma was born and raised in Idaho Falls and moved to Utah to pursue a career as a Master Aesthetician...",
      imageSrc:
        "https://theplasticsclinic.com/wp-content/uploads/2024/09/953996.jpg",
    },
    {
      name: "Shannon Ford",
      description:
        "Shannon graduated from the Weber State University School of Nursing in 2011. For six years, she worked in the ICU before...",
      imageSrc:
        "https://theplasticsclinic.com/wp-content/uploads/2024/09/953996.jpg",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} custom-arrow slick-next`} onClick={onClick}>
        <Icon icon="icon-park-outline:right" className="custom-arrow-icon" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} custom-arrow slick-prev`} onClick={onClick}>
        <Icon icon="icon-park-outline:left" className="custom-arrow-icon " />
      </div>
    );
  }
  return (
    <div className="bg-white">
      <div className="w-full h-[500px] relative">
        <Image
          src="https://theplasticsclinic.com/wp-content/uploads/2024/09/DSC068631.jpg"
          alt="Contact Image"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center p-8">
          <div className="px-20">
            <h2 className="text-lg font-poppinsLight text-white">
              Redefine Your Elegance With
            </h2>
            <h1 className="text-4xl lg:text-6xl font-poppinsSemiBold text-white mt-4">
              Our Team
            </h1>
          </div>
        </div>
      </div>
      <p className="max-w-6xl font-poppinsRegular text-sm text-primaryBlack text-center mx-auto py-20">
        The Plastics Clinic is proud to have a highly trained team of
        professionals who share a passion for producing radiant results for our
        patients in South Jordan, UT. Our nurses and aestheticians are experts
        in handling advanced technologies, such as the Alma Soprano® ICE,
        Hybrid™, Sculptra®, and HydraFacial®. Our specialists work with you to
        learn more about your concerns and goals to design a treatment plan that
        can help you feel good to be in your own skin. Each member of our team
        enjoys forming warm relationships with patients in their care.
      </p>
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start space-y-4 space-x-4 "
            >
              <div className="relative">
                <Image
                  className="rounded-lg object-cover"
                  src={member.imageSrc}
                  alt={member.name}
                  width={700}
                  height={192}
                  layout="fixed"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="mt-2 text-gray-600 max-w-3xl">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-7xl mt-10 mx-auto bg-white rounded-lg   p-4 relative overflow-visible">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="">
              <div className="flex flex-col items-center p-6 text-center">
                <img
                  src={review.imageUrl}
                  alt={review.name}
                  className="w-16 h-16 rounded-full border-2 border-gray-200 "
                />
                <h2 className="text-xl text-primaryBlack font-semibold">
                  {review.name}
                </h2>
                <p className="text-gray-500 text-sm">{review.date}</p>
                <div className="flex justify-center my-2">
                  {Array(review.rating)
                    .fill()
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="w-5 h-5 text-yellow-500"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975 4.176.036c.969.008 1.371 1.24.588 1.81l-3.37 2.453 1.27 3.98c.284.894-.755 1.635-1.541 1.137L10 13.348l-3.36 2.07c-.785.498-1.825-.242-1.541-1.137l1.27-3.98-3.37-2.453c-.783-.57-.38-1.802.588-1.81l4.176-.036 1.286-3.975z" />
                      </svg>
                    ))}
                </div>
                <p className="text-gray-700 p-2 text-md">{review.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
