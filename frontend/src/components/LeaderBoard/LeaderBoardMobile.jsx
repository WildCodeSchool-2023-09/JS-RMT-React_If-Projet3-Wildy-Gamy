import { useState, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import PropTypes from "prop-types";
import LeaderBoardLine from "./LeaderBoardLine";

function LeaderBoardMobile({ player, profil, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.backgroundColor = "#383a40";
    } else {
      document.body.style.backgroundColor = "";
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      toggleMenu();
    }
  };

  return (
    <div className="menuBurguerRankingContainer">
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
    </div>
  );
}

LeaderBoardMobile.propTypes = {
  player: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      rang: PropTypes.number.isRequired,
    })
  ).isRequired,
  profil: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LeaderBoardMobile;
