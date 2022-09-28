/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from "react-router-dom";
import React from "react";

function FavoriteItem({ favorite }) {
  const navigate = useNavigate();
  return (
    <div className="favorite_list_box">
      {favorite &&
        favorite.map((item) => (
          <div key={item.id}>
            <div className="favorite_list_main_div">
              <div className="favorite_list_second_div">
                <img
                  className="favorite_list_image"
                  src={Object.values(item.path)[0]}
                  alt={item.name}
                />
                <div>
                  <div className="favorite_item_title">{item.name}</div>
                  <div
                    className="favorite_item_link"
                    onClick={() => navigate(`/train/${item.train_id}`)}
                  >
                    Lire la suite
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default FavoriteItem;
