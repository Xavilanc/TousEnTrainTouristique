import React from "react";
import AddImage from "../components/AddImage";
import Header from "../components/Header";
import ImageList from "../components/ImageListAvatar";
import ReviewsList from "../components/ReviewsList";
import TrainList from "../components/TrainList";
import "../assets/styles/Administrator.css";
import ImageListTrain from "../components/ImageListTrain";
import ImageManager from "@components/ImageManager";

const administrator = () => {
  return (
    <div>
      <Header />
      <p>Admin Area</p>
      <ReviewsList />
      <ImageManager />
      <AddImage />
      <TrainList />
    </div>
  );
};

export default administrator;
