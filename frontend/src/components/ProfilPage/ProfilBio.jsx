import React from "react";
import PropTypes from "prop-types";

function ProfilBio({ img, username, bio }) {
  return (
    <div className="profilbioContainer">
      <h2>Profil</h2>
      <div className="toprofilbioContainer">
        <img src={img} alt="profil img" />
        <h2>{username}</h2>
      </div>
      <div className="bottomprofilbioContainer">
        <textarea>{bio}</textarea>
      </div>
    </div>
  );
}

ProfilBio.propTypes = {
  img: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default ProfilBio;
