import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import { getDate } from "../services/DateManager";
import AddImageTrain from "../services/AddImageTrain";
import "../assets/styles/CreateUserForm.css";
import "../assets/styles/CreateTrainForm.css";

export default function CreateTrainForm() {
  const [name, setName] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [areas, setAreas] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState("");
  const [types, setTypes] = useState([]);
  const [description, setDescription] = useState("");
  const [information, setInformation] = useState("");
  const userId = window.localStorage.getItem("id");
  const [posted, setPosted] = useState(false);
  const [sendImage, setSendImage] = useState({
    title: "",
    path: "",
    user_id: 0,
    train_id: 0,
    created_on: "2022-10-05",
    updated_on: "2022-10-05",
    published: 0,
  });

  const navigate = useNavigate();

  // useEffect(() => {
  //   setToken(window.localStorage.getItem("token"));

  //   if (token) {
  //     const decoded = jwtDecode(token);
  //     setUserId(decoded.sub);
  //   }
  // }, [token]);
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

  const postTrain = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/trains/`, {
        name,
        train_user_id: userId,
        area_id: selectedArea,
        created_on: getDate(),
        updated_on: null,
        types: selectedTypes,
        image: sendImage,
        published: 0,
        description,
        description_info: information,
      })
      .then((res) => console.warn(res));
    setPosted(true);
    setTimeout(() => navigate("/"), 3000);
  };

  if (posted === false) {
    return (
      <div className="contact1">
        <div className="Contact">
          <h1>Ajouter un train</h1>
          <form onSubmit={(e) => postTrain(e)}>
            <label className="create_train_form_label" htmlFor="train_name">
              Indiquez ici le nom du train
            </label>
            <input
              name="train_name"
              required
              className="create_train_form_name"
              type="text"
              id="train"
              value={name}
              placeholder="Nom du train"
              onChange={(e) => setName(e.target.value)}
            />
            <label className="create_train_form_label" htmlFor="area">
              Sélectionnez une région
            </label>
            <select
              name="area"
              required
              className="create_train_form_area"
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
            <label className="create_train_form_label" htmlFor="type">
              Sélectionnez un ou plusieurs types
            </label>
            <Select
              name="type"
              className="create_train_form_type"
              defaultValue={selectedTypes}
              onChange={setSelectedTypes}
              options={types}
              isMulti
            />
            <label className="create_train_form_label" htmlFor="description">
              Indiquez ici la description de ce train
            </label>
            <textarea
              className="create_train_form_description"
              name="description"
              id="description"
              cols="30"
              rows="10"
              required
              value={description}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <label className="create_train_form_label" htmlFor="information">
              Indiquez ici des Informations complémentaires sur ce train
            </label>
            <textarea
              className="create_train_form_information"
              name="information"
              id="information"
              cols="30"
              rows="10"
              required
              value={information}
              placeholder="Informations complémentaires"
              onChange={(e) => setInformation(e.target.value)}
            />
            <AddImageTrain sendData={sendImage} setSendData={setSendImage} />
            <div className="buttonsContainer">
              <button className="buttonForm" type="submit">
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
  if (posted === true) {
    return (
      <div>
        <div className="create_review_send">
          Merci pour votre proposition de création de train. Elle sera validé
          d'ici quelques jours.
        </div>
      </div>
    );
  }
}
