// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

/**
 * AuthProvider tiene traccia dell'utente loggato (es. nome Minecraft),
 * lo persiste in localStorage e fornisce funzioni login/logout.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Al montaggio, recupera eventuale sessione salvata
  useEffect(() => {
    const stored = localStorage.getItem('nightrp_user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  /**
   * Simula il login salvando lo username (es. Minecraft name).
   * @param {string} username
   */
  function login(username) {
    const usr = { username };
    setUser(usr);
    localStorage.setItem('nightrp_user', JSON.stringify(usr));
  }

  /** Effettua logout rimuovendo la sessione */
  function logout() {
    setUser(null);
    localStorage.removeItem('nightrp_user');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/** Hook per accedere facilmente al contesto */
export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve essere usato all’interno di AuthProvider');
  }
  return context;
}

export default AuthContext;
