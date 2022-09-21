import AddImage from "@components/AddImage";
import React from "react";
import ReviewsList from "../components/ReviewsList";

const administrator = () => {
  return (
    <div>
      <p>Admin Area</p>
      <ReviewsList />
      <AddImage />
    </div>
  );
};

export default administrator;
