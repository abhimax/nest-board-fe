import { HeroSection } from "./components/HeroSection"
import { PropertyCard } from "@/components/common/PropertyCard"
import { properties } from "@/data/properties"
export function Home() {
  return (
    <>
      <HeroSection />
      <div className="grid grid-cols-3 gap-3">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            {...property} // Spread operator to pass all property fields as props
          />
        ))}
      </div>
    </>
  )
}
