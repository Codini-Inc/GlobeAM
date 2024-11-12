import React, { useState } from "react";
import Slider from "react-slick";
import { Button } from "@nextui-org/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const data = [
  {
    title: "Chirurgie plastique",
    description:
      "Interventions chirurgicales visant à modifier l'apparence ou la fonction du corps pour une confiance retrouvée.",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
  },
  {
    title: "Médecine esthétique",
    description:
      "Traitements non chirurgicaux innovants pour révéler votre beauté naturelle.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
  },
  {
    title: "Greffe de cheveux",
    description:
      "Techniques de pointe pour une restauration capillaire naturelle et durable.",
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
  },
  {
    title: "Chirurgie bariatriaque",
    description:
      "Solutions chirurgicales avancées pour une transformation de vie complète.",
    image:
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
  },
  {
    title: "Médecine et chirurgie dentaire",
    description:
      "Excellence en soins dentaires pour un sourire éclatant et une santé optimale.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
  },
  {
    title: "Chirurgie orthopédique",
    description:
      "Expertise de pointe pour restaurer votre mobilité et votre qualité de vie.",
    image:
      "https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
  },
  {
    title: "Chirurgie urologique",
    description:
      "Soins spécialisés et technologies modernes pour votre santé urologique.",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
  },
  {
    title: "Chirurgie vasculaire",
    description:
      "Traitement expert des maladies vasculaires pour votre bien-être circulatoire.",
    image:
      "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1",
  },
];

const NextArrow = ({ onClick }) => (
  <button
    className="z-10 absolute top-1/2 right-0 transform -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.3"
      stroke="currentColor"
      className="w-6 h-6 text-blue-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>{" "}
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    isIconOnly
    variant="flat"
    className="z-10 hover:bg-white-50 absolute top-1/2 left-0 transform -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.3"
      stroke="currentColor"
      className="w-6 h-6 text-blue-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  </button>
);

const MedicalCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false, // We'll use custom dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="">
      <div className=" bg-white mx-auto px-4 md:px-12 pb-16 w-screen">
        <SectionTitle
          title="Nos Services"
          subtitle="Une équipe médicale hautement qualifiée à votre service"
          theme="gradient"
        />
        <style jsx global>{`
          .slick-slide {
            padding: 0 10px;
            transition: all 0.3s ease;
          }

          .slick-center {
            transform: scale(1);
            z-index: 1000;
          }

          .slick-slide:not(.slick-center) {
            opacity: 0.7;
            transform: scale(0.85);
          }

          .slick-slide.slick-active:hover:not(.slick-center) {
            opacity: 0.9;
            cursor: pointer;
            transform: scale(0.95);
          }
        `}</style>
        <Slider {...settings} ref={sliderRef} className="mx-auto pb-12">
          {data.map((item, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-300 to-white-50">
                  <h3 className="text-xl font-semibold mb-3 text-black">
                    {item.title}
                  </h3>
                  <p className="text-white-50 leading-relaxed text-gray-500 line-clamp-3 md:line-clamp-none">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Custom dots */}
        <div className=" flex justify-center space-x-1.5 md:space-x-2 z-20">
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => sliderRef.current.slickGoTo(idx)}
              className={`rounded-full transition-all duration-300
              ${
                idx === currentSlide
                  ? "bg-blue-500 w-4 md:w-6 h-1.5 md:h-2"
                  : "bg-gray-300 hover:bg-gray-400 w-1.5 md:w-2 h-1.5 md:h-2"
              }
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalCarousel;
