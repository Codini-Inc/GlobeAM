import { NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import { schema } from "@/lib/schemas/contactSchema";
import { revalidatePath } from "next/cache";

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany();
    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    return NextResponse.json("Failed to fetch contacts!", {
      status: 500,
    });
  }
}

export async function POST(request) {
  try {
    const { fullName, email, phone, message } = await request.json();
    const hasAlreadySubmitted = await prisma.contact.findFirst({
      where: { email },
    });

    if (hasAlreadySubmitted) {
      throw new Error("Email already registered!");
    }
    const parsedConatct = await schema.validate(
      { fullName, email, phone, message },
      { strict: true }
    );

    const contact = await prisma.contact.create({
      data: parsedConatct,
    });
    revalidatePath(`/admin`);
    return NextResponse.json(contact, {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
