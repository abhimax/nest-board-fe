import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./pages/home/Home"
import { Property } from "./pages/property/PropertyDetails"
import { Map } from "./pages/map/Map"
import { Navbar, type NavbarLink } from "./components/common/Navbar"

const navLinks: NavbarLink[] = [
  { label: "Explore", to: "/" },
  { label: "Property Details", to: "/about" },
  { label: "Map View", to: "/map" },
]

export function App() {
  return (
    <BrowserRouter>
      {/* Navigation Links */}
      {/* <nav>
        <Link to="/">Explore</Link>
        <Link to="/about">Property Details</Link>
        <Link to="/map">Map View</Link>
    </nav> */}
      <Navbar links={navLinks} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Property />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
