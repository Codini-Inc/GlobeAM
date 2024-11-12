import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

const ContactMethodSelector = ({ value, onChange }) => {
  const methods = [
    {
      id: "email",
      icon: <Mail size={24} />,
      label: "Email",
      description: "Réponse détaillée sous 24h",
      gradient: "from-blue-500 to-blue-600",
      hoverGradient: "from-blue-600 to-blue-700",
    },
    {
      id: "phone",
      icon: <Phone size={24} />,
      label: "Téléphone",
      description: "Conversation directe",
      gradient: "from-yellow-500 to-yellow-600",
      hoverGradient: "from-yellow-600 to-yellow-700",
    },
    {
      id: "whatsapp",
      icon: <MessageCircle size={24} />,
      label: "WhatsApp",
      description: "Chat instantané",
      gradient: "from-emerald-500 to-emerald-600",
      hoverGradient: "from-emerald-600 to-emerald-700",
    },
  ];

  return (
    <div className="w-full space-y-4 pt-5">
      <p className="text-base font-medium text-gray-700">
        Comment souhaitez-vous être contacté ?
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => onChange(method.id)}
            className={`group relative overflow-hidden rounded-xl transition-all duration-300 
              ${
                value === method.id
                  ? `bg-gradient-to-r ${method.gradient} shadow-lg scale-100`
                  : "bg-white hover:scale-105"
              }
              ${
                value === method.id
                  ? "ring-2 ring-offset-2 ring-blue-500"
                  : "hover:shadow-md"
              }
            `}
          >
            {/* Background Animation */}
            <div
              className={`
              absolute inset-0 bg-gradient-to-r ${
                method.hoverGradient
              } opacity-0 
              transition-opacity duration-300 
              group-hover:opacity-100
              ${value === method.id ? "opacity-100" : ""}
            `}
            />

            {/* Content */}
            <div className="relative p-6 flex flex-col items-center text-center space-y-3">
              {/* Icon Container */}
              <div
                className={`
                w-12 h-12 rounded-full flex items-center justify-center
                transition-all duration-300
                ${
                  value === method.id
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600 group-hover:text-white group-hover:bg-white/20"
                }
              `}
              >
                {method.icon}
              </div>

              {/* Text Content */}
              <div className="space-y-1">
                <p
                  className={`font-semibold transition-colors duration-300
                  ${
                    value === method.id
                      ? "text-white"
                      : "text-gray-700 group-hover:text-white"
                  }
                `}
                >
                  {method.label}
                </p>
                <p
                  className={`text-sm transition-colors duration-300
                  ${
                    value === method.id
                      ? "text-white/90"
                      : "text-gray-500 group-hover:text-white/90"
                  }
                `}
                >
                  {method.description}
                </p>
              </div>

              {/* Selection Indicator */}
              <div
                className={`
                absolute top-3 right-3 w-3 h-3 rounded-full 
                transition-all duration-300
                ${
                  value === method.id
                    ? "bg-white scale-100"
                    : "bg-transparent scale-0 group-hover:bg-white/50 group-hover:scale-100"
                }
              `}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContactMethodSelector;
