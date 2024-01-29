import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

function ProfilContainer() {
  const { profil } = useContext(AuthContext);

  return (
    <div>
      <p>{profil.bio}</p>
      <p>test</p>
    </div>
  );
}

export default ProfilContainer;
