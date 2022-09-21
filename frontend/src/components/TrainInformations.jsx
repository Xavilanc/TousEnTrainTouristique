import "../assets/styles/TrainInformations.css";

function TrainInformations({ train }) {
  return (
    <div>
      <div className="informations_paragraphe">{train.description}</div>
      <div className="informations_paragraphe">{train.description_info}</div>
    </div>
  );
}

export default TrainInformations;
