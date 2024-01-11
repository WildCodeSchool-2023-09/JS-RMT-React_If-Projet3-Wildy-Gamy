import Contact from "../components/Contact/Contact";
import ListGames from "../components/ListGames";

function Home() {
  return (
    <div className="container-home">
      <ListGames />
      <Contact />;
    </div>
  );
}

export default Home;
