// pages/api/submit-quote-request.js

import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

// Email configuration stays the same
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Email templates
const getAdminEmailTemplate = (data) => `
  <h2>Nouvelle demande de devis</h2>
  <h3>Informations personnelles:</h3>
  <ul>
    <li>Nom: ${data.lastName}</li>
    <li>Prénom: ${data.firstName}</li>
    <li>Email: ${data.email}</li>
    <li>Téléphone: ${data.phone}</li>
    <li>Pays: ${data.country}</li>
  </ul>
  
  <h3>Service demandé:</h3>
  <ul>
    <li>Service: ${data.selectedService}</li>
    <li>Procédure: ${data.selectedProcedure}</li>
    <li>Date souhaitée: ${data.preferredDate || "Non spécifiée"}</li>
  </ul>
  
  <h3>Informations supplémentaires:</h3>
  <ul>
    <li>Assurance santé: ${data.hasHealthInsurance ? "Oui" : "Non"}</li>
    <li>Méthode de contact préférée: ${data.contactPreference}</li>
  </ul>
  
  <h3>Message:</h3>
  <p>${data.message || "Aucun message supplémentaire"}</p>
`;

const getClientEmailTemplate = (data) => `
  <h2>Confirmation de votre demande de devis</h2>
  
  <p>Cher/Chère ${data.firstName} ${data.lastName},</p>
  
  <p>Nous avons bien reçu votre demande de devis pour ${data.selectedProcedure} 
  en ${
    data.selectedService
  }. Notre équipe vous contactera dans les plus brefs délais 
  via ${data.contactPreference} pour discuter des détails.</p>
  
  <h3>Récapitulatif de votre demande:</h3>
  <ul>
    <li>Service: ${data.selectedService}</li>
    <li>Procédure: ${data.selectedProcedure}</li>
    <li>Date souhaitée: ${data.preferredDate || "Non spécifiée"}</li>
  </ul>
  
  <p>Si vous avez des questions entre-temps, n'hésitez pas à nous contacter.</p>
  
  <p>Cordialement,<br>
  L'équipe médicale</p>
`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data = req.body;

    // Basic validation
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "country",
      "selectedService",
      "selectedProcedure",
    ];
    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        error: "Missing required fields",
        fields: missingFields,
      });
    }

    // Validation helpers
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{8,}$/;

    // Validate email and phone
    if (!emailRegex.test(data.email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    if (!phoneRegex.test(data.phone)) {
      return res.status(400).json({ error: "Invalid phone format" });
    }

    // Create quote request in database
    const quoteRequest = await prisma.quoteRequest.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        country: data.country,
        service: data.selectedService,
        procedure: data.selectedProcedure,
        preferredDate: data.preferredDate || null,
        message: data.message || null,
        hasHealthInsurance: data.hasHealthInsurance || false,
        contactPreference: data.contactPreference,
        status: "PENDING",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    // Send emails
    await Promise.all([
      // Send admin notification
      transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL,
        to: process.env.ADMIN_EMAIL,
        subject: "Nouvelle demande de devis",
        html: getAdminEmailTemplate(data),
      }),

      // Send client confirmation
      transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL,
        to: data.email,
        subject: "Confirmation de votre demande de devis",
        html: getClientEmailTemplate(data),
      }),
    ]);

    // Return success with the created quote request
    return res.status(200).json({
      message: "Quote request submitted successfully",
      success: true,
      quoteRequest,
    });
  } catch (error) {
    console.error("Error processing quote request:", error);

    // Check if it's a Prisma error
    if (error?.name === "PrismaClientKnownRequestError") {
      return res.status(400).json({
        error: "Database error",
        message:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Une erreur est survenue lors de l'enregistrement",
      });
    }

    return res.status(500).json({
      error: "Internal server error",
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Une erreur est survenue",
    });
  } finally {
    await prisma.$disconnect();
  }
}
