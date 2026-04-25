import { HeroSection } from "./components/HeroSection"
import { properties } from "@/data/properties"
import { PropertyList } from "./components/PropertyList"
export function Home() {
  return (
    <>
      <HeroSection />
      <PropertyList properties={properties} />
    </>
  )
}
