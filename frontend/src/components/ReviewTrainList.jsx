import { Rating } from "react-simple-star-rating";
import "../assets/styles/ReviewTrainList.css";

function ReviewTrainList({ reviews }) {
  const readOnly = true;
  return (
    <div>
      {reviews &&
        reviews.map((review) => (
          <div key={review.review_id}>
            <div className="review_train_list_rating">
              <Rating
                ratingValue={review.note}
                readonly={readOnly}
                className="react-simple-star-rating"
              />
            </div>
            <div className="review_train_list_username">{review.user_name}</div>
            <div className="review_train_list_comment">{review.comment}</div>
          </div>
        ))}
    </div>
  );
}

export default ReviewTrainList;
