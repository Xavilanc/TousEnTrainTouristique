// eslint-disable-next-line import/no-unresolved
import logoblanc from "@assets/images/logo-blanc.png";
// eslint-disable-next-line import/no-unresolved
import { useNavigate, Link } from "react-router-dom";
import "@assets/styles/Header.css";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header_main_container">
      <div className="header_logo">
        <Link to="/">
          <img className="header_logo_img" src={logoblanc} alt="logo du site" />
        </Link>
      </div>
      <div className="header_links_title_container">
        <div className="header_links_container">
          <button
            type="button"
            className="header_links"
            onClick={() => navigate("/creation-de-compte")}
          >
            M'inscrire
          </button>
          <button
            type="button"
            className="header_links"
            onClick={() => navigate("/connexion")}
          >
            Me connecter
          </button>
        </div>
        <div className="header_title">Tous en trains touristiques</div>
      </div>
    </div>
  );
}

export default Header;
