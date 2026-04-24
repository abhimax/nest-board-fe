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
            id={property.id}
            title={property.title}
            location={property.location}
            type={property.type}
            price={property.price}
            rating={property.rating}
            image={property.image}
          />
        ))}
      </div>
    </>
  )
}
