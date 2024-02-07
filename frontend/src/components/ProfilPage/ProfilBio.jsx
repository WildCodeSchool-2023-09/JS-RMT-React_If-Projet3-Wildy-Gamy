import React from "react";
import PropTypes from "prop-types";

function ProfilBio({ img, username, bio }) {
  return (
    <div className="profilBioContainer">
      <h2 className="titleProfil">Profil</h2>
      <div className="topProfilBioContainer">
        <img className="imageProfile" src={img} alt="profil img" width={40} />
        <h2>{username}</h2>
      </div>
      <textarea className="textAreaBio">{bio}</textarea>
    </div>
  );
}

ProfilBio.propTypes = {
  img: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default ProfilBio;
