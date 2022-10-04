import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Select from "react-select";
import { getDate } from "../services/DateManager";
import "../assets/styles/CreateUserForm.css";

export default function EditTrainForm({ id }) {
  const [name, setName] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [areas, setAreas] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState("");
  const [types, setTypes] = useState([]);
  const [description, setDescription] = useState("");
  const [information, setInformation] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setToken(window.localStorage.getItem("token"));

    if (token) {
      const decoded = jwtDecode(token);
      setUserId(decoded.sub);
    }
  }, [token]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/areas/`)
      .then((response) => {
        setAreas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/types/`)
      .then((response) => response.data)
      .then((data) => {
        const newTypes = [];
        data.map((type) =>
          newTypes.push({ value: type.id, label: type.title })
        );
        setTypes(newTypes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/trains/${id}`)
      .then((response) => response.data)
      .then((data) => {
        setName(data.tname);
        setSelectedArea(data.areaId);
        setDescription(data.description);
        setInformation(data.description_info);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/trains/${id}`)
      .then((response) => response.data)
      .then((data) => setSelectedTypes(data.types));
  }, []);

  const updateTrain = () => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/trains/${id}`, {
        name,
        train_user_id: userId,
        area_id: selectedArea,
        created_on: getDate(),
        updated_on: getDate(),
        types: selectedTypes,
        published: 0,
        description,
        description_info: information,
      })
      .then((res) => console.warn(res));
    navigate("/administrateur");
  };

  return (
    <div className="contact1">
      <div className="Contact">
        <h1>Modifier un train</h1>
        <form onSubmit={(e) => updateTrain(e)}>
          <input
            className="name"
            type="text"
            id="train"
            value={name}
            placeholder="Nom du train"
            onChange={(e) => setName(e.target.value)}
          />
          <select
            className="area_select"
            value={selectedArea}
            id="area-select"
            onChange={(e) => setSelectedArea(e.target.value)}
          >
            <option value="Partout">Partout</option>
            {areas &&
              areas.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
          <Select
            value={selectedTypes}
            defaultValue={selectedTypes}
            onChange={setSelectedTypes}
            options={types}
            isMulti
          />
          <textarea
            className="description"
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <textarea
            className="information"
            name="information"
            id="information"
            cols="30"
            rows="10"
            value={information}
            placeholder="Informations complémentaires"
            onChange={(e) => setInformation(e.target.value)}
          />
          <div className="buttonsContainer">
            <button
              className="buttonForm"
              type="button"
              onClick={() => updateTrain()}
            >
              Ajouter
            </button>
            <button
              className="buttonForm1"
              type="button"
              onClick={() => navigate("/profil")}
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
