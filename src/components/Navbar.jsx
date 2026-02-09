import { Link, NavLink } from 'react-router-dom'

const linkClass =
  "text-sm font-medium hover:text-blue-300 transition-colors";

export default function Navbar() {
  return (
    <nav className="bg-brand-dark text-white sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-blue-500 rounded-sm" />
          <div>
            <div className="text-lg font-semibold tracking-wide">
              IRA Technologies
            </div>
            <div className="text-xs text-gray-300">
              Trusted IT Staffing & Consulting
            </div>
          </div>
        </Link>

        <div className="hidden md:flex space-x-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}
