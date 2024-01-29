import { useState, useEffect } from "react";
import Carousel from "../components/carousel/Carousel";
import connexion from "../services/connexion";
import Contact from "../components/Contact/Contact";
import ListGames from "../components/ListGames";
import Comment from "../components/Comment";

function Home() {
  const [games, setData] = useState([]);
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
      <Carousel games={games} />
      <ListGames games={games} />
      <Comment />
      <Contact />
    </div>
  );
}

export default Home;
