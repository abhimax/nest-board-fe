import { BrowserRouter, Link, Route, Routes } from "react-router"
import { Home } from "./pages/home/Home"
import { Property } from "./pages/property/PropertyDetails"
import { Map } from "./pages/map/Map"

export function App() {
  return (
    <BrowserRouter>
      {/* Navigation Links */}
      <nav>
        <Link to="/">Explore</Link>
        <Link to="/about">Property Details</Link>
        <Link to="/map">Map View</Link>
      </nav>

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
