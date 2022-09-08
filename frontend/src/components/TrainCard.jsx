import etoilevide from "@assets/images/etoilevide.png";
import etoilejaune from "@assets/images/etoilejaune.png";
import chevron from "@assets/images/chevron.png";

function TrainCard() {
  return (
    <div>
      <img src="https://placekitten.com/350/200" alt="miaou" />
      <div>Titre du train</div>
      <div>
        <div>
          <div>Lire la suite</div>
          <img src={chevron} alt="chevron" />
        </div>
        <div>
          <img src={etoilejaune} alt="étoile jaune" />
          <img src={etoilejaune} alt="étoile jaune" />
          <img src={etoilejaune} alt="étoile jaune" />
          <img src={etoilevide} alt="étoile vide" />
          <img src={etoilevide} alt="étoile vide" />
        </div>
      </div>
    </div>
  );
}

export default TrainCard;
