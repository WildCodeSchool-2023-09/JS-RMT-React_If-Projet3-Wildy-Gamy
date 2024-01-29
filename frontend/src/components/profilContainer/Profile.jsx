import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

function ProfilContainer() {
  const { profil } = useContext(AuthContext);
  const { connected } = useContext(AuthContext);
  return (
    <div>
      <p>{profil.bio}</p>
      <p>{connected.role}</p>
    </div>
  );
}

export default ProfilContainer;
