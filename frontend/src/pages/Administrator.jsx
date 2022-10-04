import React from "react";
import AddImage from "../components/AddImage";
import Header from "../components/Header";
import ImageList from "../components/ImageList";
import ReviewsList from "../components/ReviewsList";
import "../assets/styles/Administrator.css";
import ImageListTrain from "../components/ImageListTrain";

const administrator = () => {
  return (
    <div>
      <Header />
      <p>Admin Area</p>
      <ReviewsList />
      <ImageList />
      <ImageListTrain />
      <AddImage />
    </div>
  );
};

export default administrator;
