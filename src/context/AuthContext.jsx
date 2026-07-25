import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

const MOCK_USER = {
  name: 'ACP Vikrant Singh',
  role: 'Unit Head',
  serviceId: 'KSP_99482',
  avatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBP_gko_hCNb7ynRxzNY1zu4KttTlYw7q7xFPDGD9Ncj6Y0wyY0BaKo0KY4LwwHGY5hV00mPoSp_ARBBCcxSCEnnMibvw67P9hkF9nfvM0e_8XslY7Mw3DE89Qy4d9sPNBllHOBReMvLa2VBhkIGsPts-U-B7kWIKKuV7LKk_OL3eyhkc-gsX4OFNonG6gdJ9LJnQiGtDO59-7DozAdPANmqCtMp2Vg9IWhtdJvpS0YZBRSGpi_Zxh9',
}

const STORAGE_KEY = 'crimemind_auth'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored) {
      setUser(JSON.parse(stored))
    }
    setIsLoading(false)
  }, [])

  const login = ({ username } = {}) => {
    const loggedInUser = {
      ...MOCK_USER,
      serviceId: username || MOCK_USER.serviceId,
    }
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(loggedInUser))
    setUser(loggedInUser)
    return loggedInUser
  }

  const logout = () => {
    sessionStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
