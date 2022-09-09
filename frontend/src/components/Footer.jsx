import { Link } from "react-router-dom";
import "../assets/styles/Footer.css";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__left">Copyright</div>
        <div className="footer__container__middle">Suivez-nous</div>
        <div className="footer__container__right">
          <Link to="/Contact">
            <span className="footer_contact">Contact</span>
          </Link>
        </div>
      </div>
      <div className="footer__container__social">
        <img
          src={instagram}
          alt="instagram"
          className="footer__container__social__instagram"
        />
        <img
          src={twitter}
          alt="twitter"
          className="footer__container__social__twitter"
        />
        <img
          src={facebook}
          alt="facebook"
          className="footer__container__social__facebook"
        />
      </div>
    </div>
  );
}
export default Footer;
