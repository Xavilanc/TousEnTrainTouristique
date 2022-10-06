import Header from "@components/Header";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDate } from "../services/DateManager";

function EditAccount() {
  const [name, setName] = useState(window.localStorage.getItem("name"));
  const [mail, setMail] = useState(window.localStorage.getItem("mail"));

  const navigate = useNavigate();

  const userId = window.localStorage.getItem("id");

  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("mail");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("id");
    delete axios.defaults.headers.Authorization;
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

  const handleClick = (e) => {
    e.preventDefault();
    const updatedOn = getDate();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/users/${userId}`, {
        name,
        mail,
        updated_on: updatedOn,
      })
      .then(window.localStorage.setItem("name", name))
      .then(window.localStorage.setItem("mail", mail))
      .then(navigate("/profil"));
  };
  return (
    <div>
      <Header />
      <h2 className="account_title">Mon compte :</h2>
      {name && (
        <form>
          <h3>Mon nom :</h3>
          <input
            type="text"
            value={name || ""}
            className="edit_user"
            onChange={(e) => setName(e.target.value)}
          />
          <h3>Mon mail :</h3>
          <input
            type="text"
            value={mail || ""}
            className="edit_user"
            onChange={(e) => setMail(e.target.value)}
          />

          <input
            type="onsubmit"
            defaultValue="Modifier"
            className="user_information"
            onClick={(e) => handleClick(e)}
          />
          <input
            type="button"
            defaultValue="Retour"
            className="user_information"
            onClick={() => navigate("/profil")}
          />
          <input
            className="delete_account"
            type="button"
            id="del_account"
            defaultValue="Effacer mon compte"
            onClick={(e) => handleDelete(e)}
          />
        </form>
      )}
    </div>
  );
}

export default EditAccount;
