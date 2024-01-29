import { createContext, useMemo, useState } from "react";
import { PropTypes } from "prop-types";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [connected, setConnected] = useState({ role: null });
  const [profil, setProfil] = useState({ profiles: null });

  const context = useMemo(
    () => ({
      connected,
      setConnected,
      profil,
      setProfil,
    }),
    [connected, setConnected, profil, setProfil]
  );
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AuthProvider;
