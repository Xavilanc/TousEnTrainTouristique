import React from "react";
import AddImage from "../components/AddImage";
import Header from "../components/Header";
import ImageList from "../components/ImageList";
import ReviewsList from "../components/ReviewsList";
import "../assets/styles/Administrator.css";

const administrator = () => {
  return (
    <div>
      <Header />
      <p>Admin Area</p>
      <ReviewsList />
      <ImageList />
      <AddImage />
    </div>
  );
};

export default administrator;
