import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ModifyPassword() {
  const [mail, setMail] = useState("");
  const [userExist, setUserExist] = useState("");
  const [mailSent, setMailSent] = useState("");
  const nav = useNavigate();

  const sendMail = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/mail/`, {
        mail,
      })
      .then((response) => {
        // console.error(response);
        console.warn(response.data);
        setMailSent(true);
        setUserExist(false);
      })
      .catch((error) =>
        error.response.status === 404 ? setUserExist(true) : setUserExist(false)
      );
  };
  return (
    <div className="contact1">
      <div className="Contact">
        <h1 className="createuser_title">Modification de votre mot de passe</h1>
        <form>
          <div className="createuser_subtitle">*champs obligatoires</div>
          <div className="createruser_container">
            <p>Entrez votre mail</p>
            <input
              className="createuser_password"
              type="email"
              id="createuser_password"
              value={mail}
              placeholder="Mail *"
              onChange={(e) => setMail(e.target.value)}
              required
            />
            {userExist ? <p>Utilisateur non existant</p> : ""}
            {mailSent ? <p>Mail envoyé</p> : ""}
          </div>
          <div className="buttonsContainer">
            <button
              className="buttonForm"
              type="submit"
              onClick={(e) => sendMail(e)}
            >
              Valider
            </button>
            <button
              className="buttonForm1"
              type="button"
              onClick={() => nav("/profil")}
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModifyPassword;
