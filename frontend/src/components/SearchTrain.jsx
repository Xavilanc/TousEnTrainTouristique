import React, { useState } from "react";

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

function SearchTrain() {
  const [area, setArea] = useState("");
  return (
    <div>
      <form>
        <label htmlFor="area-select">
          Je vais
          <select
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
        </label>
      </form>
    </div>
  );
}

export default SearchTrain;
