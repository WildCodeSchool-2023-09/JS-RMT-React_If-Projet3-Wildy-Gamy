import CamenbertChart from "../components/charts/CamenbertChart";
import BarContainer from "../components/charts/BarChart";

function AdminGame() {
  return (
    <div className="adminContainer">
      <h1>AdminGame</h1>
      <div className="camenbertContainer">
        <CamenbertChart
          url="/party?stat=is_won"
          dataKey="value"
          name="name"
          title="Party won"
        />
        <CamenbertChart
          url="/party?stat=played"
          dataKey="value"
          name="name"
          title="Party by game"
        />
      </div>
      <div className="barContainer">
        <BarContainer
          url="/party?stat=timeperplayer"
          dataKey="value"
          name="name"
          title="Party by users"
        />
      </div>
    </div>
  );
}

export default AdminGame;
