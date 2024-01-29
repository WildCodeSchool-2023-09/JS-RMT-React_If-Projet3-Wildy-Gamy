import React, { useState } from "react";
import LeaderBoard from "../components/LeaderBoard/LeaderBoard";
import icon from "../assets/icons8-user-70.png";

function PageComment() {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleCommentInputChange = (e) => {
    setCommentInput(e.target.value);
  };

  const addComment = () => {
    if (commentInput.trim() !== "") {
      setComments([...comments, commentInput]);
      setCommentInput("");
    }
  };

  return (
    <div className="all-page-comment">
      <LeaderBoard />
      <div className="all-page-container-comment">
        <h3 className="name-salon">Salon Tic-Tac-Toe</h3>
        <div className="full-container-comment">
          <div className="name-comment-add">
            <div className="container-page-comment">
              <img className="icon-comment" src={icon} alt="player" />
              <div className="name-comment">
                <h3 className="username-comment">userName</h3>
                <p className="comment-user">
                  {comments.length > 0
                    ? comments[comments.length - 1]
                    : "Aucun commentaire"}
                </p>
              </div>
            </div>
            <input
              className="input-comment"
              type="text"
              placeholder="Ajouter un commentaire..."
              value={commentInput}
              onChange={handleCommentInputChange}
            />
            <button
              className="submit-comment"
              type="button"
              onClick={addComment}
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageComment;
