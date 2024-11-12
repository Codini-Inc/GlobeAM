import { useState, useEffect, useRef } from "react";
import { Star, StarHalf, Quote } from "lucide-react";
import SectionTitle from "./SectionTitle";

const reviews = [
  {
    id: 1,
    name: "Sophie Laurent",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    country: "France",
    procedure: "Chirurgie esthétique",
    rating: 5,
    date: "Février 2024",
    text: "Une expérience exceptionnelle du début à la fin. L'équipe médicale était remarquable, et les résultats dépassent mes attentes. Le suivi post-opératoire était impeccable, et l'accompagnement pour mon séjour a été parfait. Je recommande vivement!",
    verified: true,
  },
  {
    id: 2,
    name: "Mohammed Al-Hassan",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    country: "Émirats Arabes Unis",
    procedure: "Greffe de cheveux",
    rating: 5,
    date: "Janvier 2024",
    text: "Service de première classe et résultats extraordinaires. La clinique est ultramoderne, et le personnel parle parfaitement l'arabe et l'anglais. Le rapport qualité-prix est imbattable. Ma nouvelle ligne de cheveux est exactement ce que je souhaitais.",
    verified: true,
  },
  {
    id: 3,
    name: "Elena Petrova",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    country: "Russie",
    procedure: "Médecine dentaire",
    rating: 4.5,
    date: "Mars 2024",
    text: "De la première consultation en ligne jusqu'au suivi post-traitement, tout était parfaitement organisé. L'équipe a pris en charge tous les aspects de mon séjour. Le résultat est magnifique, et les économies réalisées sont considérables.",
    verified: true,
  },
  {
    id: 4,
    name: "John Williams",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    country: "Royaume-Uni",
    procedure: "Chirurgie bariatrique",
    rating: 5,
    date: "Décembre 2023",
    text: "Une transformation de vie complète! L'expertise médicale est au plus haut niveau, avec un accompagnement personnalisé exceptionnel. Le suivi nutritionnel post-opératoire est très professionnel. Je me sens comme une nouvelle personne.",
    verified: true,
  },
  {
    id: 5,
    name: "Maria Garcia",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    country: "Espagne",
    procedure: "Médecine esthétique",
    rating: 5,
    date: "Janvier 2024",
    text: "Des résultats naturels et exactement ce que je cherchais. L'équipe médicale est très professionnelle et attentionnée. Les installations sont modernes et impeccables. Une expérience 5 étoiles du début à la fin!",
    verified: true,
  },
  {
    id: 6,
    name: "Chadi Ayari",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    country: "Tunisie",
    procedure: "Greffe de cheveux",
    rating: 5,
    date: "Juin 2024",
    text: "Service de première classe et résultats extraordinaires. La clinique est ultramoderne, et le personnel parle parfaitement l'arabe et l'anglais. Le rapport qualité-prix est imbattable. Ma nouvelle ligne de cheveux est exactement ce que je souhaitais.",
    verified: true,
  },
];

const ReviewCard = ({ review, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="w-5 h-5 fill-yellow-400 text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half-star"
          className="w-5 h-5 fill-yellow-400 text-yellow-400"
        />
      );
    }

    return stars;
  };

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            {review.verified && (
              <div className="absolute -right-1 -bottom-1 bg-blue-500 text-white p-1 rounded-full">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              {review.name}
            </h3>
            <p className="text-gray-600 text-sm">{review.country}</p>
            <div className="flex items-center gap-1 mt-1">
              {renderStars(review.rating)}
            </div>
          </div>
        </div>

        <div className="relative">
          <Quote className="absolute text-blue-100 w-10 h-10 -left-2 -top-2" />
          <p className="text-gray-600 relative z-10 pl-4">{review.text}</p>
        </div>

        <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-blue-600 font-medium">{review.procedure}</span>
          <span className="text-gray-500 text-sm">{review.date}</span>
        </div>
      </div>
    </div>
  );
};

const GoogleReviews = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <SectionTitle
              title="Avis Google"
              subtitle="Découvrez les expériences de nos patients du monde entier et leur
            satisfaction après leur parcours médical avec nous."
              theme="gradient"
            />
          </div>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-6 h-6 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            Voir tous nos avis sur Google
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
