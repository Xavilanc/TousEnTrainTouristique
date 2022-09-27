import AddImage from "@components/AddImage";
import Header from "@components/Header";
import React from "react";
import ReviewsList from "../components/ReviewsList";

const administrator = () => {
  return (
    <div>
      <Header />
      <p>Admin Area</p>
      <ReviewsList />
      <AddImage />
    </div>
  );
};

export default administrator;
