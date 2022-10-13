/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import "@assets/styles/CreateUserForm.css";
import axios from "axios";
import { getDate } from "../services/DateManager";

function CreateUserForm() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [regBool, setRegBool] = useState(false);
  const [equalTest, setEqualTest] = useState(false);
  const [userExist, setUserExist] = useState(false);

  const navigate = useNavigate();

  const validatePassword = () => {
    // test regex: lettre capital, normal,un chiffre, un charactere spécial et 8 de long
    const regExTest =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*.]).{8,}$/;
    setRegBool(!regExTest.test(pass));
    setEqualTest(pass === confirmPassword);
  };

  useEffect(() => {
    validatePassword();
  }, [equalTest, pass, confirmPassword]);

  const sendSignin = (e) => {
    e.preventDefault();
    validatePassword();
    setUserExist(false);

    if (equalTest && userName !== "" && email !== "" && !regBool) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/users/`, {
          name: userName,
          password: pass,
          mail: email,
          user_right: 0,
          created_on: getDate(),
          updated_on: getDate(),
        })
        .then(() => {
          navigate("/connexion");
        })
        .catch((error) =>
          error.response.status === 409
            ? setUserExist(true)
            : setUserExist(false)
        );
    } else {
      console.warn("input error");
    }
  };
  return (
    <div className="contact1">
      <div className="Contact">
        <h1 className="createuser_title">Création de votre compte</h1>
        <form>
          <div className="createuser_subtitle">*champs obligatoires</div>
          <div className="createruser_container">
            <input
              className="createuser_mail"
              type="mail"
              id="createuser_mail"
              value={email}
              placeholder="Adresse e-mail(exemple@mail.fr)*"
              onChange={(e) => setEmail(e.target.value)}
              required="required"
              autoComplete="off"
            />
            <input
              className="createuser_username"
              type="text"
              id="createuser_username"
              value={userName}
              placeholder="Identifiant*"
              onChange={(e) => setUserName(e.target.value)}
              required="required"
              autoComplete="new-password"
            />
            <input
              className="createuser_password"
              type="password"
              id="createuser_password"
              value={pass}
              placeholder="Mot de passe*"
              onChange={(e) => {
                setPass(e.target.value);
              }}
              required="required"
              autoComplete="new-password"
            />
            <p className="passwordRegex">
              Une majuscule, une minuscule, un chiffre, un charactère spécial et
              8 charactères minimum
            </p>
            <input
              className="createuser_confirm_password"
              type="password"
              id="createuser_confirm_password"
              value={confirmPassword}
              placeholder="Confirmez le mot de passe*"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              required="required"
              autoComplete="off"
            />
            {equalTest ? "" : <p>Mot de passe différent</p>}
            {regBool ? <p>Mot de passe ne respectant pas les critères</p> : ""}
            {userExist ? <p>Utilisateur déjà enregistré</p> : ""}
          </div>
          <div className="buttonsContainer">
            <button
              className="buttonForm"
              type="submit"
              onClick={(e) => sendSignin(e)}
            >
              Envoyer
            </button>
            <button className="buttonForm1" type="button">
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUserForm;
