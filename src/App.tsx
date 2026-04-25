import { BrowserRouter, Link, Route, Routes } from "react-router"
import { Home } from "./pages/home/Home"
import { Property } from "./pages/property/Property"

export function App() {
  return (
    <BrowserRouter>
      {/* Navigation Links */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Property />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
