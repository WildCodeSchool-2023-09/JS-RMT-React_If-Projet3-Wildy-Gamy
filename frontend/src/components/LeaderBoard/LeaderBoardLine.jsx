import PropTypes from "prop-types";

function LeaderBoardLine({ img, alt, userName, rang }) {
  const formatRang = (r) => {
    if (r === 0) {
      return `${r + 1}ER`;
    }
    if (r === 1) {
      return `${r + 1}EME`;
    }
    return `${r + 1}EME`;
  };

  return (
    <figure className="leaderBoardLineContainer">
      <img src={img} alt={alt} />
      <figcaption className="leaderBoardLineContent">
        <p>{userName}</p>
      </figcaption>
      <div className="rangConatiner">
        <p>{formatRang(rang)}</p>
      </div>
    </figure>
  );
}

LeaderBoardLine.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  rang: PropTypes.number.isRequired,
}.isRequired;

export default LeaderBoardLine;
