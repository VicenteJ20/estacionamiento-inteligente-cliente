import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { Adapter } from 'next-auth/adapters'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  adapter: PrismaAdapter(prisma) as Adapter,
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Correo electrónico', type: 'text', placeholder: 'usuario@estacionamiento.cl' },
        password: { label: 'Contraseña', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
      
        const { email, password } = credentials

        const user = await prisma.user.findUnique({
          where: { email: email}
        })

        if (!user) return null

        if (!user.passwordHash) return null

        const validPassword = await bcrypt.compare(password, user.passwordHash)

        if (!validPassword) return null

        return user
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, trigger}: any) {
      if (user) {
        token.role = user.role
        token.sub = user.id
        token.accountType = user.accountType
        token.enterprise = user.enterprise
        token.status = user.status
      }
      

      if (trigger === 'update' && session?.name) token.name = session.session.user.name
      return token
    },
    async session(session: any) {
      const enterpriseID = await prisma.enterprise.findFirst({
        where: {
          manager: session.token.sub
        },
        select: {
          id: true
        }
      })

      session.session.user.id = session.token.sub
      session.session.user.role = session.token.role
      session.session.user.accountType = session.token.accountType
      session.session.user.enterprise = enterpriseID?.id
      session.session.user.status = session.token.status

      return session.session
    }
  },
  pages: {
    signIn: '/auth/signin',
  }
} as any
const handler = NextAuth(authOptions)

export {
  handler as GET,
  handler as POST
}