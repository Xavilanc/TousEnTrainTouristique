import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function ModifyPasswordWithMail() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const { token } = useParams();
  const tokenCorrected = token.split("$").join(".");
  const editPass = (e) => {
    e.preventDefault();
    const password = newPassword;
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/mail/${tokenCorrected}`, {
        password,
      })
      .then((response) => {
        // console.error(response);
        console.warn(response.data);
      })
      .catch((error) => {
        console.warn(error);
        // error.response.status === 404
        //   ? setUserExist(true)
        //   : setUserExist(false);
      });
  };
  return (
    <div className="contact1">
      <div className="Contact">
        <h1 className="createuser_title">Modification de votre mot de passe</h1>
        <form>
          <div className="createuser_subtitle">*champs obligatoires</div>
          <div className="createruser_container">
            <input
              className="createuser_password"
              type="text"
              id="createuser_password"
              value={newPassword}
              placeholder="Nouveau mot de passe*"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              className="createuser_confirm_password"
              type="text"
              id="createuser_confirm_password"
              value={confirmNewPassword}
              placeholder="Confirmez le nouveau mot de passe*"
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </div>
          <div className="buttonsContainer">
            <button
              className="buttonForm"
              type="submit"
              onClick={(e) => editPass(e)}
            >
              Valider
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

export default ModifyPasswordWithMail;
