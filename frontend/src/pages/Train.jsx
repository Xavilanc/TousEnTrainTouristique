import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CreateReview from "../components/CreateReview";
import TrainActivity from "../components/TrainActivity";
import TrainInformations from "../components/TrainInformations";
import TrainImages from "../components/TrainImages";
import ReviewTrainList from "../components/ReviewTrainList";
import "../assets/styles/Train.css";

// const sampletrain = {
//   tname: "Train des minou",
//   description:
//     "Trait d’union entre plaine et montagne, Suisse et France, le Mont-Blanc Express relie Martigny à Chamonix depuis plus d'un siècle.",
//   description_info:
//     "Embarquez à bord de rames panoramiques pour une traversée magique de la Vallée du Trient, entre rocs et forêts, gorges sauvages et villages alpins authentiques. Savourez des paysages grandioses au cœur d’une nature préservée. La promesse d’une spectaculaire évasion.",
//   activities: [
//     {
//       activity_id: 1,
//       activity_title: "Téléphérique de l'Aiguille du Midi",
//       activity_description:
//         "Découvrez le téléphérique de l'aiguille du midi, accessible depuis la gare de Chamonix. Qui n'a jamais rêvé de vivre une expérience exceptionnelle au coeur de la très haute montagne ? Ne rêvez plus, vivez-la à l'Aiguille du Midi, le plus haut téléphérique de France ! Facile d'accès, un grand parking vous attend à l'entrée de Chamonix.",
//     },
//     {
//       activity_id: 2,
//       activity_title: "Téléphérique du Brévent",
//       activity_description:
//         "Bienvenue au Brévent, face au Mont-Blanc ! Facilement accessible depuis le centre de la station, une télécabine vous conduit en toute sécurité jusqu'à Plan Praz (2000 m).",
//     },
//   ],

//   creat: "2022-09-07T08:50:56.000Z",
//   updat: "2022-09-07T09:50:56.000Z",
//   areaName: "Auvergne-Rhône-Alpes",
//   title: "toto",
//   path: "https://www.zooplus.fr/magazine/wp-content/uploads/2019/06/arriv%C3%A9e-dun-chaton-%C3%A0-la-maison.jpeg",
//   created_on: "2022-09-07T09:50:56.000Z",
//   updated_on: "2022-09-07T09:50:56.000Z",
//   type_id: 1,
//   types: "A la mer",
// };
function Train() {
  const params = useParams();

  const [train, setTrain] = useState("");
  const [activities, setActivities] = useState("");
  const [reviews, setReviews] = useState("");

  const getTrain = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/trains/${params.id}/images`)
      .then((response) => response.data)
      .then((data) => setTrain(data));
  };

  const getActivities = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/api/trains/${params.id}/activities`
      )
      .then((response) => response.data)
      .then((data) => setActivities(data));
  };

  const getReviews = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/api/trains/${params.id}/reviews`
      )
      .then((response) => response.data)
      .then((data) => setReviews(data));
  };

  useEffect(() => {
    getTrain();
  }, []);

  useEffect(() => {
    getActivities();
  }, []);

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className="train_main_div">
      <div className="train_title_favoris_box">
        <h2 className="train_title">{train.tname}</h2>
        <div>favoris</div>
      </div>
      <div className="train_image_div">
        <TrainImages images={train.images} />
      </div>
      <h3 className="train_h3_title">Informations</h3>
      <TrainInformations train={train} />
      <h3 className="train_h3_title">Activitées</h3>
      <TrainActivity activities={activities.activity} />
      <div className="train_review_title">commentaires</div>
      <div className="train_review_box">
        <ReviewTrainList reviews={reviews} />
        <CreateReview />
      </div>
    </div>
  );
}

export default Train;
