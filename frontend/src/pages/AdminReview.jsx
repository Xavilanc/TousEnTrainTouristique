import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../assets/styles/ReviewDetails.css";

function ReviewDetails() {
  const params = useParams();

  const [review, setReview] = useState({
    user_id: 1,
    train_id: 1,
    note: "",
    comment: "",
    created_on: "2022-07-09",
    updated_on: null,
    published: "",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/reviews/${params.id}`)
      .then((response) => response.data)
      .then((data) => setReview(data));
  }, []);

  const updateReview = () => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/reviews/${params.id}`, {
        review_user_id: review.user_id,
        review_train_id: review.train_id,
        review_note: review.note,
        review_comment: review.comment,
        created_on: "2022-09-19",
        updated_on: "2022-09-09",
        published: review.published,
      })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
  };
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
          updateReview();
        }}
      >
        <div className="review_details_note">
          <input
            className="review_details_input"
            type="number"
            value={review.note}
            placeholder="note"
            onChange={(e) => setReview({ ...review, note: e.target.value })}
          />
        </div>
        <div className="review_details_comment">
          <input
            className="review_details_input"
            type="text"
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
          <button type="button">Publier</button>
          <input type="submit" value="Modifier" />
          <button type="button">Supprimer</button>
        </div>
      </form>
    </div>
  );
}

export default ReviewDetails;
