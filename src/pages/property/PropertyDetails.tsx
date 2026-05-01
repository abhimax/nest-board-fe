import { PropertySection } from "./components/PropertySection"

const mockProperty = {
  id: "prop-detail-001",
  rating: 4.8,
  image:
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=600&fit=crop",
}

export function PropertyDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PropertySection
        image={mockProperty.image}
        rating={mockProperty.rating}
      />
      <div className="px-4 pb-12">
        <div className="relative z-10 -mt-12">
          <p>Property Info goes here...</p>
        </div>

        <div className="mt-5">
          <p>Room type list goes here...</p>
        </div>
      </div>
    </div>
  )
}
