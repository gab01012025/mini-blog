// src/contexts/AuthContext.js
import { useContext, createContext } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children, value }) {
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthValue() {
  return useContext(AuthContext);
}
