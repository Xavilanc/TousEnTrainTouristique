import { useState, useEffect } from "react";
import axios from "axios";
import FavoriteItem from "./FavoriteItem";
import "../assets/styles/FavoriteList.css";

function FavoriteList() {
  const [favorite, setFavorite] = useState("");
  const userId = window.localStorage.getItem("id");

  const getFavorite = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/${userId}/favorites`)
      .then((response) => response.data)
      .then((data) => setFavorite(data));
  };

  useEffect(() => {
    getFavorite();
  }, []);

  return (
    <div className="favorite_list_box">
      <h2 className="favorite_list_title">Mes Favoris</h2>
      <FavoriteItem favorite={favorite} />
    </div>
  );
}

export default FavoriteList;
