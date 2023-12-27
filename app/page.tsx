import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { LandingLayout } from './_components/landing/LandingLayout'
import { NavbarLanding } from './_components/landing/Navbar'
import { HeroSection } from './_components/landing/HeroSection'
import { FeaturesPage } from './_components/landing/Features'
import { KnowMore } from './_components/landing/KnowMore'
import { WhatAreaYouWaitingForPage } from './_components/landing/WhatAreYouWaitingFor'
import { PricingPage } from './_components/landing/Pricing'
import { Footer } from './_components/landing/Footer'

export default async function Home() {

  const session = await getServerSession(authOptions)

  if (!session) return (
    <LandingLayout>
      <NavbarLanding />
      <HeroSection />
      <FeaturesPage />
      <KnowMore />
      <WhatAreaYouWaitingForPage />
      <PricingPage />
      <Footer />
    </LandingLayout>
  )

  return redirect('/dashboard')
}
