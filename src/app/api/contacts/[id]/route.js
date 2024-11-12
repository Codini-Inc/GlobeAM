import { NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

export async function DELETE(_, { params: { id } }) {
  try {
    const contact = await prisma.contact.findUnique({
      where: { id },
    });
    if (!contact) {
      return NextResponse.json("Contact not found!", { status: 404 });
    }
    await prisma.contact.delete({ where: { id } });
    return new Response(null, { status: 204 }); // to be able to use 204 code
  } catch {
    return NextResponse.json("Failed to delete contact!", {
      status: 500,
    });
  }
}

// export async function PATCH(request, { params: { id } }) {
//   const {fullName, email, phone, message} = await request.json();

//   try {
//     const contact = await prisma.contact.findUnique({
//       where: { id },
//     });
//     if (!contact) {
//       return NextResponse.json("Contact not found!", { status: 404 });
//     }
//     const contact = await prisma.contact.update({ where: { id }, data: {
//       fullName,
//       email,
//       phone,
//       message
//     } });
//     return new NextResponse.json(contact, { status: 200 });
//   } catch {
//     return NextResponse.json("Failed to delete contact!", {
//       status: 500,
//     });
//   }
// }
