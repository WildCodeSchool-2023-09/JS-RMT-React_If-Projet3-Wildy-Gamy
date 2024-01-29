import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icons8-user-70.png";

function Comment() {
  return (
    <div className="all-comment">
      <img className="icon-comment" src={icon} alt="icon" />
      <Link to="/commentaires">
        <p className="comment-link">Accéder au salon Tic-Tac-Toe</p>
      </Link>
      <p className="comment-number">nombre commentaires</p>
    </div>
  );
}

export default Comment;
