/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import ImageList from "./ImageListAvatar";
import ImageListTrain from "./ImageListTrain";
import "../assets/styles/ImageList.css";

function ImageManager() {
  const [avatarBool, setAvatarBool] = useState(false);
  const [trainBool, setTrainBool] = useState(false);
  const handleAvatar = (e) => {
    e.preventDefault();
    avatarBool ? setAvatarBool(false) : setAvatarBool(true);
    setTrainBool(false);
  };
  const handleTrain = (e) => {
    e.preventDefault();
    trainBool ? setTrainBool(false) : setTrainBool(true);
    setAvatarBool(false);
  };
  return (
    <div className="imageManager">
      <h2>ImageManager</h2>
      <button
        type="button"
        onClick={(e) => handleAvatar(e)}
        className="btn btn-success"
      >
        Avatar
      </button>
      <button
        type="button"
        onClick={(e) => handleTrain(e)}
        className="btn btn-success"
      >
        Train
      </button>
      {trainBool && <ImageListTrain />}
      {avatarBool && <ImageList />}
    </div>
  );
}

export default ImageManager;
