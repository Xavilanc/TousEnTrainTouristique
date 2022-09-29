import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "../assets/styles/NotFoundPage.css";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <h1 className="oups"> Oups cette page n'existe pas</h1>

      <h2 className="error"> ! -- ERROR 404 --</h2>
      <div className="buttons_retour">
        <button type="button" className="retour" onClick={() => navigate("/")}>
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
