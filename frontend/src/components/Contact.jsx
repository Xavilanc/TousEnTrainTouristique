import "@assets/styles/Contact.css";
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Votre message a bien été envoyé ${name}!`);
  }

  return (
    <div className="contact1">
      <div className="Contact">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="champs">*champs obligatoires</div>

          <input
            className="name"
            type="text"
            id="name"
            value={name}
            placeholder="Nom et Prénom*"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="email"
            type="email"
            id="email"
            value={email}
            placeholder="Adresse e-mail*"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="message"
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={message}
            placeholder="Votre message*"
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="buttonsContainer">
            <button className="buttonForm" type="submit">
              Envoyer
            </button>
            <button className="buttonForm1" type="submit">
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
