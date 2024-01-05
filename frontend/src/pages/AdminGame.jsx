import CamenbertChart from "../components/charts/CamenbertChart";
import BarContainer from "../components/charts/BarChart";

function AdminGame() {
  return (
    <div className="adminContainer">
      <h1>Statistiques de jeux</h1>
      <div className="camenbertContainer">
        <CamenbertChart
          url="/party?stat=is_won"
          dataKey="value"
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
          title="Les utilisateurs ayant le plus grand temps de jeux"
        />
      </div>
    </div>
  );
}

export default AdminGame;
