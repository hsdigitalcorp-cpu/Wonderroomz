import HeroSection from "@/components/sections/HeroSection"
import LogementsGrid from "@/components/sections/LogementsGrid"
import WhySection from "@/components/sections/WhySection"
import PacksPreview from "@/components/sections/PacksPreview"
import ReviewsSection from "@/components/sections/ReviewsSection"
import CtaSection from "@/components/sections/CtaSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogementsGrid />
      <WhySection />
      <PacksPreview />
      <ReviewsSection />
      <CtaSection />
    </>
  )
}
