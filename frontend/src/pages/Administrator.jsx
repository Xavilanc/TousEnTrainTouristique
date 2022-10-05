import React from "react";
import ImageManager from "../components/ImageManager";
import AddImage from "../components/AddImage";
import Header from "../components/Header";
import ReviewsList from "../components/ReviewsList";
import TrainList from "../components/TrainList";
import ContactList from "../components/ContactListForAdmin";
import "../assets/styles/Administrator.css";

const administrator = () => {
  return (
    <div>
      <Header />
      <p>Admin Area</p>
      <ReviewsList />
      <ImageManager />
      <AddImage />
      <TrainList />
      <ContactList />
    </div>
  );
};

export default administrator;
