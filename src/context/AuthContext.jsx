import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const STORAGE_KEY = "crimemind_auth";

const defaultUser = {
  name: "Smitha Keneeth A",
  role: "Team Leader",
  serviceId: "24205099",
  avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Smitha",
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);

    if (stored) {
      setUser(JSON.parse(stored));
    }

    setIsLoading(false);
  }, []);

  const login = ({ username } = {}) => {
    const loggedInUser = {
      ...defaultUser,
      serviceId: username || defaultUser.serviceId,
    };

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(loggedInUser));
    setUser(loggedInUser);

    return loggedInUser;
  };

  const logout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return ctx;
}