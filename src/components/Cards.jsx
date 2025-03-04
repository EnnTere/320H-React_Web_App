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
// import createConnection from

import FDN_Pack from "../assets/packs/FDN_Pack.jpg";
import HOU_Pack from "../assets/packs/HOU_Pack.jpg";
import POR_Pack from "../assets/packs/POR_Pack.jpg";

const API_URL = "https://api.scryfall.com";

//const setURL = `https://api.scryfall.com/cards/search?order=rarity&q=s%3A${set}+game%3Apaper+is%3Abooster`

const setTestURL =
  "https://api.scryfall.com/cards/search?order=rarity&q=s%3Apor+game%3Apaper+is%3Abooster";

// [0-14]

//// Query Params
// order=rarity+desc
// s%3Afdn
// s%3Ahou
// s%3Apor
// game%3Apaper
// is%3Abooster - only in boosters

// URL Syntax
// ? - start of a query String
// w/in query string are k:v pairs separated by &s
// %<...> hexadecimal

//// Tool
// https://www.url-encode-decode.com/

// q=(game%3Apaper)+set%3Apor&unique=cards&as=grid
// import hou-15-hour-of-revelation from "../assets/placeholderCards/hou-15-hour-of-revelation.jpg";
// import hou-18-oketra-s-last-mercy from "../assets/placeholderCards/hou-18-oketra-s-last-mercy.jpg";
// import hou-27-unconventional-tactics from "../assets/placeholderCards/hou-27-unconventional-tactics.jpg";
// import hou-38-jace-s-defeat.jpg from "../assets/placeholderCards/hou-38-jace-s-defeat.jpg";
// import hou-49-supreme-will from "../assets/placeholderCards/hou-49-supreme-will.jpg";

export default function Cards() {
  const [cards, setCards] = useState([]);

  // GET






  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(setTestURL);
        const data = await response.json();
        console.log(data.data);
        setCards(data.data[0]);
      } catch (err) {
        console.log(err);
      }
      //return () => {
      // response.disconnect
      //} // cleanup
    };
    fetchCards();
  }, []);

  return (
    <article>
      <h2>Pack Contents</h2>

      {cards.map((card) => {
        const {
          id,
          image_uri,
          name,
          type_line,
          mana_cost,
          cmc,
          color_identity,
          colors,
          power,
          toughness,
          rarity,
          scryfall_uri
        } = card;

        return (
          <div>
            <div>
              <ul>
                <li key='${id}'>
                  <a href='${scryfall_uri}' target="_blank">
                    <img src='${image_uri.normal}' className="logo" alt='A Magic: The Gathering trading card of ${name}' />
                  </a>
                </li>
              </ul>
            </div>

            <br />

            <div className="card">
              <button></button>
              {/* <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </button> */}
              <p>Test</p>
            </div>

            <br />

            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </div>
        );
      })}
      ;
    </article>
  );
}
