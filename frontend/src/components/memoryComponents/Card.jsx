import PropTypes from "prop-types";

import "../../style/MemoryStyle/Card.css";

import cover from "../../../public/imgMemory/cover.webp";

function Card({ card, handleChoice, flipped, disabled }) {
  const handleImageClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  const handleImageKeyPress = (event) => {
    if (!disabled && (event.key === "Enter" || event.key === " ")) {
      handleImageClick();
    }
  };

  return (
    <div className="card" id={`card-${card.id}`}>
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <div
          className="back"
          onClick={handleImageClick}
          onKeyDown={handleImageKeyPress}
          role="button"
          tabIndex={0}
          aria-label="Flip card"
        >
          <img src={cover} alt="card back" />
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    matched: PropTypes.bool.isRequired,
  }).isRequired,
  handleChoice: PropTypes.func.isRequired,
  flipped: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};
