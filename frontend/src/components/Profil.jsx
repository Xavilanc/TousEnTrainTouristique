/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/styles/Profil.css";
import jwtDecode from "jwt-decode";
import FavoriteList from "./FavoriteList";
import AuthContext from "../contexts/AuthContext";
import AdminContext from "../contexts/AdminContext";
import avatarDefault from "../assets/images/avatar-default.png";
import pencil from "../assets/images/pencil.png";

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
  const { setIsAuthenticated } = useContext(AuthContext);
  const { setIsAdmin } = useContext(AdminContext);

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

  // Efface les données stockées en local lors de la déconnection
  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("mail");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("id");
    delete axios.defaults.headers.Authorization;
    setIsAuthenticated(false);
    setIsAdmin(0);
    navigate("/");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm("Voulez-vous vraiment supprimer votre compte?")) {
      axios
        .delete(`${import.meta.env.VITE_BACKEND_URL}/api/users/${userId}`)
        .then(logout());
    }
  };

  return (
    <div className="profil">
      <h2 className="account_title">Mon compte</h2>
      <div className="profil_header">
        <div className="profil_avatar_box" onClick={() => navigate("/avatar")}>
          <img
            className="profil_avatar"
            src={avatar.path ? avatar.path : sampleAvatar.path}
            alt="avatar"
          />
          <img className="avatar_pencil_icon" src={pencil} alt="" />
        </div>

        <h3>{userName}</h3>
        <p>{parseInt(userRight, 2) === 0 ? "Utilisateur" : "Administrateur"}</p>
      </div>
      <div className="information_container">
        {/* s'affiche uniquement pour les administrateurs */}
        {parseInt(userRight, 2) === 1 ? (
          <input
            className="user_information"
            type="button"
            id="user_information"
            defaultValue="Administration"
            onClick={() => navigate("/administrateur")}
          />
        ) : (
          ""
        )}
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
          onClick={() => navigate("/modification")}
        />
        <input
          className="add_train"
          type="button"
          id="add_train"
          defaultValue="Ajouter un train"
          onClick={() => navigate("/creation-de-train")}
        />
        <input
          className="delete_account"
          type="button"
          id="del_account"
          defaultValue="Effacer mon compte"
          onClick={(e) => handleDelete(e)}
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
