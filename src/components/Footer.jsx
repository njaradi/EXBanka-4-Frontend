import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border border-amber-500 flex items-center justify-center">
              <span className="text-amber-500 text-xs font-serif">A</span>
            </div>
            <span className="text-white font-serif text-base tracking-widest font-light">
              Anka<span className="text-amber-400">Banka</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            {['Home', 'About', 'Login'].map((label) => (
              <Link
                key={label}
                to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                className="text-xs tracking-widest uppercase text-slate-500 hover:text-amber-400 transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} AnkaBanka
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
