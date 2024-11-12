import React, { useState } from "react";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Textarea,
  Checkbox,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { Mail, Phone, Calendar, MapPin, User } from "lucide-react";
import ContactMethodSelector from "./PreferredContact";
import SectionTitle from "./SectionTitle";

const services = [
  {
    id: "chirurgie-plastique",
    name: "Chirurgie plastique",
    procedures: [
      "Rhinoplastie",
      "Lifting du visage",
      "Liposuccion",
      "Augmentation mammaire",
      "Abdominoplastie",
    ],
  },
  {
    id: "medecine-esthetique",
    name: "Médecine esthétique",
    procedures: [
      "Botox",
      "Acide hyaluronique",
      "Peelings médicaux",
      "Mésothérapie",
      "PRP",
    ],
  },
  {
    id: "greffe-cheveux",
    name: "Greffe de cheveux",
    procedures: [
      "FUE (Follicular Unit Extraction)",
      "FUT (Follicular Unit Transplantation)",
      "DHI (Direct Hair Implantation)",
      "Traitement PRP capillaire",
    ],
  },
  {
    id: "chirurgie-bariatrique",
    name: "Chirurgie bariatrique",
    procedures: [
      "Sleeve gastrectomie",
      "Bypass gastrique",
      "Anneau gastrique",
      "Mini bypass gastrique",
    ],
  },
  {
    id: "dentaire",
    name: "Médecine et chirurgie dentaire",
    procedures: [
      "Implants dentaires",
      "Facettes dentaires",
      "Couronnes dentaires",
      "Blanchiment dentaire",
      "All-on-4",
    ],
  },
  {
    id: "orthopedie",
    name: "Chirurgie orthopédique",
    procedures: [
      "Prothèse du genou",
      "Prothèse de la hanche",
      "Arthroscopie",
      "Chirurgie du dos",
    ],
  },
  {
    id: "urologie",
    name: "Chirurgie urologique",
    procedures: [
      "Prostatectomie",
      "Chirurgie rénale",
      "Chirurgie de la vessie",
      "Vasectomie",
    ],
  },
  {
    id: "vasculaire",
    name: "Chirurgie vasculaire",
    procedures: [
      "Traitement des varices",
      "Chirurgie artérielle",
      "Chirurgie veineuse",
      "Traitement endovasculaire",
    ],
  },
];

const InvoiceRequestForm = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedProcedure, setSelectedProcedure] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("email");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    preferredDate: "",
    hasHealthInsurance: false,
    contactPreference: "email",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/submit-quote-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          selectedService,
          selectedProcedure,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue");
      }

      setSubmitted(true);
    } catch (error) {
      // Handle error - you might want to show an error message to the user
      console.error("Error submitting form:", error);
      // You can set an error state and show it to the user
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-blue-600"
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
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              Demande Envoyée avec Succès !
            </h3>
            <p className="text-gray-600 mb-6">
              Notre équipe vous contactera dans les 24 heures avec votre devis
              personnalisé.
            </p>
            <Button
              color="primary"
              onClick={() => setSubmitted(false)}
              size="lg"
              className="w-full sm:w-auto"
            >
              Nouvelle Demande
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <SectionTitle
            title="Demande de Devis Personnalisé"
            subtitle="Recevez un devis détaillé pour votre intervention médicale, incluant
            tous les services associés."
            theme="gradient"
          />
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4"></h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto"></p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {/* Service Selection - Full Width on All Screens */}
            <div className="col-span-1 sm:col-span-2">
              <Select
                label="Service Médical"
                placeholder="Sélectionnez un service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                isRequired
                classNames={{
                  trigger: "h-12",
                  value: "text-base",
                }}
              >
                {services.map((service) => (
                  <SelectItem
                    className="hover:bg-blue-500 hover:text-white data-[selected=true]:bg-blue-900 text-gray-500 data-[selected=true]:text-white transition duration-300 ease-in-out"
                    key={service.id}
                    color="bg-blue-500"
                    value={service.id}
                  >
                    {service.name}
                  </SelectItem>
                ))}
              </Select>
            </div>
            {/* Procedure Selection - Full Width on All Screens */}
            {selectedService && (
              <div className="col-span-1 sm:col-span-2">
                <Select
                  label="Procédure Spécifique"
                  placeholder="Sélectionnez une procédure"
                  value={selectedProcedure}
                  onChange={(e) => setSelectedProcedure(e.target.value)}
                  isRequired
                  classNames={{
                    trigger: "h-12",
                    value: "text-base",
                  }}
                >
                  {services
                    .find((s) => s.id === selectedService)
                    ?.procedures.map((procedure) => (
                      <SelectItem
                        key={procedure}
                        value={procedure}
                        color="bg-blue-500"
                        className="hover:bg-blue-500 transition duration-300 ease-in-out hover:text-white data-[selected=true]:bg-blue-900 text-gray-500 data-[selected=true]:text-white"
                      >
                        {procedure}
                      </SelectItem>
                    ))}
                </Select>
              </div>
            )}
            {/* Personal Information - 2 Columns on Tablet and Above */}
            <Input
              label="Prénom"
              placeholder="Votre prénom"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              endContent={
                <User className="text-default-400 hidden sm:block" size={20} />
              }
              isRequired
              classNames={{
                input: "text-base",
                inputWrapper: "h-12",
              }}
            />
            <Input
              label="Nom"
              placeholder="Votre nom"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              endContent={
                <User className="text-default-400 hidden sm:block" size={20} />
              }
              isRequired
              classNames={{
                input: "text-base",
                inputWrapper: "h-12",
              }}
            />
            <Input
              type="email"
              label="Email"
              placeholder="votre@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              endContent={
                <Mail className="text-default-400 hidden sm:block" size={20} />
              }
              isRequired
              classNames={{
                input: "text-base",
                inputWrapper: "h-12",
              }}
            />
            <Input
              type="tel"
              label="Téléphone"
              placeholder="+33 6 XX XX XX XX"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              endContent={
                <Phone className="text-default-400 hidden sm:block" size={20} />
              }
              isRequired
              classNames={{
                input: "text-base",
                inputWrapper: "h-12",
              }}
            />
            <Input
              label="Pays"
              placeholder="Votre pays de résidence"
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              endContent={
                <MapPin
                  className="text-default-400 hidden sm:block"
                  size={20}
                />
              }
              isRequired
              classNames={{
                input: "text-base",
                inputWrapper: "h-12",
              }}
            />
            <Input
              type="date"
              label="Date Souhaitée"
              placeholder="Sélectionnez une date"
              value={formData.preferredDate}
              onChange={(e) =>
                setFormData({ ...formData, preferredDate: e.target.value })
              }
              classNames={{
                input: "text-base text-gray-500",
                inputWrapper: "h-12",
              }}
            />
            {/* Message Area - Full Width */}
            <div className="col-span-1 sm:col-span-2">
              <Textarea
                label="Informations Complémentaires"
                placeholder="Décrivez vos attentes ou posez vos questions..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                minRows={4}
                classNames={{
                  input: "text-base",
                  inputWrapper: "min-h-[100px]",
                }}
              />
            </div>
            {/* Additional Options - Full Width
            <div className="col-span-1 sm:col-span-2 space-y-6">
              <Checkbox
                isSelected={formData.hasHealthInsurance}
                onValueChange={(checked) =>
                  setFormData({ ...formData, hasHealthInsurance: checked })
                }
              >
                <span className="text-base text-gray-500">
                  Je dispose d'une assurance santé
                </span>
              </Checkbox>
            </div> */}
          </div>
          <ContactMethodSelector
            value={selectedMethod}
            onChange={setSelectedMethod}
          />

          {/* Submit Button - Full Width on Mobile, Auto on Larger Screens */}
          <div className="mt-6 md:mt-8">
            <Button
              type="submit"
              color="primary"
              className="w-full sm:w-auto min-w-[200px]"
              isLoading={submitting}
              size="lg"
            >
              {submitting ? "Envoi en cours..." : "Demander un Devis"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InvoiceRequestForm;
