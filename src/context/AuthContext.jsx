// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const user = localStorage.getItem('popx_user')
    if (user) {
      setCurrentUser(JSON.parse(user))
    }
    setLoading(false)
  }, [])

  const login = (userData) => {
    localStorage.setItem('popx_user', JSON.stringify(userData))
    setCurrentUser(userData)
  }

  const register = (userData) => {
    localStorage.setItem('popx_user', JSON.stringify(userData))
    setCurrentUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('popx_user')
    setCurrentUser(null)
  }

  const value = {
    currentUser,
    login,
    register,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}