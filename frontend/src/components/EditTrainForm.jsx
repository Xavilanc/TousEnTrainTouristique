import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const [published, setPublished] = useState(0);
  const userId = window.localStorage.getItem("id");

  const navigate = useNavigate();

  const params = useParams();

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
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/trains/${id}`)
      .then((response) => response.data)
      .then((data) => {
        setSelectedTypes(data.types);
        setName(data.tname);
        setSelectedArea(data.areaId);
        setDescription(data.description);
        setInformation(data.description_info);
        setPublished(data.published);
      });
  }, []);

  const updateTrain = (e) => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/trains/${id}`, {
        name,
        train_user_id: userId,
        area_id: selectedArea,
        created_on: getDate(),
        updated_on: getDate(),
        types: selectedTypes,
        published,
        description,
        description_info: information,
      })
      .then((res) => console.warn(res));
    navigate("/administrateur");
  };

  const deleteTrain = () => {
    if (window.confirm("Voulez-vous vraiment supprimer ce train ?")) {
      axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/trains/${params.id}`
      );
      navigate("/administrateur");
    }
  };

  const handlePublished = () => {
    if (published === 0) {
      setPublished(1);
    }
    if (published === 1) {
      setPublished(0);
    }
  };

  return (
    <div className="contact1">
      <div className="Contact">
        <h1 className="create_train_title">Modifier un train</h1>
        <form onSubmit={(e) => updateTrain(e)}>
          <label className="create_train_form_label" htmlFor="train_name">
            Nom du train
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
            Région
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
            Type(s)
          </label>
          <Select
            name="type"
            className="create_train_form_type"
            value={selectedTypes}
            defaultValue={selectedTypes}
            onChange={setSelectedTypes}
            options={types}
            isMulti
          />
          <label className="create_train_form_label" htmlFor="description">
            Description
          </label>
          <textarea
            required
            className="create_train_form_description"
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <label className="create_train_form_label" htmlFor="information">
            Informations complémentaires
          </label>
          <textarea
            required
            className="create_train_form_information"
            name="information"
            id="information"
            cols="30"
            rows="10"
            value={information}
            placeholder="Informations complémentaires"
            onChange={(e) => setInformation(e.target.value)}
          />
          <div className="create_train_form_label">
            {" "}
            Train publié :{" "}
            <button type="button" onClick={() => handlePublished()}>
              {published === 1 ? "Oui" : "Non"}
            </button>
            <span>(validez la saisie en cliquant sur modifier)</span>
          </div>
          <div className="buttonsContainer">
            <button className="button-form-create" type="submit">
              Modifier
            </button>
            <button
              className="button-form-create3"
              type="button"
              onClick={() => deleteTrain()}
            >
              Supprimer
            </button>
            <button
              className="button-form-create2"
              np
              type="button"
              onClick={() => navigate("/administrateur")}
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
