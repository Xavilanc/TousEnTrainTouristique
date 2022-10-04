import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/styles/ReviewList.css";
import { transDate } from "../services/DateManager";

function TrainList() {
  const [trains, setTrains] = useState([]);

  const navigate = useNavigate();

  const getTrains = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/trains/`)
      .then((response) => response.data)
      .then((data) => setTrains(data));
  };

  useEffect(() => {
    getTrains();
  }, []);

  return (
    <div className="review_list_main_div">
      <h2 className="review_list_title">Liste des trains</h2>

      <table className="review_list_table">
        <thead className="review_list_thead">
          <tr>
            <th className="review_list_th review_list_id">id</th>
            <th className="review_list_th">Nom du train</th>
            <th className="review_list_th review_list_train">Area</th>
            <th className="review_list_th">Types</th>
            <th className="review_list_th">Création</th>
            <th className="review_list_th">Modification</th>
            <th className="review_list_th">Publié</th>
          </tr>
        </thead>
        <tbody>
          {trains &&
            trains.map((train) => (
              <tr
                id="review_list_map_tr"
                key={train.id}
                onClick={() => navigate(`/administrateur/trains/${train.id}`)}
              >
                <td className="review_list_td">{train.id}</td>
                <td className="review_list_td">{train.tname}</td>
                <td className="review_list_td">{train.areaName}</td>
                <td className="review_list_td">
                  <ul>
                    {train.types &&
                      train.types.map((type) => (
                        <li key={type.id}>{type.title}</li>
                      ))}
                  </ul>
                </td>
                <td className="review_list_td">{transDate(train.creat)}</td>
                <td className="review_list_td">
                  {train.updat ? transDate(train.updat) : "null"}
                </td>
                <td className="review_list_td review_list_integer">
                  {train.published === 1 ? "oui" : "non"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainList;
