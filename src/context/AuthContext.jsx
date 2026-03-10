import { createContext, useContext, useState } from 'react'
import { mockAdmin } from '../mocks/employees'

const AuthContext = createContext()

const MOCK_ACCOUNTS = [mockAdmin]

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = sessionStorage.getItem('auth_user')
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })

  function login(email, password) {
    const match = MOCK_ACCOUNTS.find(
      (e) => e.email === email && e.password === password
    )
    if (!match) return false
    setUser(match)
    sessionStorage.setItem('auth_user', JSON.stringify(match))
    return true
  }

  function logout() {
    setUser(null)
    sessionStorage.removeItem('auth_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
