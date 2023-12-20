import { useLoaderData } from "react-router-dom";
import CamenbertChart from "../../components/charts/CamenbertChat";

function AdminGame() {
  const data = useLoaderData();

  const filter = (datas) => {
    let firstGame = 0;
    let secondGame = 0;
    let thirdGame = 0;

    for (let i = 0; i < datas.length; i += 1) {
      if (datas[i].game_id === 1) {
        firstGame += 1;
      } else if (datas[i].game_id === 2) {
        secondGame += 1;
      } else if (datas[i].game_id === 3) {
        thirdGame += 1;
      }
    }

    const finalArray = [
      { game_id: 1, value: firstGame },
      { game_id: 2, value: secondGame },
      { game_id: 3, value: thirdGame },
    ];
    return finalArray;
  };

  const state = filter(data);

  return (
    <div>
      <h1>adminGame</h1>
      <CamenbertChart data={state} />
    </div>
  );
}

export default AdminGame;
