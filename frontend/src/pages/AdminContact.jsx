import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/styles/AdminReview.css";
import Header from "../components/Header";

function AdminContact() {
  const params = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    senderName: "",
    subject: "",
    email: "",
    message: "",
    created_on: "",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/contacts/${params.id}`)
      .then((response) => response.data)
      .then((data) => setContact(data[0][0]));
  }, []);

  const deleteMessage = () => {
    if (window.confirm("Voulez-vous vraiment supprimer ce message ?")) {
      axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/message/${params.id}`
      );
      navigate("/administrateur");
    }
  };

  return (
    <div className="Admin_Review_Main_Div">
      <Header />
      <div className="review_details_contact_box">
        <div className="review_details_user_name contact_item">
          {" "}
          Utilisateur:{" "}
          <span className="user_name_span">{contact.senderName}</span>
        </div>
        <div className="review_details_train_name contact_item">
          Mail : <span className="train_name_span">{contact.email}</span>
        </div>
        <div className="review_details_train_name contact_item">
          Subject : <span className="train_name_span">{contact.subject}</span>
        </div>
        <div className="review_details_train_name contact_item">Message :</div>
      </div>
      <div className="contact_text_area">{contact.message}</div>
      <div className="contact_button_box">
        {" "}
        <button
          className="button-form-create2 contact_delete_button"
          type="button"
          onClick={() => navigate("/administrateur")}
        >
          Retour
        </button>
        <button
          className="button-form-create3 contact_delete_button"
          type="button"
          onClick={() => deleteMessage()}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default AdminContact;
