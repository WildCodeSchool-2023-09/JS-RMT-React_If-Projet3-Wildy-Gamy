import { useState, useEffect } from "react";
import Carousel from "../components/carousel/Carousel";
import connexion from "../services/connexion";
import Contact from "../components/Contact/Contact";
import ListGames from "../components/ListGames";
import Comment from "../components/Comment";
import Header from "../components/header/Header";
import ProfilContainer from "../components/profilContainer/Profile";

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
      <Header />
      <div className="carousel-Container">
        <Carousel games={games} />
        <div>
          <ProfilContainer />
        </div>
      </div>
      <div className="home-list-games">
        <ListGames games={games} />
      </div>
      <Comment />
      <div className="home-contact-container">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
