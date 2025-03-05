// Card Imgs
// - Clickable -> Populates & Renders Card Details Component
//// - Conditional rendering (after clicking on pack)
// - In a list?

// Pack Img - Static
// Button - Static
//// - Could the button pass down the API query?
//// - Would that mean each button needs to be a route?

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import { useState, useEffect } from "react";
import getData from "../services/api.js";

import FDN_Pack from "../assets/packs/FDN_Pack.jpg";
import HOU_Pack from "../assets/packs/HOU_Pack.jpg";
import POR_Pack from "../assets/packs/POR_Pack.jpg";

const API_URL = "https://api.scryfall.com";

//const setURL = `https://api.scryfall.com/cards/search?order=rarity&q=s%3A${set}+game%3Apaper+is%3Abooster`

const setTestURL =
  "https://api.scryfall.com/cards/search?order=rarity&q=s%3Apor+game%3Apaper+is%3Abooster";

// [0-14]



// q=(game%3Apaper)+set%3Apor&unique=cards&as=grid
// import hou-15-hour-of-revelation from "../assets/placeholderCards/hou-15-hour-of-revelation.jpg";
// import hou-18-oketra-s-last-mercy from "../assets/placeholderCards/hou-18-oketra-s-last-mercy.jpg";
// import hou-27-unconventional-tactics from "../assets/placeholderCards/hou-27-unconventional-tactics.jpg";
// import hou-38-jace-s-defeat.jpg from "../assets/placeholderCards/hou-38-jace-s-defeat.jpg";
// import hou-49-supreme-will from "../assets/placeholderCards/hou-49-supreme-will.jpg";

// Sample prop to pass: { set }
export default function Cards() {
  const {data, loading, error} = getData(setTestURL);
  // const {data, loading, error} = getData(`/api/data/${set}`);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  //return <div>Data: {data}</div>;
//};

  // // GET
  // useEffect(() => {
  //   let ignore = false;

  //   const fetchCards = async () => {
  //     try {
  //       const response = await fetch(setTestURL);
  //       const data = await response.json();
  //       console.log(data.data.slice(0, 15)); // temp solution for retrieving 15
  //       setCards(data.data.slice(0, 15));
  //     } catch (err) {
  //       console.log(err);
  //     }
  //     return () => {
  //     response.disconnect
  //     } // cleanup
  //     getData();
  //   }
  //   fetchCards();
  // }, []);

  return (
    <article >
      <h2>Pack Contents</h2>
      <div>Data: {data}</div>;
      <div className="flex-container">
        {cards.map((card) => {
          const {
            id,
            name,
            type_line,
            mana_cost,
            cmc,
            color_identity,
            colors,
            power,
            toughness,
            rarity,
            scryfall_uri,
            image_uris: { small, normal, large },
          } = card;

          {
            /* {cards.map(
          (
            {
              id,
              name,
              type_line,
              mana_cost,
              cmc,
              color_identity,
              colors,
              power,
              toughness,
              rarity,
              scryfall_uri,
              image_uri,
              image_uri: { small, normal, large } 
            },
            card
          ) => { */
          }

          return (
              <li key={id}>
                <a href={scryfall_uri} target="_blank">
                  <img
                    src={normal}
                    className="logo"
                    alt={"A Magic: The Gathering trading card of " + name}
                  />
                </a>
              </li>
          );
        })}
        ;
      </div>
    </article>
  );
}
