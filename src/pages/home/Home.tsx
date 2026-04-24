import { HeroSection } from "./components/HeroSection"
import { PropertyCard } from "@/components/common/PropertyCard"
export function Home() {
  return (
    <>
      <HeroSection />
      {/* <div className="grid grid-cols-3 gap-3"> */}
      <PropertyCard />
      {/* </div> */}
    </>
  )
}
