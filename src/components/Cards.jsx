import { React, useState, useEffect } from "react";
import { getData, createApiUrl } from "../services/api.js";

///// Pack Content Display /////

export default function Cards({ set }) {
  const API_URL = createApiUrl(set);
  const { data, loading, error } = getData(API_URL);

  if (loading) return <p>{`Opening ${set} pack`}</p>;
  if (error) return <p>Pack Error: {error.message}</p>;

  return (
    <article>
      <h2>Pack Contents</h2>
      <div className="flex-container">
        {data.map((card) => {
          const {
            // Had originally planned to use all these in a details panel
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

          return (
            <li key={id}>
              <a href={scryfall_uri} target="_blank">
                <img
                  src={normal}
                  className="logo" //may need to update this
                  alt={`A Magic: The Gathering trading card of ${name}`}
                />
              </a>
            </li>
          );
        })}
      </div>
    </article>
  );
}
