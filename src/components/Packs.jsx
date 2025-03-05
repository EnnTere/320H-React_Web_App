// Pack Img - Static
// Button - Static
//// - Could the button pass down the API query?
//// - Would that mean each button needs to be a route?

import React from "react";
import FDN_Pack from "../assets/packs/FDN_Pack.jpg";
import HOU_Pack from "../assets/packs/HOU_Pack.jpg";
import POR_Pack from "../assets/packs/POR_Pack.jpg";

///// Compoenent /////
const PackItem = ({ image, packName }) => {
  return (
    <div className="flex-pack">
      <img src={image} className="pack" alt={`${packName} pack`} />
      <button>Open Pack</button>
    </div>
  );
};

<div className="flex-container"></div>;

///// Packs Arr /////
export default function Packs() {
  const packArrData = [
    { image: POR_Pack, name: "Portal" },
    { image: HOU_Pack, name: "Hour of Devastation" },
    { image: FDN_Pack, name: "Foundations" },
  ];

  return (
    <article>
      <h2>Select a Pack</h2>
      <div className="flex-container">
        {packArrData.map((pack) => (
          <PackItem 
            key={pack.name} 
            image={pack.image} 
            packName={pack.name} 
          />
        ))}

        {/* <div className="flex-pack">
          <a href="https://react.dev" target="_blank">
            <img src={HOU_Pack} className="pack react" alt="React pack" />
          </a>
          <button>Open Pack</button>
        </div>

        <div className="flex-pack">
          <a href="https://react.dev" target="_blank">
            <img src={FDN_Pack} className="pack react" alt="React pack" />
          </a>
          <button>Open Pack</button>
        </div> */}
      </div>
    </article>
  );
}
