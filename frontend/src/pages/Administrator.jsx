import AddImage from "@components/AddImage";
import Header from "@components/Header";
import React from "react";
import ContactList from "@components/ContactListForAdmin";
import ReviewsList from "../components/ReviewsList";
import "../assets/styles/Administrator.css";

const administrator = () => {
  return (
    <div>
      <Header />
      <p>Admin Area</p>
      <ReviewsList />
      <AddImage />
      <ContactList />
    </div>
  );
};

export default administrator;
