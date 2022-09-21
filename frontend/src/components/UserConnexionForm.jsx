import React, { useState } from "react";
import "@assets/styles/UserConnexionForm.css";
import { useNavigate } from "react-router-dom";

function UserConnectionForm() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="connect1">
      <div className="connect">
        <h1 className="user">Connexion à mon compte</h1>
        <form>
          <div className="connect_subtitle">*champs obligatoires</div>
          <div className="connect_container">
            <input
              className="connect_password"
              type="text"
              id=";user_mail"
              value={mail}
              placeholder=" e-mail*"
              onChange={(e) => setMail(e.target.value)}
            />
            <input
              className="connect_password"
              type="text"
              id="connect_password"
              value={password}
              placeholder="Mot de passe*"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="MDP"
              onClick={() => navigate("/modification")}
            >
              *mot de passe oublié
            </button>
          </div>
          <div className="buttonsContainer">
            <button className="buttonForm" type="submit">
              Connexion
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
export default UserConnectionForm;
