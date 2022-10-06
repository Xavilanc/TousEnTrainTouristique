import { useState } from "react";
import ImageManager from "../components/ImageManager";
import AddImage from "../components/AddImage";
import Header from "../components/Header";
import ReviewsList from "../components/ReviewsList";
import TrainList from "../components/TrainList";
import ContactList from "../components/ContactListForAdmin";
import "../assets/styles/Administrator.css";

const administrator = () => {
  const [reviewBool, setReviewBool] = useState(false);
  const [imageBool, setImageBool] = useState(false);
  const [trainBool, setTrainBool] = useState(false);
  const [messageBool, setMessageBool] = useState(false);

  return (
    <div className="review_list_main_div">
      <Header />
      <h2 className="review_list_title">
        Commentaires{" "}
        <button
          type="button"
          className="button-form-create"
          onClick={() => setReviewBool(!reviewBool)}
        >
          {reviewBool ? "Masquer" : "Afficher"}
        </button>
      </h2>
      {reviewBool ? <ReviewsList /> : ""}
      <h2 className="review_list_title">
        Images{" "}
        <button
          type="button"
          className="button-form-create"
          onClick={() => setImageBool(!imageBool)}
        >
          {imageBool ? "Masquer" : "Afficher"}
        </button>
      </h2>
      {imageBool ? (
        <div>
          <ImageManager />
          <AddImage />
        </div>
      ) : (
        ""
      )}
      <h2 className="review_list_title">
        Trains{" "}
        <button
          type="button"
          className="button-form-create"
          onClick={() => setTrainBool(!trainBool)}
        >
          {trainBool ? "Masquer" : "Afficher"}
        </button>
      </h2>
      {trainBool ? <TrainList /> : ""}
      <h2 className="review_list_title">
        Messages{" "}
        <button
          type="button"
          className="button-form-create"
          onClick={() => setMessageBool(!messageBool)}
        >
          {messageBool ? "Masquer" : "Afficher"}
        </button>
      </h2>
      {messageBool ? <ContactList /> : ""}
    </div>
  );
};

export default administrator;
