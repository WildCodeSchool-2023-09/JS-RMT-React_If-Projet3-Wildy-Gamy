import React, { useState, useEffect } from "react";
import LeaderBoard from "../components/LeaderBoard/LeaderBoard";
import icon from "../assets/icons8-user-70.png";
import connexion from "../services/connexion";

function PageComment() {
  const [allComments, setAllComments] = useState([]);
  const [formValue, setFormValue] = useState({ avis: "" });

  const getComments = async () => {
    try {
      const response = await connexion.get("/comments");
      setAllComments(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des commentaires:", error);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await connexion.post("/comments", formValue);
      await getComments();

      setFormValue({ avis: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi du commentaire:", error);
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
              {allComments.map((comment) => (
                <div key={comment.id} className="name-comment">
                  <img className="icon-comment" src={icon} alt="player" />
                  <div className="comment-text">
                    <h3 className="username-comment">username</h3>
                    <p className="comment-user">{comment.avis}</p>
                  </div>
                </div>
              ))}
            </div>
            <form
              onSubmit={handleSubmit}
              aria-label="Formulaire de commentaires"
            >
              <input
                className="input-comment"
                label="comment"
                name="avis"
                type="text"
                onChange={handleChange}
                placeholder="Ajouter un commentaire..."
                value={formValue.avis}
              />
              <button className="submit-comment" type="submit">
                Ajouter
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageComment;
