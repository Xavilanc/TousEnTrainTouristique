import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import chevron from "@assets/images/chevron.png";
import "@assets/styles/TrainCard.css";

function TrainCard({ src, title }) {
  const [rating, setRating] = useState(0); // valeur initiale de notation

  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <div className="traincard_main_div">
      <div className="traincard_background_white_div">
        <img className="traincard_train_image" src={src} alt={title} />
        <div className="traincard_train_title">{title}</div>
        <div className="traincard_subtitle_container">
          <div className="traincard_subtitle">Lire la suite</div>
          <img className="traincard_chevron" src={chevron} alt="chevron" />
        </div>
        <div className="traincard_notation_container">
          <Rating onClick={handleRating} ratingValue={rating} />
        </div>
      </div>
    </div>
  );
}

export default TrainCard;
