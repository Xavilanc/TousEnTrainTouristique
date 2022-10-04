<<<<<<< HEAD
import React from "react";
import AddImage from "../components/AddImage";
import Header from "../components/Header";
import ContactList from "../components/ContactListForAdmin";
=======
import AddImage from "../components/AddImage";
import Header from "../components/Header";
>>>>>>> dev
import ReviewsList from "../components/ReviewsList";
import TrainList from "../components/TrainList";
import "../assets/styles/Administrator.css";

const administrator = () => {
  return (
    <div>
      <Header />
      <p>Admin Area</p>
      <ReviewsList />
      <AddImage />
<<<<<<< HEAD
      <ContactList />
=======
      <TrainList />
>>>>>>> dev
    </div>
  );
};

export default administrator;
