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
        <div className="footer__container__right">Contact</div>
        {/* <Link to="/Plan du site" className="footer__container__Left__Link">Plan du site</Link> */}
        {/* <Link to="/Suivez-nous" className="footer__container__Middle__Link">Suivez-nous</Link> */}
        {/* <Link to="/Contact" className="footer__container__Right__Link">Contact</Link> */}
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
