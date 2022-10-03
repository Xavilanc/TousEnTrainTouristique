import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { transDate } from "../services/DateManager";

function ContactList() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  const getMessages = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/contacts/`)
      .then((response) => response.data)
      .then((data) => setMessages(data));
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="review_list_main_div">
      <h2 className="review_list_title">Liste des messages</h2>
      <div className="review_list_button_box">
        <button type="button" onClick={() => getMessages()}>
          Messages reçus
        </button>
      </div>
      <table className="review_list_table">
        <thead className="review_list_thead">
          <tr>
            <th className="review_list_th review_list_id">id</th>
            <th className="review_list_th">Utilisateur</th>
            <th className="review_list_th review_list_train">Sujet</th>
            <th className="review_list_th">Email</th>
            <th className="review_list_th review_list_comment">Message</th>
            <th className="review_list_th">Création</th>
          </tr>
        </thead>
        <tbody>
          {messages &&
            messages.map((message) => (
              <tr
                id="review_list_map_tr"
                key={message.id}
                onClick={() =>
                  navigate(`/administrateur/contacts/${message.id}`)
                }
              >
                <td className="review_list_td">{message.id}</td>
                <td className="review_list_td">{message.senderName}</td>
                <td className="review_list_td">{message.subject}</td>
                <td className="review_list_td">{message.email}</td>
                <td className="review_list_td">{message.message}</td>
                <td className="review_list_td">
                  {transDate(message.created_on)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
