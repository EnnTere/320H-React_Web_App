import { useState, useEffect } from "react";

////////////////////////////////////////////////
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

////////////////////////////////////////////////

//////// API ////////
const baseURL = "https://api.scryfall.com";

//const API_URL = `https://api.scryfall.com/cards/search?order=rarity&q=s%3A${set}+game%3Apaper+is%3Abooster`

const setTestURL =
  "https://api.scryfall.com/cards/search?order=rarity&q=s%3Apor+game%3Apaper+is%3Abooster";

export default function getData(setTestURL) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(setTestURL, { signal: controller.signal });
        const data = await response.json();
        console.log(data.data.slice(0, 15));
        setData(data.data.slice(0, 15)); // temp solution for retrieving 15
        setData === data && setLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
          setLoading(false);
          console.log(err.message);
        }
      }
    };

    return () => controller.abort(); //Cleanup
  }, [setTestURL]);
  return { data, loading, error };
}

//   try {
//     const response = await fetch(setTestURL);
//     const data = await response.json();
//     console.log(data.data.slice(0, 15)); // temp solution for retrieving 15
//     setCards(data.data.slice(0, 15));
//   } catch (err) {
//     console.log(err);
//   }
//   //return () => { // cleanup
//   // response.disconnect
//   //}
// };
// getData();




// // GET
// const [cards, setCards] = useState([]);

// export const fetchCards = async () => {
//   // let ignore = false;

//   try {
//     const response = await fetch(setTestURL);
//     const data = await response.json();
//     console.log(data.data.slice(0, 15));
//     setCards(data.data.slice(0, 15)); // temp solution for retrieving 15
//   } catch (err) {
//     console.log(err);
//   }

//   getData();
//   fetchCards();

//   //return () => {
//     //ignore = true;
//     // response.disconnect
//   //} // cleanup
// };




// const actions = {
//   CALL
// }


////////////////////////////////

// Working

  // GET
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