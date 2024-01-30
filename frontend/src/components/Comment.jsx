import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icons8-user-70.png";

function Comment() {
  return (
    <div className="all-comment">
      <img className="icon-comment" src={icon} alt="icon" />
      <Link to="/commentaires" className="comment-link">
        Accéder au salon Tic-Tac-Toe
      </Link>
      <p className="comment-number">Nombre commentaires</p>
    </div>
  );
}

export default Comment;
