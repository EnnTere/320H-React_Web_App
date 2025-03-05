import { useState, useEffect, useReducer } from "react";

////////////////////////////////////////////////
//// URL Syntax
// ? - start of a query string
// & - separates k:v pairs
// %<...> hexadecimal that translates into a special character

//// Scryfall Query Params
// order=rarity+desc - cards ordered by rarity
// s%3Afdn - FDN set
// s%3Ahou - HOU set
// s%3Apor - POR set
// game%3Apaper - paper only cards
// is%3Abooster - only in boosters

//// Sources & Tools
// https://scryfall.com/docs/syntax
// https://en.wikipedia.org/wiki/Query_string
// https://www.url-encode-decode.com/
////////////////////////////////////////////////

//////// API ////////
const API_URL = `https://api.scryfall.com/cards/search?order=rarity&q=s%3A${set}+game%3Apaper+is%3Abooster`;


////// useEffect refactored into useReducer //////

function dataReducer(state, action) {
  switch (action.type) {
    case "CALL_API": {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case "CALL_SUCCESS": {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    case "CALL_ERROR": {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  data: [],
  loading: true,
  error: null,
};

// Trying out making a custom hook
export default function getData(API_URL) {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    const controller = new AbortController();
    // setLoading(true);

    const fetchData = async () => {
      dispatch({
        type: "CALL_API",
      });

      try {
        const response = await fetch(API_URL, { signal: controller.signal });
        const fetchedData = await response.json();

        dispatch({
          type: "CALL_SUCCESS",
          payload: fetchedData.data.slice(0, 15), // temp solution for retrieving 15
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          dispatch({
            type: "CALL_ERROR",
            payload: error,
          });
          console.log(error.message);
        }
      }
    };

    fetchData();

    //Cleanup
    return () => controller.abort();
  }, [API_URL]);
  return state;
}


////////////////////////////////

// Previous API Call

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
