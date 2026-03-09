import { useState } from 'react'
import { Link } from 'react-router-dom'
import useWindowTitle from '../hooks/useWindowTitle'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(fields) {
  const errors = {}
  if (!fields.email) {
    errors.email = 'Email address is required.'
  } else if (!EMAIL_REGEX.test(fields.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!fields.password) {
    errors.password = 'Password is required.'
  } else if (fields.password.length < 8) {
    errors.password = 'Password must be at least 8 characters.'
  }
  return errors
}

function LoginPage() {
  useWindowTitle('Employee Login | AnkaBanka')

  const [fields, setFields] = useState({ email: '', password: '' })
  const [touched, setTouched] = useState({ email: false, password: false })
  const [submitted, setSubmitted] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const errors = validate(fields)
  const visibleErrors = {
    email:    (touched.email    || submitted) ? errors.email    : undefined,
    password: (touched.password || submitted) ? errors.password : undefined,
  }

  function handleChange(e) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleBlur(e) {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    if (Object.keys(errors).length > 0) return
    // TODO: call auth service
    console.log('Login submitted:', fields)
  }

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Right panel — form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        {/* Mobile logo */}
        <Link to="/" className="flex items-center gap-3 mb-12 lg:hidden">
          <div className="w-7 h-7 border border-amber-500 flex items-center justify-center">
            <span className="text-amber-500 text-xs font-serif font-semibold">A</span>
          </div>
          <span className="text-white font-serif text-lg tracking-widest font-light">
            Anka<span className="text-amber-400">Banka</span>
          </span>
        </Link>

        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <p className="text-xs tracking-widest uppercase text-amber-500 mb-4">Employee Portal</p>
            <h1 className="font-serif text-4xl font-light text-white mb-3">Staff Sign In</h1>
            <div className="w-10 h-px bg-amber-500 mx-auto" />
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs tracking-widest uppercase text-slate-400 mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={fields.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="employee@exbanka.com"
                className={`input-field bg-slate-900 text-white placeholder-slate-600 ${
                  visibleErrors.email ? 'input-error' : ''
                }`}
                style={{ borderColor: visibleErrors.email ? undefined : 'rgba(255,255,255,0.1)' }}
              />
              {visibleErrors.email && (
                <p className="mt-2 text-xs text-red-400">{visibleErrors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-xs tracking-widest uppercase text-slate-400"
                >
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs text-amber-500 hover:text-amber-400 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={fields.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Min. 8 characters"
                  className={`input-field bg-slate-900 text-white placeholder-slate-600 pr-12 ${
                    visibleErrors.password ? 'input-error' : ''
                  }`}
                  style={{ borderColor: visibleErrors.password ? undefined : 'rgba(255,255,255,0.1)' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {visibleErrors.password && (
                <p className="mt-2 text-xs text-red-400">{visibleErrors.password}</p>
              )}
            </div>

            <button type="submit" className="btn-primary w-full mt-2">
              Sign In
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default LoginPage
