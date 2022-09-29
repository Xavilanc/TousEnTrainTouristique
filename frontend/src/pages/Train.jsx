/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import CreateReview from "../components/CreateReview";
import TrainActivity from "../components/TrainActivity";
import TrainInformations from "../components/TrainInformations";
import TrainImages from "../components/TrainImages";
import ReviewTrainList from "../components/ReviewTrainList";
import { getDate } from "../services/DateManager";
import "../assets/styles/Train.css";
import favoris from "../assets/images/favoris.png";
import favorisVide from "../assets/images/favoris-vide.png";

function Train() {
  const params = useParams();
  const userId = window.localStorage.getItem("id");
  const token = window.localStorage.getItem("token");

  const [isFavorite, setIsFavorite] = useState(false);
  const getFavorite = () => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/api/trains/${
          params.id
        }/${userId}/favorite`
      )
      .then((response) => {
        response.data.length !== 0 ? setIsFavorite(true) : setIsFavorite(false);
      })
      .catch((err) => console.warn(err));
  };

  useEffect(() => {
    getFavorite();
  }, [isFavorite]);

  const [train, setTrain] = useState(""); // état gérant l'affichage du train, sa description et ses images
  const [activities, setActivities] = useState(""); // état gérant l'affichage des activités de ce même train
  const [reviews, setReviews] = useState(""); // état gérant l'affichage des commentaires liés à ce train
  const [favoriteClass, setFavoriteClass] = useState(
    isFavorite ? "train_favoris_image invisible" : "train_favoris_image"
  ); // état gérant l'affichage de l'image favoris
  const [noFavoriteClass, setNoFavoriteClass] = useState(
    isFavorite ? "train_favoris_image invisible" : "train_favoris_image"
  ); // état gérant l'affichage de l'image non favoris

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

  const addFavorite = () => {
    setFavoriteClass("train_favoris_image");
    setNoFavoriteClass("train_favoris_image invisible");
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/favorites`, {
      user_id: userId,
      train_id: params.id,
      added_on: getDate(),
    });
    setIsFavorite(true);
  };

  const deleteFavorite = () => {
    setFavoriteClass("train_favoris_image invisible");
    setNoFavoriteClass("train_favoris_image");
    axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/api/favorites/${params.id}`
    );
    setIsFavorite(false);
  };

  return (
    <div className="train_main_div">
      <Header />
      {token ? (
        <div className="train_favoris_box">
          {isFavorite && (
            <img
              className={favoriteClass}
              src={favoris}
              onClick={() => deleteFavorite()}
              alt="favoris"
            />
          )}
          {!isFavorite && (
            <img
              className={noFavoriteClass}
              src={favorisVide}
              onClick={() => addFavorite()}
              alt="non favoris"
            />
          )}
        </div>
      ) : (
        ""
      )}
      <div className="train_title_favoris_box">
        <h2 className="train_title">{train.tname}</h2>
      </div>
      <div className="train_image_div">
        <TrainImages images={train.images} />
      </div>
      <h3 className="train_h3_title">Informations</h3>
      <TrainInformations train={train} />
      <h3 className="train_h3_title">Activités</h3>
      <TrainActivity activities={activities.activity} />
      <div className="train_review_title">Commentaires</div>

      <div className="train_review_box">
        {reviews ? <ReviewTrainList reviews={reviews} /> : "Pas de commentaire"}

        {token ? <CreateReview id={params.id} /> : ""}
      </div>
    </div>
  );
}

export default Train;
