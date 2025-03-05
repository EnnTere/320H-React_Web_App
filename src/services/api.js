import { useState, useEffect, useReducer } from "react";

//////// API ////////

//// API fetches the data that corresponds with the selected pack's set
export const createApiUrl = (set) =>
  `https://api.scryfall.com/cards/search?order=rarity&q=s%3A${set}+game%3Apaper+is%3Abooster`;

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

//// Experimenting with making a custom hook
export function getData(API_URL) {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    if (!API_URL) return;

    const controller = new AbortController();

    const fetchData = async () => {
      dispatch({
        type: "CALL_API",
      });

      try {
        const response = await fetch(API_URL, { signal: controller.signal });
        const fetchedData = await response.json();

        dispatch({
          type: "CALL_SUCCESS",
          payload: fetchedData.data.slice(0, 15), // temp hacky solution for retrieving 15
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

///////////////////////////////////////////////

//// Previous API Call w/ useEffect

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
