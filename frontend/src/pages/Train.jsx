import React from "react";
import CreateReview from "../components/CreateReview";
import "../assets/styles/Train.css";

const sampletrain = {
  tname: "Train des chatons",
  description:
    "Trait d’union entre plaine et montagne, Suisse et France, le Mont-Blanc Express relie Martigny à Chamonix depuis plus d'un siècle.",
  description_info:
    "Embarquez à bord de rames panoramiques pour une traversée magique de la Vallée du Trient, entre rocs et forêts, gorges sauvages et villages alpins authentiques. Savourez des paysages grandioses au cœur d’une nature préservée. La promesse d’une spectaculaire évasion.",
  activity_title: "Téléphérique de l'Aiguille du Midi",
  activity_description:
    "Découvrez le téléphérique de l'aiguille du midi, accessible depuis la gare de Chamonix. Qui n'a jamais rêvé de vivre une expérience exceptionnelle au coeur de la très haute montagne ? Ne rêvez plus, vivez-la à l'Aiguille du Midi, le plus haut téléphérique de France ! Facile d'accès, un grand parking vous attend à l'entrée de Chamonix.",
  creat: "2022-09-07T08:50:56.000Z",
  updat: "2022-09-07T09:50:56.000Z",
  areaName: "Auvergne-Rhône-Alpes",
  titl: "toto",
  path: "https://www.zooplus.fr/magazine/wp-content/uploads/2019/06/arriv%C3%A9e-dun-chaton-%C3%A0-la-maison.jpeg",
  created_on: "2022-09-07T09:50:56.000Z",
  updated_on: "2022-09-07T09:50:56.000Z",
  type_id: 1,
  types: "A la mer",
};
function Train() {
  return (
    <div>
      <div className="train_title_favoris_box">
        <h2 className="train_title">{sampletrain.tname}</h2>
        <div>favoris</div>
      </div>
      <div className="train_image_div">
        <img
          className="train_image"
          src={sampletrain.path}
          alt={sampletrain.tname}
        />
      </div>
      <h3 className="train_h3_title">Informations</h3>
      <div className="train_paragraphe">{sampletrain.description}</div>
      <div className="train_paragraphe">{sampletrain.description_info}</div>
      <h3 className="train_h3_title">Activitées</h3>
      <div className="train_activity_title">{sampletrain.activity_title}</div>
      <div className="train_paragraphe">{sampletrain.activity_description}</div>
      <div className="train_review_title">commentaires</div>
      <CreateReview />
    </div>
  );
}

export default Train;
