// eslint-disable-next-line import/no-unresolved
import logoblanc from "@assets/images/logo-blanc.png";
// eslint-disable-next-line import/no-unresolved
import "@assets/styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header_main_container">
      <Link to="/">
        <img className="header_logo" src={logoblanc} alt="logo du site" />
      </Link>
      <div className="header_links_title_container">
        <div className="header_links_container">
          <div className="header_links">M'inscrire</div>
          <div className="header_links">Me connecter</div>
        </div>
        <div className="header_title">Tous en trains touristiques</div>
      </div>
    </div>
  );
}

export default Header;
