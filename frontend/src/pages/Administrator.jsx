import AddImage from "@components/AddImage";
import React from "react";
import ReviewsList from "../components/ReviewsList";
import "../assets/styles/Administrator.css";

const administrator = () => {
  return (
    <div className="administrator_main_div">
      <ReviewsList />
      <AddImage />
    </div>
  );
};

export default administrator;
