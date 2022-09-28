import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-unresolved
import "@assets/styles/CreateUserForm.css";
import axios from "axios";
import Select from "react-select";

export default function CreateTrainForm() {
  const [train, setTrain] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [areas, setAreas] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState("");
  const [types, setTypes] = useState([]);
  const [description, setDescription] = useState("");
  const [information, setInformation] = useState("");

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
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/trains/`, {
      train_user_id: 1,
      train_area_id: train.area_id,
      area_id: selectedArea,
      type_id: selectedTypes,
      description,
      information,
    });
  };

  return (
    <div className="contact1">
      <div className="Contact">
        <h1>Ajouter un train</h1>
        <form onSubmit={postTrain}>
          <input
            className="name"
            type="text"
            id="train"
            value={train}
            placeholder="Nom du train"
            onChange={(e) => setTrain(e.target.value)}
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
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
          <Select
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
            <button className="buttonForm" type="submit">
              Envoyer
            </button>
            <button className="buttonForm1" type="submit">
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
