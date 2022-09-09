import React, { useState } from "react";
import "@assets/styles/CreateUserForm.css";

function CreateUserForm() {
  const [mail, setMail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="contact1">
      <div className="Contact">
        <h1 className="createuser_title">Création de votre compte</h1>
        <form>
          <div className="createuser_subtitle">*champs obligatoires</div>
          <div className="createruser_container">
            <input
              className="createuser_mail"
              type="text"
              id=";createuser_mail"
              value={mail}
              placeholder="Adresse e-mail(exemple@mail.fr*"
              onChange={(e) => setMail(e.target.value)}
            />
            <input
              className="createuser_username"
              type="text"
              id="createuser_username"
              value={userName}
              placeholder="Identifiant*"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              className="createuser_password"
              type="text"
              id="createuser_password"
              value={password}
              placeholder="Mot de passe*"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="createuser_confirm_password"
              type="text"
              id="createuser_confirm_password"
              value={confirmPassword}
              placeholder="Confirmez le mot de passe*"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
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

export default CreateUserForm;
