import { useState, useEffect } from "react";
import Carousel from "../components/carousel/Carousel";
import connexion from "../services/connexion";

function Home() {
  const [data, setData] = useState([]);
  const exportData = async () => {
    try {
      const res = await connexion.get("/games");
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    exportData();
  }, []);

  return (
    <div>
      <Carousel data={data} />
    </div>
  );
}

export default Home;
