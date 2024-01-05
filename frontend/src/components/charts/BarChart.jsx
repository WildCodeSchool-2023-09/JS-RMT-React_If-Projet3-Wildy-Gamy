import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import connexion from "../../services/connexion";

function BarContainer({ url, title, dataKey }) {
  const [stat, setStat] = useState([]);

  const getStat = async () => {
    try {
      const res = await connexion.get(url);
      setStat(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStat();
  }, []);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>{title}</h3>
      <ResponsiveContainer width="75%" height="100%">
        <BarChart width={150} height={40} data={stat}>
          <Bar dataKey={dataKey} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <div className="timePerUserContainer">
        {stat.map((el) => (
          <div className="timePerUserDiv" key={el.value}>
            <ul className="ulTimePerPlayer">
              <li>Nom d'utilisateur: {el.name}</li>
              <li>Temps de jeu: {el.value} min</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

BarContainer.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
};

export default BarContainer;
