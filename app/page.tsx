import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import HostSection from '@/components/sections/HostSection'
import HuijieSection from '@/components/sections/HuijieSection'
import GuestSection from '@/components/sections/GuestSection'
import CurrentEventSection from '@/components/sections/CurrentEventSection'
import PastEventsSection from '@/components/sections/PastEventsSection'
import RegistrationSection from '@/components/sections/RegistrationSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <HostSection />
      <HuijieSection />
      <GuestSection />
      <CurrentEventSection />
      <PastEventsSection />
      <RegistrationSection />
    </>
  )
}
