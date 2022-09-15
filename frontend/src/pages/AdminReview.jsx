import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CreateReview from "@components/CreateReview";
import "../assets/styles/ReviewDetails.css";

function ReviewDetails() {
  const params = useParams();

  const [published, setPublished] = useState(false);
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
  }, [published]);

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

  const deleteReview = () => {
    if (window.confirm("Voulez-vous vraiment supprimer ce commentaire ?")) {
      axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/reviews/${params.id}`
      );
    }
  };

  const handlePublished = () => {
    setPublished(!published);
    if (published === true) {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/api/reviews/${params.id}`, {
          review_user_id: review.user_id,
          review_train_id: review.train_id,
          review_note: review.note,
          review_comment: review.comment,
          created_on: "2022-09-09",
          updated_on: "2022-09-09",
          published: 0,
        })
        .then((response) => {
          console.error(response);
          console.error(response.data);
        });
    } else if (published === false) {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/api/reviews/${params.id}`, {
          review_user_id: review.user_id,
          review_train_id: review.train_id,
          review_note: review.note,
          review_comment: review.comment,
          created_on: "2022-09-09",
          updated_on: "2022-09-09",
          published: 1,
        })
        .then((response) => {
          console.error(response);
          console.error(response.data);
        });
    }
  };

  // eslint-disable-next-line consistent-return
  const handlePublishedButton = () => {
    if (review.published === 0) {
      return "Publier";
    }
    if (review.published === 1) {
      return "Dépublier";
    }
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
          <label htmlFor="note">Note</label>
          <input
            className="review_details_input"
            type="number"
            name="note"
            id="note"
            value={review.note}
            placeholder="note"
            onChange={(e) => setReview({ ...review, note: e.target.value })}
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
          <button type="button" onClick={() => handlePublished()}>
            {handlePublishedButton()}
          </button>
          <input type="submit" value="Modifier" />
          <button type="button" onClick={() => deleteReview()}>
            Supprimer
          </button>
        </div>
      </form>
      <CreateReview />
    </div>
  );
}

export default ReviewDetails;
