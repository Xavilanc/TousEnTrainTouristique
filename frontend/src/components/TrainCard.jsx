import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import chevron from "../assets/images/chevron.png";
import "../assets/styles/TrainCard.css";

function TrainCard({ src, title, id }) {
  const [readOnly] = useState(true); // pour bloquer les étoiles
  const [note, setNote] = useState(""); // note moyenne d'un train
  const nav = useNavigate();

  const getNote = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/reviews/notes/${id}`)
      .then((response) => response.data)
      .then((data) => setNote(data.note));
  };

  useEffect(() => {
    getNote();
  }, []);

  return (
    <div className="traincard_main_div">
      <div className="traincard_background_white_div">
        <img className="traincard_train_image" src={src} alt={title} />
        <div className="traincard_train_title">{title}</div>
        <button
          type="button"
          className="traincard_subtitle"
          onClick={() => nav(`/train/${id}`)}
        >
          <img className="traincard_chevron" src={chevron} alt="chevron" />
          Lire la suite
        </button>
        <div className="traincard_notation_container">
          <Rating ratingValue={note} initialValue={0} readonly={readOnly} />
        </div>
      </div>
    </div>
  );
}

export default TrainCard;
