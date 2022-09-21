import React, { useState } from "react";

function ModifyPassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

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
              value={oldPassword}
              placeholder="Ancien mot de passe*"
              onChange={(e) => setOldPassword(e.target.value)}
            />
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
            <button className="buttonForm" type="submit">
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

export default ModifyPassword;
