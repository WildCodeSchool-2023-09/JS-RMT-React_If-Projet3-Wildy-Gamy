import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import connexion from "../../services/connexion";
import profil from "../../assets/icons8-stats-32.png";
import LeaderBoardLine from "./LeaderBoardLine";

function LeaderBoard() {
  const [player, setPlayer] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      toggleMenu();
    }
  };

  const getBestPlayer = async () => {
    try {
      const res = await connexion.get(`/party?stat=timeperplayer`);
      setPlayer(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBestPlayer();
  }, []);

  const alt = "pseudo";

  return (
    <div className="LeaderBoard-container">
      <div className="titleRanking">
        <span className="menuBurgerRanking">
          <div
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
          >
            {isOpen ? (
              <RxCross2 className="cross" />
            ) : (
              <IoIosMenu className="burger" />
            )}
            {isOpen && (
              <div className="menu">
                {player.map((el, index) => (
                  <LeaderBoardLine
                    key={el.id}
                    img={profil}
                    alt={alt}
                    userName={el.name}
                    rang={index}
                  />
                ))}
              </div>
            )}
          </div>
        </span>
        <h2>Ranking</h2>
      </div>
      {player.map((el, index) => (
        <LeaderBoardLine
          key={el.id}
          img={profil}
          alt={alt}
          userName={el.name}
          rang={index}
        />
      ))}
    </div>
  );
}

export default LeaderBoard;
