import { createContext, useMemo, useState } from "react";
import { PropTypes } from "prop-types";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [connected, setConnected] = useState({ role: null });
  const [profil, setProfile] = useState({ profiles: "" });

  const contextValue = useMemo(
    () => ({
      connected,
      setConnected,
      profil,
      setProfile,
    }),
    [connected, setConnected, profil, setProfile]
  );
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AuthProvider;
