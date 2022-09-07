import React, { useState } from "react";
import "@components/styles/SearchTrains.css";

const areas = [
  {
    id: 1,
    name: "en Auvergne-Rhône-Alpes",
  },
  {
    id: 2,
    name: "en Provence-Alpes-Côte d'Azur",
  },
  {
    id: 3,
    name: "en Bretagne",
  },
];

const types = [
  {
    id: 1,
    name: "à la mer",
  },
  {
    id: 2,
    name: "à la montagne",
  },
  {
    id: 3,
    name: "à la campagne",
  },
];

function SearchTrain() {
  const [area, setArea] = useState("");
  const [type, setType] = useState("");
  return (
    <div className="train_search_form">
      <form id="train_search">
        <label className="train_search_label" htmlFor="area_select">
          Je vais
          <br />
          <select
            className="area_select"
            value={area}
            id="area-select"
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="Partout">Partout</option>
            {areas &&
              areas.map((item) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </label>{" "}
        <br />
        <label className="train_search_label" htmlFor="type-select">
          Je recherche des idées
          <br />
          <select
            className="type_select"
            value={type}
            id="type-select"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Pour tous les gouts">Pour tous les gouts</option>
            {types &&
              types.map((item) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </label>
      </form>
      <button
        className="train_search_button"
        type="submit"
        form="train-search"
        value="Je trouve !"
      >
        Je trouve !
      </button>
    </div>
  );
}

export default SearchTrain;
