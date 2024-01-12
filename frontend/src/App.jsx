import { Outlet } from "react-router-dom";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";

function App() {
  return (
    <div>
      <LeaderBoard />
      <Outlet />
    </div>
  );
}

export default App;
