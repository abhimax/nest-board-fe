import { PropertyInfo } from "./components/PropertyInfo"
import { PropertySection } from "./components/PropertySection"

const mockProperty = {
  id: "prop-detail-001",
  rating: 4.8,
  image:
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=600&fit=crop",
  title: "Green Villa Colombo",
  address: "123 Galle Road, Colombo 03",
  amenities: ["Villa", "AC", "Premium", "WiFi"],
  seatsAvailable: 4,
  minStay: "3 months",
  startingPrice: "LKR 25K",
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
          <PropertyInfo
            title={mockProperty.title}
            address={mockProperty.address}
            amenities={mockProperty.amenities}
            seatsAvailable={mockProperty.seatsAvailable}
            minStay={mockProperty.minStay}
            startingPrice={mockProperty.startingPrice}
          />
        </div>

        <div className="mt-5">
          <p>Room type list goes here...</p>
        </div>
      </div>
    </div>
  )
}
