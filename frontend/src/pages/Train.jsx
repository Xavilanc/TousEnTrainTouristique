import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import CreateReview from "../components/CreateReview";
import TrainActivity from "../components/TrainActivity";
import TrainInformations from "../components/TrainInformations";
import TrainImages from "../components/TrainImages";
import ReviewTrainList from "../components/ReviewTrainList";
import "../assets/styles/Train.css";
import favoris from "../assets/images/favoris.png";
import favorisVide from "../assets/images/favoris-vide.png";

function Train() {
  const params = useParams();

  const [train, setTrain] = useState(""); // état gérant l'affichage du train, sa description et ses images
  const [activities, setActivities] = useState(""); // état gérant l'affichage des activités de ce même train
  const [reviews, setReviews] = useState(""); // état gérant l'affichage des commentaires liés à ce train
  const [favoriteClass, setFavoriteClass] = useState(
    "train_favoris_image invisible"
  ); // état gérant l'affichage de l'image favoris
  const [noFavoriteClass, setNoFavoriteClass] = useState("train_favoris_image"); // état gérant l'affichage de l'image non favoris
  const [favorite, setFavorite] = useState(false); // état vérifiant si

  const handleFavorite = () => {
    if (favorite === false) {
      setFavoriteClass("train_favoris_image");
      setNoFavoriteClass("train_favoris_image invisible");
      setFavorite(true);
    } else {
      setFavoriteClass("train_favoris_image invisible");
      setNoFavoriteClass("train_favoris_image");
      setFavorite(false);
    }
  };

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
      <Header />
      <div
        className="train_favoris_box"
        onClick={() => {}}
        role="button"
        tabIndex={0}
        onKeyDown={handleFavorite()}
      >
        <img className={favoriteClass} src={favoris} alt="favoris" />
        <img className={noFavoriteClass} src={favorisVide} alt="non favoris" />
      </div>
      <div className="train_title_favoris_box">
        <h2 className="train_title">{train.tname}</h2>
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
        <CreateReview id={params.id} />
      </div>
    </div>
  );
}

export default Train;
