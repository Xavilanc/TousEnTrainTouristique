import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/TrainCard.css";
import "../assets/styles/Profil.css";

function Profil() {
  const [userInformation, setUserInformation] = useState("");
  const [changePassword, setChangePassword] = useState("");
  const [addTrain, setAddTrain] = useState("");
  const navigate = useNavigate();

  return (
    <div className="profil">
      <div className="profil_header">
        <h2 className="account_title">Mon compte</h2>
        <form>
          <div className="information_container">
            <input
              className="user_information"
              type="text"
              id="user_information"
              value={userInformation}
              placeholder="Mes informations"
              onChange={(e) => setUserInformation(e.target.value)}
            />
            <input
              className="change_password"
              type="text"
              id="change_password"
              value={changePassword}
              placeholder="Changer de mot de passe"
              onChange={(e) => setChangePassword(e.target.value)}
            />
            <input
              className="add_train"
              type="text"
              id="add_train"
              value={addTrain}
              placeholder="Ajouter un train"
              onChange={(e) => setAddTrain(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="buttonsContainer">
        <button
          type="button"
          className="retour_button"
          onClick={() => navigate("/")}
        >
          Retour à l'accueil
        </button>
      </div>
      <div className="buttons_deconnecter">
        <button
          type="button"
          className="deconnecter_button"
          onClick={() => navigate("/connexion")}
        >
          Se déconnecter
        </button>
      </div>
    </div>
  );
}
export default Profil;
