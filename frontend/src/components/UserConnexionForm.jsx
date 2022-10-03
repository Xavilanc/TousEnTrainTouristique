/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import "../assets/styles/UserConnexionForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserConnectionForm() {
  const [mail, setMail] = useState(""); // état récupérant la saisie du mail
  const [password, setPassword] = useState(""); // état récupérant la saisie du mot de passe

  const [loginFail, setLoginFail] = useState(false); // états qui affichent un message en cas
  const [passFail, setPassFail] = useState(false); // d'erreur de saisie par l'utilisateur

  const navigate = useNavigate(); // hook de react-router-dom utilisé pour la redirection vers la page profil
  // const inputMail = document.querySelector("#user_mail");
  // const inputPass = document.querySelector("#connect_password");

  const login = (e) => {
    e.preventDefault();

    mail !== "" &&
      password !== "" &&
      setTimeout(() => {
        axios
          .post(`${import.meta.env.VITE_BACKEND_URL}/api/login/`, {
            mail,
            password,
          })
          // stockage dans le window.localStorage de données utiles
          // au fonctionnalités "utilisateur connecté"
          .then((response) => response.data)
          .then((data) => {
            // console.error(response);
            axios.defaults.headers.Authorization = `Bearer ${data.token}`;
            window.localStorage.setItem("token", data.token);
            window.localStorage.setItem("mail", data.user.mail);
            window.localStorage.setItem("name", data.user.name);
            window.localStorage.setItem("id", data.user.id);
            console.warn(data);
            // puis redirection vers la page profil
            // navigate("/profil");
          })
          .then(() => navigate("/profil"))
          // si erreur, un message précise à l'utilisateur de vérifier sa saisie
          .catch((error) => {
            console.error(mail);
            error.response.status === 404
              ? setLoginFail(true)
              : setLoginFail(false);
            error.response.status === 401
              ? setPassFail(true)
              : setPassFail(false);
          });
      }, 100);
  };

  return (
    <div className="connect1">
      <div className="connect">
        <h1 className="user">Connexion à mon compte</h1>
        <form>
          <div className="connect_subtitle">*champs obligatoires</div>
          <div className="connect_container">
            <input
              className="connect_password"
              type="email"
              id="user_mail"
              value={mail}
              placeholder=" e-mail*"
              onChange={(e) => setMail(e.target.value)}
              autoComplete="username"
            />
            <input
              className="connect_password"
              type="password"
              id="connect_password"
              value={password}
              placeholder="Mot de passe*"
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              type="button"
              className="MDP"
              onClick={() => navigate("/modification")}
            >
              mot de passe oublié
            </button>
            {loginFail ? <p>Verifiez votre mail</p> : ""}
            {passFail ? <p>Verifiez votre mot de passe</p> : ""}
          </div>
          <div className="connect_button_container">
            <button
              type="button"
              className="buttonForm"
              onClick={(e) => login(e)}
            >
              Connexion
            </button>
            <button
              type="button"
              className="buttonForm1"
              onClick={() => navigate("/")}
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default UserConnectionForm;
