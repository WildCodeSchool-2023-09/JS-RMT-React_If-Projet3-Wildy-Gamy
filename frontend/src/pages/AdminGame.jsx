import { useEffect, useState } from "react";
import connexion from "../../connexion";
import CamenbertChart from "../../components/charts/CamenbertChat";

function AdminGame() {
  const [isWon, setIsWon] = useState([]);
  const [played, setPlayed] = useState([]);

  let transformedData = [];
  if (Array.isArray(isWon) && isWon.length > 0) {
    transformedData = Object.keys(isWon[0]).map((key) => ({
      name: key,
      value: parseInt(isWon[0][key], 10),
    }));
  }

  useEffect(() => {
    connexion
      .get("/party?stat=is_won")
      .then((res) => setIsWon(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    connexion
      .get("/party?stat=played")
      .then((res) => setPlayed(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>adminGame</h1>
      <CamenbertChart data={transformedData} dataKey="value" name="name" />
      <CamenbertChart data={played} dataKey="value" name="name" />
    </div>
  );
}

export default AdminGame;
