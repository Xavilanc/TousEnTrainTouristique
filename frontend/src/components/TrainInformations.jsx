import "../assets/styles/TrainInformations.css";

function TrainInformations({ train }) {
  return (
    <div>
      {train.description ? (
        <div className="informations_paragraphe">{train.description}</div>
      ) : (
        <div>Pas d'informations disponible</div>
      )}
      {train.description_info && (
        <div className="informations_paragraphe">{train.description_info}</div>
      )}
    </div>
  );
}

export default TrainInformations;
