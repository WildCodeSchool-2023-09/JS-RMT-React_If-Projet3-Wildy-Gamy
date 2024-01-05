import { useState } from "react";
import axios from "axios";
import InputContact from "./InputContact";

import "../../style/components/contact.scss";

function Contact() {
  const [formValue, setFormValue] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
    message: "",
  });

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
      const response = await axios.post(
        "http://localhost:3001/envoyer-email",
        formValue
      );

      if (response.status !== 200) {
        console.error("Échec de l'envoi de l'email");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
    }
  };
  return (
    <div className="form-contact-container">
      <h3 className="contact">Nous contacter</h3>
      <div className="top-form-container">
        <form className="form-contact" onSubmit={handleSubmit}>
          <div className="container-name">
            <div className="name">
              <InputContact
                label="nom :"
                name="name"
                type="text"
                onChange={handleChange}
                value={formValue.name}
              />
            </div>
            <div className="surname">
              <InputContact
                label="prénom :"
                name="surname"
                type="text"
                onChange={handleChange}
                value={formValue.surname}
              />
            </div>
          </div>
          <div className="container-email">
            <div className="email">
              <InputContact
                label="email :"
                name="email"
                type="text"
                onChange={handleChange}
                value={formValue.email}
              />
            </div>
            <div className="number">
              <InputContact
                label="numéro (facultatif):"
                name="number"
                type="text"
                onChange={handleChange}
                value={formValue.number}
              />
            </div>
          </div>
          <label>
            <span className="label-text-form-contact">message :</span>
            <textarea
              className="textarea-form-contact"
              name="message"
              onChange={handleChange}
              maxLength={250}
              value={formValue.message}
              required
            />
            <input
              className="form-contact-submit"
              type="submit"
              value="Envoyer"
            />
          </label>
        </form>
      </div>
    </div>
  );
}

export default Contact;
