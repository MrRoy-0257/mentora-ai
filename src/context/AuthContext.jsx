// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('mentora_token');
    const userData = localStorage.getItem('mentora_user');
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // ✅ Login function
  const login = (userData, token) => {
    localStorage.setItem('mentora_token', token);
    localStorage.setItem('mentora_user', JSON.stringify(userData));
    setUser(userData);
  };

  // ✅ Logout function
  const logout = () => {
    localStorage.removeItem('mentora_token');
    localStorage.removeItem('mentora_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook to use anywhere
export const useAuth = () => useContext(AuthContext);
