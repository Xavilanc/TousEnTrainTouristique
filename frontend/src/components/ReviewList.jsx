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
            <th className="review_list_th">Utilisateur</th>
            <th className="review_list_th">Train</th>
            <th className="review_list_th">review_note</th>
            <th className="review_list_th review_list_comment">Commentaire</th>
            <th className="review_list_th">Création</th>
            <th className="review_list_th">Modification</th>
            <th className="review_list_th">Publié</th>
          </tr>
        </thead>
        <tbody>
          {reviews &&
            reviews.map((review) => (
              <tr>
                <td className="review_list_td">{review.id}</td>
                <td className="review_list_td">{review.user_name}</td>
                <td className="review_list_td">{review.train_name}</td>
                <td className="review_list_td">{review.review_note}</td>
                <td className="review_list_td">{review.comment}</td>
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
