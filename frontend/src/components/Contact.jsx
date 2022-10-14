import "../assets/styles/Contact.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getDate } from "../services/DateManager";

export default function Contact() {
  const [senderName, setSenderName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendMail] = useState({
    senderName: "",
    subject: "",
    email: "",
    message: "",
    created_on: "",
  });

  const [posted, setPosted] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    function sendMessage() {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/contacts`, {
          senderName,
          subject,
          email,
          message,
          created_on: getDate(),
        })
        .catch((error) => console.warn(`Unable to send : ${error.message}`));
      sendMail.senderName = "";
      sendMail.subject = "";
      sendMail.email = "";
      sendMail.message = "";
      sendMail.created_on = getDate();
    }

    e.preventDefault();
    sendMessage();
    setPosted(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  useEffect(() => {
    sendMail.senderName = "";
    sendMail.subject = "";
    sendMail.subject = "";
    sendMail.message = "";
    sendMail.created_on = getDate();
  }, []);

  if (posted === false) {
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
              value={senderName}
              placeholder="Nom et Prénom*"
              onChange={(e) => setSenderName(e.target.value)}
            />
            <input
              className="name"
              type="text"
              id="name"
              value={subject}
              placeholder="Sujet*"
              onChange={(e) => setSubject(e.target.value)}
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

  if (posted === true) {
    return (
      <div>
        <div className="create_review_send">
          Nous avons bien reçu votre message
        </div>
      </div>
    );
  }
}
