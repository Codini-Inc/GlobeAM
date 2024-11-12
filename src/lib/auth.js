import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { prisma } from '@/prisma/client'
import bcrypt from 'bcryptjs'
import { PrismaAdapter } from '@auth/prisma-adapter'

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {
          name: 'email',
          type: 'email',
          placeholder: 'email@example.com',
          label: 'Email'
        },
        password: {
          name: 'password',
          type: 'password'
        }
      },
      authorize: async ({ email, password }) => {
        const user = await prisma.admin.findUnique({
          where: { email }
        })
        if (user && bcrypt.compareSync(password, user.password)) {
          return {
            id: user.id,
            email: user.email
          }
        }
        return null
      }
    })
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      if (user) {
        return true
      }
      return false
    },
    // async redirect({ url, baseUrl }) {
    //   if (url.startsWith(baseUrl)) return url
    //   else if (url.startsWith('/'))
    //     return new URL(url, baseUrl).toString()
    //   return baseUrl
    // },
    async session({ session, token }) {
      if (token) {
        session.id = token.id
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }

      return token
    }
  },
  pages: {
    error: '/',
    signIn: '/login'
  },

  session: {
    strategy: 'jwt'
  }
})
