import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import axios from "axios";
import "../assets/styles/AdminReview.css";
import Header from "@components/Header";
import { getDate, transDate } from "../services/DateManager";

function ReviewDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const readOnly = true;

  const [published, setPublished] = useState(false);
  const [review, setReview] = useState({
    user_id: 1,
    train_id: 1,
    note: "",
    comment: "",
    created_on: "",
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
        updated_on: getDate(),
        published: review.published,
      })
      .then((response) => {
        console.error(response);
        console.error(response.data);
      });
    navigate("/administrateur");
  };

  const deleteReview = () => {
    if (window.confirm("Voulez-vous vraiment supprimer ce commentaire ?")) {
      axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/reviews/${params.id}`
      );
      navigate("/administrateur");
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
          created_on: transDate(review.created_on),
          updated_on: getDate(),
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
          created_on: transDate(review.created_on),
          updated_on: getDate(),
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
    <div className="Admin_Review_Main_Div">
      <Header />
      <div className="review_details_title_box">
        <div className="review_details_user_name">
          {" "}
          Utilisateur:{" "}
          <span className="user_name_span">{review.user_name}</span>
        </div>
        <div className="review_details_train_name">
          Train : <span className="train_name_span">{review.train_name}</span>
        </div>
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
          <Rating
            ratingValue={review.note}
            readonly={readOnly}
            className="react-simple-star-rating"
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
    </div>
  );
}

export default ReviewDetails;
