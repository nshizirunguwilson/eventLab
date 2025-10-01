import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import EventsCarousel from '@/components/events-carousel'
import PopularPlaces from '@/components/popular-places'
import PlatformStats from '@/components/platform-stats'
import HowItWorks from '@/components/how-it-works'
import FeaturedEvents from '@/components/featured-events'
import Cities from '@/components/cities'
import Organizers from '@/components/organizers'
import Speakers from '@/components/speakers'
import Blog from '@/components/blog'
import Testimonials from '@/components/testimonials'
import Partners from '@/components/partners'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <EventsCarousel />
      <PopularPlaces />
      <PlatformStats />
      <HowItWorks />
      <FeaturedEvents />
      <Cities />
      <Organizers />
      <Speakers />
      <Blog />
      <Testimonials />
      <Partners />
      <Footer />
    </main>
  )
}
