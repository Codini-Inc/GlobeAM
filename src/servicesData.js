import { link } from "@nextui-org/react";

const servicesData = {
    "chirurgie-de-la-silhouette": {
      title: "Chirurgie de la silhouette",
      description: "These treatments bring more volume to hollowed skin, diminish fine lines and wrinkles, and create a more radiant and youthful appearance.",
      subservices: [
        {
          title: "Lipoaspiration ",
      imageSrc: "/assets/images/surgeon-making-injection-into-female-body-liposuction-concept.jpg",
      link: "/subServices/Lipoaspiration",

          description: "A surgical procedure that removes fat from specific areas of the body.",
        },
        {
            title: "Liposculpture HD avec Bodytite",
        imageSrc: "/assets/images/mommy-make-over-1.jpg",
        link: "/subServices/LipoaspirationHD",
  
            description: "A surgical procedure that removes fat from specific areas of the body.",
          },
        {
          title: "Lipofilling des fesses BBL",
      imageSrc: "/assets/images/lipofilling-fesses-tunisie.webp",
      link: "/subServices/LipofillingBBL",

          description: "A cosmetic surgery that removes excess skin and fat from the abdomen.",
        },
        {
            title: "Prothèses de fesses",
        imageSrc: "/assets/images/ProthèsesDeFesses.jpg",
        link: "/subServices/Prothesesfesses",

            description: "A cosmetic surgery that removes excess skin and fat from the abdomen.",
          },
          {
            title: "Abdominoplastie",
        imageSrc: "/assets/images/Abdominoplastie.jpg",
        link: "/subServices/Abdominoplastie",
            description: "A cosmetic surgery that removes excess skin and fat from the abdomen.",
          },
          {
            title: "Mini abdominoplastie ",
        imageSrc: "/assets/images/surgeon-making-injection-into-female-body-liposuction-concept.jpg",
  
            description: "A cosmetic surgery that removes excess skin and fat from the abdomen.",
          },
          {
            title: "Bodylift",
        imageSrc: "/assets/images/surgeon-making-injection-into-female-body-liposuction-concept.jpg",
  
            description: "A cosmetic surgery that removes excess skin and fat from the abdomen.",
          },
          {
            title: "Brachioplastie",
        imageSrc: "/assets/images/surgeon-making-injection-into-female-body-liposuction-concept.jpg",
  
            description: "A cosmetic surgery that removes excess skin and fat from the abdomen.",
          },
      ],
    },
    "chirurgie-esthetique-du-sein": {
      title: "Chirurgie esthétique du sein",
      description: "From microneedling and PRP to facials and chemical peels, our skin treatments feature the latest technology to create smoother, healthier skin.",
      subservices: [
        {
          title: "Augmentation mammaire par prothèses",
          description: "A surgical procedure to increase the size of breasts.",
          imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_32126986-scaled.jpeg",
        },
        {
          title: "Lipofilling du sein",
          description: "A procedure to remove excess breast tissue and skin.",
          imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_32126986-scaled.jpeg",
        },
        {
            title: "Lifting des seins avec prothèses",
            description: "A procedure to remove excess breast tissue and skin.",
            imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_32126986-scaled.jpeg",
          },
          {
            title: "Lifting des seins sans prothèse",
            description: "A procedure to remove excess breast tissue and skin.",
            imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_32126986-scaled.jpeg",
          },
          {
            title: "Breast tite lifting des seins sans cicatrice",
            description: "A procedure to remove excess breast tissue and skin.",
            imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_32126986-scaled.jpeg",
          },
          {
            title: "Réduction mammaire",
            description: "A procedure to remove excess breast tissue and skin.",
            imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_32126986-scaled.jpeg",
          },
      ],
    },
    "chirurgie-du-visage": {
      title: "Chirurgie du visage",
      description: "We utilize the most advanced technologies to perform nonsurgical laser treatments.",
      imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_520918698.webp",
      subservices: [
        {
          title: "Chirurgie orthognatique",
          description: "Surgery to reshape the nose.",
          imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_520918698.webp",
        },
        {
          title: "Lifting cervicofacial classique",
          description: "A surgical procedure to reduce the appearance of facial wrinkles.",
          imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_520918698.webp",
        },
        {
            title: "Blepharoplastie et rajeunissement du regard",
            description: "A surgical procedure to reduce the appearance of facial wrinkles.",
            imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_520918698.webp",
          },
          {
            title: "Lifting cervicofacial deep plane",
            description: "A surgical procedure to reduce the appearance of facial wrinkles.",
            imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_520918698.webp",
          },
          {
            title: "Lifting cervical neck lift",
            description: "A surgical procedure to reduce the appearance of facial wrinkles.",
            imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_520918698.webp",
          },
          {
            title: "Rhinoplastie",
            description: "A surgical procedure to reduce the appearance of facial wrinkles.",
            imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_520918698.webp",
          },
          {
            title: "Rhinoplastie ethnique",
            description: "A surgical procedure to reduce the appearance of facial wrinkles.",
            imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_520918698.webp",
          },
          {
            title: "Bichectomie",
            description: "A surgical procedure to reduce the appearance of facial wrinkles.",
            imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_520918698.webp",
          },
          {
            title: "Lipofilling du visage",
            description: "A surgical procedure to reduce the appearance of facial wrinkles.",
            imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_520918698.webp",
          },
      ],
    },
    "medecine-esthetique": {
      title: "Médecine esthétique",
      description: "Non-surgical treatments that improve your appearance.",
      subservices: [
        {
          title: "Morpheus 8 visage et corps",
          description: "Injections to reduce wrinkles and fine lines.",
          imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/1142894.jpeg",
        },
        {
          title: "Filler (visage et corps )",
          description: "Filler injections for plumping skin and lips.",
          imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_123456789.jpeg",
        },
        {
            title: "Hydrafacial",
            description: "Filler injections for plumping skin and lips.",
            imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/954345.jpg",
          },
          {
            title: "Sculptra",
            description: "Filler injections for plumping skin and lips.",
            imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/954324.jpg",
          },
          {
            title: "Botox",
            description: "Filler injections for plumping skin and lips.",
            imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_486436419-scaled.jpeg",
          },
          {
            title: "Fils tenseurs",
            description: "Filler injections for plumping skin and lips.",
            imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_123456789.jpeg",
          },
      ],
    },
    "greffe-de-cheveux": {
      title: "Greffe de cheveux",
      description: "Surgical techniques to restore hair growth.",
      imageSrc: "https://theplasticsclinic.com/wp-content/uploads/2024/09/AdobeStock_987654321.jpeg",
      subservices: [
        {
          title: "FUT (Follicular Unit Transplantation)",
          description: "A method of hair transplantation that removes a strip of skin.",
        },
        {
          title: "FUE (Follicular Unit Extraction)",
          description: "A technique to extract individual hair follicles for transplantation.",
        },
      ],
    },
  };
  
  export default servicesData;
  