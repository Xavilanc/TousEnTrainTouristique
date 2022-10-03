import AddImage from "@components/AddImage";
import Header from "@components/Header";
import React from "react";
import ReviewsList from "../components/ReviewsList";
import "../assets/styles/Administrator.css";
import ImageList from "@components/ImageList";

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
