import { useState } from "react";
import axios from "axios";

function CreateReview() {
  const [posted, setPosted] = useState(false);
  const [review, setReview] = useState({
    note: "",
    comment: "",
  });

  const postReview = () => {
    setPosted(true);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/reviews/`, {
        review_user_id: 1,
        review_train_id: 1,
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
        <div>Nous avons bien reçu votre commentaire</div>
      </div>
    );
  }
}

export default CreateReview;
