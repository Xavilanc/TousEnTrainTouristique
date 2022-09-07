import React, { useState } from "react";
import epingle from "@assets/epingle.png"
import "@components/styles/SearchTrains.css"

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
    <div>
      <form id="train-search">
        <label htmlFor="area-select">
          Je vais<br />
          <select className="area-select"
            value={area}
            id="area-select"
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="">Partout</option>
            {areas &&
              areas.map((item) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </label> <br />
        <label htmlFor="type-select">
          Je recherche des idées<br />
          <select className="type-select"
            value={type}
            id="type-select"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Pour tous les gouts</option>
            {types &&
              types.map((item) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </label>
      </form>
      <button type="submit" form="train-search" value="Je trouve !">Je trouve !</button>
    </div>
  );
}

export default SearchTrain;
