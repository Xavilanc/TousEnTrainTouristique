import { useEffect, useState } from "react";
import axios from "axios";

function ReviewList() {
  const [reviews, setReviews] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/reviews`)
      .then((response) => response.data)
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>review_user_id</th>
            <th>review_train_id</th>
            <th>review_note</th>
            <th>review_comment</th>
            <th>created_on</th>
            <th>updated_on</th>
            <th>published</th>
          </tr>
        </thead>
        <tbody>
          {reviews &&
            reviews.map((review) => (
              <tr>
                <td>{review.id}</td>
                <td>{review.review_user_id}</td>
                <td>{review.review_train_id}</td>
                <td>{review.review_note}</td>
                <td>{review.review_comment}</td>
                <td>{review.created_on}</td>
                <td>{review.updated_on}</td>
                <td>{review.published}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReviewList;
