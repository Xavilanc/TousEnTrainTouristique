import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/styles/ReviewList.css";

function ReviewsList() {
  const [reviews, setReviews] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/reviews/`)
      .then((response) => response.data)
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="review_list_main_div">
      <table className="review_list_table">
        <thead className="review_list_thead">
          <tr>
            <th className="review_list_th review_list_id">id</th>
            <th className="review_list_th">Utilisateur</th>
            <th className="review_list_th review_list_train">Train</th>
            <th className="review_list_th">Note</th>
            <th className="review_list_th review_list_comment">Commentaire</th>
            <th className="review_list_th">Création</th>
            <th className="review_list_th">Modification</th>
            <th className="review_list_th">Publié</th>
          </tr>
        </thead>
        <tbody>
          {reviews &&
            reviews.map((review) => (
              <tr
                id="review_list_map_tr"
                key={review.review_id}
                onClick={() =>
                  navigate(`/administrateur/reviews/${review.review_id}`)
                }
              >
                <td className="review_list_td">{review.review_id}</td>
                <td className="review_list_td">{review.user_name}</td>
                <td className="review_list_td">{review.train_name}</td>
                <td className="review_list_td">{review.note}</td>
                <td className="review_list_td">{review.comment}</td>
                <td className="review_list_td">{review.created_on}</td>
                <td className="review_list_td">
                  {review.updated_on ? review.updated_on : "null"}
                </td>
                <td className="review_list_td review_list_integer">
                  {review.published === 1 ? "oui" : "non"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReviewsList;
