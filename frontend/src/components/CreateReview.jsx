import { useState } from "react";
import axios from "axios";
import { Rating } from "react-simple-star-rating";
import "../assets/styles/CreateReview.css";

function CreateReview() {
  const [posted, setPosted] = useState(false);
  const [review, setReview] = useState({
    note: "",
    comment: "",
  });
  const [rating, setRating] = useState(0); // valeur initiale de notation
  const [readOnly, setReadOnly] = useState(false); // pour bloquer les étoiles

  const handleRating = (rate, event) => {
    event.preventDefault();
    setRating(rate);
    setReadOnly(true);
  };

  const postReview = () => {
    setPosted(true);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/reviews/`, {
        review_user_id: 1,
        review_train_id: 1,
        review_note: rating,
        review_comment: review.comment,
        created_on: "2022-09-09",
        updated_on: "2022-09-09",
        published: 0,
      })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
  };

  if (posted === false) {
    return (
      <div>
        <div className="review_details_title_box">
          <div>{review.user_name}</div>
          <div>{review.train_name}</div>
        </div>
        <form
          className="review_details_form"
          onSubmit={(e) => {
            e.preventDefault();
            postReview();
          }}
        >
          <div className="review_details_note">
            <label htmlFor="note">Note</label>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              readonly={readOnly}
              allowHover={false}
            />
          </div>
          <div className="review_details_comment">
            <label htmlFor="comment">Commentaire</label>
            <input
              className="review_details_input"
              type="text"
              name="comment"
              id="comment"
              value={review.comment}
              placeholder="commentaire"
              onChange={(e) =>
                setReview({
                  ...review,
                  comment: e.target.value,
                })
              }
            />
          </div>
          <div className="review_details_buttons_box">
            <input type="submit" value="Envoyer" />
            {posted ? <input type="submit" value="Modifier" /> : ""}
          </div>
        </form>
      </div>
    );
  }
  if (posted === true) {
    return (
      <div>
        <div className="create_review_send">
          Nous avons bien reçu votre commentaire. Il sera validé dans quelques
          heures.
        </div>
      </div>
    );
  }
}

export default CreateReview;
