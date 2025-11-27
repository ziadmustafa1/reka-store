import { HeroSection } from '@/components/sections/hero-section'
import { CategoriesSection } from '@/components/sections/categories-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { FeaturedProductsSection } from '@/components/sections/featured-products-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroSection />
      <CategoriesSection />
      <FeaturesSection />
      <FeaturedProductsSection />
      <ContactSection />
    </div>
  )
}
