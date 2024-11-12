import { prisma } from '@/prisma/client'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export async function POST(request) {
  const { email, password } = await request.json()
  const admin = await prisma.admin.findUnique({
    where: { email }
  })
  if (
    !admin ||
    admin.email !== email ||
    !bcrypt.compareSync(password, admin.password)
  ) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    )
  }
  return NextResponse.json({ email, password }, { status: 200 })
}
