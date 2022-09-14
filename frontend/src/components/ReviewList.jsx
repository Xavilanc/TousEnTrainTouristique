import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/styles/ReviewList.css";

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
      <table className="review_list_table">
        <thead className="review_list_thead">
          <tr>
            <th className="review_list_th review_list_id">id</th>
            <th className="review_list_th">review_user_id</th>
            <th className="review_list_th">review_train_id</th>
            <th className="review_list_th">review_note</th>
            <th className="review_list_th review_list_comment">
              review_comment
            </th>
            <th className="review_list_th">created_on</th>
            <th className="review_list_th">updated_on</th>
            <th className="review_list_th">published</th>
          </tr>
        </thead>
        <tbody>
          {reviews &&
            reviews.map((review) => (
              <tr>
                <td className="review_list_td">{review.id}</td>
                <td className="review_list_td">{review.review_user_id}</td>
                <td className="review_list_td">{review.review_train_id}</td>
                <td className="review_list_td">{review.review_note}</td>
                <td className="review_list_td">{review.review_comment}</td>
                <td className="review_list_td">{review.created_on}</td>
                <td className="review_list_td">{review.updated_on}</td>
                <td className="review_list_td review_list_integer">
                  {review.published}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReviewList;
