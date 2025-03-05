// Pack Img - Static
// Button - Static
//// - Could the button pass down the API query?
//// - Would that mean each button needs to be a route?

import { React, useState } from "react";
import { createApiUrl } from "../services/api.js"
import Cards from "./Cards.jsx";
import FDN_Pack from "../assets/packs/FDN_Pack.jpg";
import HOU_Pack from "../assets/packs/HOU_Pack.jpg";
import POR_Pack from "../assets/packs/POR_Pack.jpg";


///// Compoenent /////
const PackItem = ({ image, packSet, onPackSelection }) => {
  return (
    <div className="flex-pack">
      <img src={image} className="pack" alt={`${packSet} pack`} />
      <button onClick={() => onPackSelection(packSet)}>Open Pack</button>
    </div>
  );
};


///// Packs Arr /////
export default function Packs() {
  const [selectedSet, setSelectedSet] = useState(null); // Unsure if good/helpful naming

  const packArrData = [
    { image: POR_Pack, set: "Portal" },
    { image: HOU_Pack, set: "Hour of Devastation" },
    { image: FDN_Pack, set: "Foundations" },
  ];

  const handlePackSelection = (set) => {
    setSelectedSet(set);
  }

  return (
    <article>
      <h2>Select a Pack</h2>
      <div className="flex-container">
        {packArrData.map((pack) => (
          <PackItem 
            key={pack.set} 
            image={pack.image} 
            packSet={pack.set}
            onPackSelection={handlePackSelection}
          />
        ))}
      </div>
      {selectedSet && <Cards set={selectedSet} />}
    </article>
  );
};