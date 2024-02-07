import { createContext, useMemo, useState } from "react";
import { PropTypes } from "prop-types";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [connected, setConnected] = useState({ role: null });
  const [profil, setProfile] = useState({ profiles: null });
  const [wonGames, setWonGames] = useState({ wonGames: null });
  const [time, setTime] = useState({ timePerPlayer: null });

  const contextValue = useMemo(
    () => ({
      connected,
      setConnected,
      profil,
      setProfile,
      wonGames,
      setWonGames,
      time,
      setTime,
    }),
    [
      connected,
      setConnected,
      profil,
      setProfile,
      wonGames,
      setWonGames,
      time,
      setTime,
    ]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AuthProvider;
