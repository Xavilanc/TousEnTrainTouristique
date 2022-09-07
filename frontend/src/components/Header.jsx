import logoblanc from "@assets/logo-blanc.png"
import "@components/styles/Header.css"

function Header() {
  return (
    <div className="header_main_container">
      <img className="header_logo" src={logoblanc} alt="logo du site" />
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
