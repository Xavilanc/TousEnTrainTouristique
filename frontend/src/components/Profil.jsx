import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/TrainCard.css";
import "../assets/styles/Profil.css";
import jwtDecode from "jwt-decode";

function Profil() {
  const [userName, setUserName] = useState("");
  const [token, setToken] = useState("");
  const [userRight, setUserRight] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    setUserName(window.localStorage.getItem("name"));
    setToken(window.localStorage.getItem("token"));

    if (token) {
      const decoded = jwtDecode(token);
      setUserRight(decoded.userRight);
    }
  }, [token]);

  // Efface les données stocker en local pour déconnecter
  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("mail");
    window.localStorage.removeItem("name");
    navigate("/connexion");
  };

  return (
    <div className="profil">
      <div className="profil_header">
        <form>
          <h2 className="account_title">Mon compte</h2>
          <h3>{userName}</h3>
          <p>
            {parseInt(userRight, 2) === 0 ? "Utilisateur" : "Administrateur"}
          </p>
          <div className="information_container">
            <input
              className="user_information"
              type="button"
              id="user_information"
              value="Mes informations"
            />
            <input
              className="change_password"
              type="button"
              id="change_password"
              value="Changer de mot de passe"
            />
            <input
              className="add_train"
              type="text"
              id="add_train"
              value="Ajouter un train"
              // placeholder="Ajouter un train"
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
          onClick={() => logout()}
        >
          Se déconnecter
        </button>
      </div>
    </div>
  );
}
export default Profil;
