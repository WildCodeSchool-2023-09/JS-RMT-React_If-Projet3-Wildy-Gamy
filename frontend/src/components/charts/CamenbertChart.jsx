import { useState, useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import PropTypes from "prop-types";
import connexion from "../../services/connexion";

function CamembertChart({ title, url, dataKey, name }) {
  const [stat, setStat] = useState();
  const COLORS = ["#5865f2", "#3095B4", "#e59834"];

  const getStats = async () => {
    try {
      const res = await connexion.get(url);
      setStat(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStats();
  }, []);

  return (
    <div style={{ width: "50%", height: 300 }}>
      <h3>{title}</h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey={dataKey} data={stat} label nameKey={name}>
            {stat &&
              stat.map((entry, index) => (
                <Cell
                  // eslint-disable-next-line react/no-array-index-key
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

CamembertChart.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CamembertChart;
