import CamenbertChart from "../components/charts/CamenbertChart";
import BarContainer from "../components/charts/BarChart";

function AdminGame() {
  // const array = [
  //   {
  //     name: "won",
  //   },
  // ];

  const arr = "value";

  return (
    <div className="adminContainer">
      <h1>AdminGame</h1>
      <div className="camenbertContainer">
        <CamenbertChart
          url="/party?stat=is_won"
          dataKey={arr}
          name="name"
          title="Victoire / Défaite"
        />
        <CamenbertChart
          url="/party?stat=played"
          dataKey="value"
          name="name"
          title="Jeux les plus joués"
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
