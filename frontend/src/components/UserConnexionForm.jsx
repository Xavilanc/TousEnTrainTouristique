/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import "@assets/styles/UserConnexionForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserConnectionForm() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFail, setLoginFail] = useState(false);
  const [passFail, setPassFail] = useState(false);
  const navigate = useNavigate();
  // const inputMail = document.querySelector("#user_mail");
  // const inputPass = document.querySelector("#connect_password");

  const login = (e) => {
    e.preventDefault();

    mail !== "" &&
      password !== "" &&
      setTimeout(() => {
        console.warn(password);

        axios
          .post(`${import.meta.env.VITE_BACKEND_URL}/api/login/`, {
            mail,
            password,
          })
          .then((response) => {
            // console.error(response);
            console.warn(response.data);
            window.localStorage.setItem("token", response.data.token);
            window.localStorage.setItem("mail", response.data.user.mail);
            window.localStorage.setItem("name", response.data.user.name);
            window.localStorage.setItem("id", response.data.user.id);

            navigate("/profil");
          })
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
