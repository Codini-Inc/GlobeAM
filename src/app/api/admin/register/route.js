import { prisma } from '@/prisma/client'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const { email, password } = await req.json()

  const hashedPassword = bcrypt.hashSync(password, 10)

  try {
    const admin = await prisma.admin.create({
      data: { email, password: hashedPassword }
    })
    return NextResponse.json(
      { message: 'Admin created successfully', admin },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Admin with this email already exists' },
      { status: 400 }
    )
  }
}
