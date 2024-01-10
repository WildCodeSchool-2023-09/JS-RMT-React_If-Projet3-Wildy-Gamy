import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InputContact from "./InputContact";
import connexion from "../../services/connexion";

import "../../style/components/contact.scss";

const mail = {
  name: "",
  surname: "",
  email: "",
  number: "",
  message: "",
};

function Contact() {
  const [formValue, setFormValue] = useState(mail);

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
      await connexion.post("/contact", formValue);
      toast.success("Email envoyé avec succès!");
      setFormValue(mail);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      toast.error("Erreur lors de l'envoi de l'email");
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
        <ToastContainer />
      </div>
    </div>
  );
}

export default Contact;
