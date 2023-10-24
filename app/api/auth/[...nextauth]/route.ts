import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { Adapter } from 'next-auth/adapters'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Correo electrónico', type: 'text', placeholder: 'usuario@estacionamiento.cl' },
        password: { label: 'Contraseña', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        console.log(credentials)

        const { email, password } = credentials

        const user = await prisma.user.findUnique({
          where: { email: email}
        })

        if (!user) return null

        if (!user.passwordHash) return null

        const validPassword = await bcrypt.compare(password, user.passwordHash)
        console.log(validPassword)

        if (!validPassword) return null

        const infoUser = {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
        return infoUser
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: any) {
      return true
    },
    async redirect({ url, baseUrl }: any) {
      return baseUrl
    },
    async session({ session, user, token }: any) {
      session.user.id = user.id
      console.log('SESSION: ')
      console.log(session)
      return session
    }
  },
}
const handler = NextAuth(authOptions)

export {
  handler as GET,
  handler as POST
}