"use server";

import { revalidatePath } from "next/cache";
import { deleteContact } from "./data-service";
import { prisma } from "@/prisma/client";
import { auth, signIn } from "./auth";
import { redirect } from "next/navigation";

export async function deleteContactAction(id) {
  if (!!(await auth())) {
    await deleteContact(id);
    revalidatePath("/admin");
    return true;
  } else {
    redirect("/login");
  }
}

export async function updateContactAction(id, formData) {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");
  try {
    await prisma.contact.update({
      where: { id },
      data: {
        fullName,
        email,
        phone,
        message,
      },
    });
  } catch {
    throw new Error("Failed to update contact!");
  }
}

export async function signInAction(email, password) {
  await signIn("credentials", { redirect: false, email, password });
  redirect("/admin");
}

export async function searchContacts(contacts, query) {
  const searchTerm = query.toLowerCase();
  return contacts.filter(
    contact =>
      contact.fullName.toLowerCase().includes(searchTerm) ||
      contact.email.toLowerCase().includes(searchTerm) ||
      contact.message?.toLowerCase().includes(searchTerm) ||
      contact.phone?.toString().includes(searchTerm)
  );
}
