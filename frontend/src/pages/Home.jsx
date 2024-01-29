import { useState, useEffect } from "react";
import Carousel from "../components/carousel/Carousel";
import connexion from "../services/connexion";
import Contact from "../components/Contact/Contact";
import ListGames from "../components/ListGames";

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
    <div className="home-page-container">
      <div className="carousel-Container">
        <Carousel games={games} />
      </div>
      <div className="home-list-games">
        <ListGames games={games} />
      </div>
      <div className="home-contact-container">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
