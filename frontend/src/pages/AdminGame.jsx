import CamenbertChart from "../components/charts/CamenbertChat";

function AdminGame() {
  return (
    <div>
      <h1>adminGame</h1>
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
  );
}

export default AdminGame;
