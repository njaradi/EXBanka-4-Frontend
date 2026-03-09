import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `relative text-xs tracking-widest uppercase font-medium pb-1 transition-colors duration-150 ${
      isActive
        ? 'text-amber-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-amber-400'
        : 'text-slate-300 hover:text-white'
    }`

  return (
    <nav className="bg-slate-950 border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between py-5">
          {/* Brand */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-7 h-7 border border-amber-500 flex items-center justify-center">
              <span className="text-amber-500 text-xs font-serif font-semibold">A</span>
            </div>
            <span className="text-white font-serif text-lg tracking-widest font-light">
              Anka<span className="text-amber-400">Banka</span>
            </span>
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="px-5 py-2 border border-amber-500 text-amber-400 text-xs tracking-widest uppercase font-medium hover:bg-amber-500 hover:text-slate-950 transition-all duration-200"
            >
              Employee Login
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/5 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                end={link.to === '/'}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/login"
              className="text-xs tracking-widest uppercase font-medium text-amber-400"
              onClick={() => setMenuOpen(false)}
            >
              Employee Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
