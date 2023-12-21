import { ResponsiveContainer, PieChart, Pie } from "recharts";
import PropTypes from "prop-types";

function CamenbertChart({ data, dataKey, name }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey={dataKey}
            data={data}
            fill="#8884d8"
            label
            nameKey={name}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

CamenbertChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  dataKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CamenbertChart;
