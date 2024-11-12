import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const data = [
  {
    title: "Questionnaire pour les patients",
    description:
      "Nous serons votre meilleur ami dans ce voyage, nous devons donc nous connaître. Chaque détail est très important pour nous. Nous donnons à nos patients un document appelé Patient Questionare, qui est un ensemble de questions auxquelles vous devez répondre.",
    image: "/assets/images/requis.jpg",
    keywords: ["connaissance", "amitié", "documents"],
  },
  {
    title: "Devis",
    description:
      "Après avoir vérifié et planifié votre processus médical, nous vous proposons des options de plan de traitement dans un délai très court. Nous offrons à nos patients le meilleur devis rapide grâce à une relation opérationnelle solide et professionnelle avec nos partenaires.",
    image: "/assets/images/pricing.jpg",
    keywords: ["devis", "efficacité", "rapidité"],
  },
  {
    title: "Demande de visa et billet d'avion",
    description:
      "Nous nous occupons de toutes vos transactions telles que le suivi des prix, l'annulation/le remboursement, le changement, la suspension/la clôture, la billetterie pour vos réservations de billets d'avion. D'autre part, si une demande de visa est nécessaire à votre arrivée, nous vous assistons dans le processus d'obtention du visa. Tous les documents juridiques et les demandes de visas légaux sont suivis avec soin par les membres de notre équipe.",
    image: "/assets/images/passport.jpeg",
    keywords: ["billet d'avion", "visa", "transactions"],
  },
  {
    title: "Transfert",
    description:
      "Votre sécurité et votre confort sont notre priorité dans chaque étape de votre voyage médical. Nous vous proposons des services avec le leader et les plus grands professionnels du transport. Des voitures de transfert VIP bien équipées, confortables et luxueuses et des chauffeurs professionnels vous attendent pour vous transférer.",
    image: "/assets/images/airport-pickup.jpeg",
    keywords: ["sécurité", "confort", "transfert"],
  },
  {
    title: "Consultant médical",
    description:
      "Notre équipe de consultants médicaux examine vos rapports médicaux et vous propose le meilleur médecin en fonction de vos informations médicales.",
    image: "/assets/images/consultant.jpg",
    keywords: ["consultant", "analyse", "qualité"],
  },
  {
    title: "Soins médicaux à domicile",
    description:
      "Nous offrons également à nos patients des services de soins à domicile pour lesquels les soins hospitaliers ne sont pas disponibles ou dangereux, ainsi que pour les patients qui ont été libérés de l'hôpital, qui sont en convalescence ou qui ont besoin d'un soutien supplémentaire à leur hébergement.",
    image: "/assets/images/home-care.jpeg",
    keywords: ["domicile", "comfort", "soutien"],
  },
  {
    title: "Hébergement",
    description:
      "Nous vous proposons nos hôtels sous contrat dans lesquels vous vous sentirez comme chez vous lors de votre séjour. Confort, luxe, élégance, à proximité de votre hôpital, du centre-ville. Nous effectuons votre réservation en fonction de vos souhaits et également la plus adaptée à votre programme médical.",
    image: "/assets/images/hotel.jpg",
    keywords: ["confort", "proximité", "logement"],
  },
  {
    title: "Assurance maladie",
    description:
      "Nous vous proposons une assurance maladie émise par l'une des plus grandes compagnies d'assurance. Les complications dentaires, la greffe de cheveux, le service orthopédique, la gynécologie, la chirurgie générale et également les complications de la chirurgie cardiaque sont les branches médicales de base de cette assurance.",
    image: "/assets/images/insurance.jpg",
    keywords: ["assurance", "complications", "branches"],
  },
];

const colors = {
  start: "#4F46E5",
  mid: "#06B6D4",
  end: "#3B82F6",
};

const ServiceSection = ({ service, index, progress, isVisible }) => {
  const sectionVariants = {
    hidden: {
      opacity: 0,
      x: service.isReversed ? 30 : -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2,
      },
    },
  };

  const timelineVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2,
      },
    },
  };

  return (
    <div className="relative py-24">
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={timelineVariants}
        className="pr-14 absolute left-1/2 h-full -translate-x-1/2 flex items-center"
      >
        <div className="absolute h-full w-[2px] bg-gray-100 mx-6">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full bg-gradient-to-b from-indigo-500 via-cyan-500 to-blue-500"
            style={{
              backgroundSize: "200% 200%",
              animation: "gradient 5s ease infinite",
            }}
          />
        </div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: progress >= 50 ? 1 : 0,
            opacity: progress >= 50 ? 1 : 0,
          }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="absolute top-1/2 mx-[-28px] -translate-y-1/2 -translate-x-1/2 z-10"
          style={{ left: "50%" }}
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
                background: `linear-gradient(45deg, ${colors.start}, ${colors.end})`,
              }}
            />
            <div
              className="relative w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${colors.start}, ${colors.mid}, ${colors.end})`,
                backgroundSize: "200% 200%",
                animation: "gradient 5s ease infinite",
              }}
            >
              {index + 1}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={sectionVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-36 items-center"
      >
        <motion.div
          className={cn("space-y-6", service.isReversed && "md:order-2")}
        >
          <h3 className="text-3xl  bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-cyan-600 to-blue-600">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {service.keywords.map((keyword) => (
              <span className="relative px-4 py-1.5 rounded-full text-sm font-medium group">
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-cyan-50 to-blue-50 rounded-full transition-opacity duration-500 ease-in-out group-hover:opacity-0" />
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-cyan-500 to-blue-500 rounded-full opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                <span className="absolute inset-0 rounded-full border border-indigo-100 transition-colors duration-500 ease-in-out group-hover:border-transparent" />
                <span className="relative z-10 text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">
                  {keyword}
                </span>
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={cn("relative group", service.isReversed && "md:order-1")}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-cyan-500 to-blue-500 rounded-2xl transform rotate-2 opacity-20 group-hover:opacity-30 transition-opacity" />
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={service.image}
              alt={service.title}
              height={400}
              width={400}
              className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const MedicalTourismPage = () => {
  const [sectionProgress, setSectionProgress] = useState({});
  const containerRef = useRef(null);

  useEffect(() => {
    const calculateProgress = () => {
      const sections = containerRef.current?.children || [];
      const newProgress = {};

      Array.from(sections).forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let progress = 0;
        if (rect.top <= windowHeight * 0.5) {
          progress = Math.min(
            100,
            Math.max(
              0,
              ((windowHeight * 0.5 - rect.top) / (rect.height * 0.5)) * 100
            )
          );
        }

        newProgress[index] = progress;
      });

      setSectionProgress(newProgress);
    };

    window.addEventListener("scroll", calculateProgress);
    calculateProgress();

    return () => window.removeEventListener("scroll", calculateProgress);
  }, []);

  return (
    <div className="overflow-hidden bg-white">
      <div className="container mx-auto max-w-6xl px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center my-16"
        >
          <SectionTitle
            title="Votre parcours vers une meilleure santé"
            subtitle="Nous vous accompagnons dans toutes vos démarches"
            theme="gradient"
          />
        </motion.div>

        {data.map((service, index) => (
          <ServiceSection
            key={index}
            service={{ ...service, isReversed: index % 2 !== 0 }}
            index={index}
            progress={sectionProgress[index] || 0}
            isVisible={sectionProgress[index] > 0}
          />
        ))}
      </div>
      <WhyChooseUs />
    </div>
  );
};

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Expertise médicale internationale",
      description:
        "Une équipe de spécialistes reconnus mondialement, formés dans les plus grandes institutions médicales du monde.",
      icon: "🌍",
    },
    {
      title: "Accompagnement personnalisé",
      description:
        "Un accompagnement complet avant, pendant et après votre séjour, incluant une assistance linguistique et logistique.",
      icon: "👥",
    },
    {
      title: "Infrastructures de pointe",
      description:
        "Des installations médicales à la pointe de la technologie, certifiées aux normes internationales.",
      icon: "🏥",
    },
    {
      title: "Rapport qualité/prix optimal",
      description:
        "Des soins médicaux haut de gamme à des tarifs compétitifs, avec une transparence totale des coûts.",
      icon: "💎",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionTitle
            title="Pourquoi nous choisir ?"
            subtitle="Votre santé mérite l’excellence. Découvrez comment nous combinons l’expertise médicale internationale avec des soins personnalisés pour votre bien-être."
            theme="gradient"
          />
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-4"></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalTourismPage;
