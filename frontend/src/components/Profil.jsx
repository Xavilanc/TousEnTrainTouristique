import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/styles/Profil.css";
import jwtDecode from "jwt-decode";
import FavoriteList from "./FavoriteList";
import avatarDefault from "../assets/images/avatar-default.png";

/*  image avatar par défault */
const sampleAvatar = {
  title: "sample avatar",
  path: avatarDefault,
};

function Profil() {
  const [userName, setUserName] = useState("");
  const [token, setToken] = useState("");
  const [userRight, setUserRight] = useState(0);
  const [avatar, setAvatar] = useState(sampleAvatar);
  const navigate = useNavigate();
  const userId = window.localStorage.getItem("id");

  useEffect(() => {
    setUserName(window.localStorage.getItem("name"));
    setToken(window.localStorage.getItem("token"));

    if (token) {
      const decoded = jwtDecode(token);
      setUserRight(decoded.userRight);
    }
  }, [token]);

  const getAvatar = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/imageavatars/${userId}`)
      .then((response) => response.data)
      .then((data) => setAvatar(data));
  };

  useEffect(() => {
    getAvatar();
  }, []);

  // Efface les données stocker en local pour déconnecter
  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("mail");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("id");
    navigate("/");
  };

  return (
    <div className="profil">
      <h2 className="account_title">Mon compte</h2>
      <div className="profil_header">
        <img className="profil_avatar" src={avatar.path} alt={avatar.title} />
        <h3>{userName}</h3>
        <p>{parseInt(userRight, 2) === 0 ? "Utilisateur" : "Administrateur"}</p>
      </div>
      <div className="information_container">
        <input
          className="user_information"
          type="button"
          id="user_information"
          defaultValue="Mes informations"
        />
        <input
          className="change_password"
          type="button"
          id="change_password"
          defaultValue="Changer de mot de passe"
        />
        <input
          className="add_train"
          type="button"
          id="add_train"
          defaultValue="Ajouter un train"
        />
      </div>
      <FavoriteList />
      <div className="buttons-container">
        <button
          type="button"
          className="buttonForm4"
          onClick={() => navigate("/")}
        >
          Retour à l'accueil
        </button>
        <button type="button" className="buttonForm3" onClick={() => logout()}>
          Se déconnecter
        </button>
      </div>
    </div>
  );
}
export default Profil;
