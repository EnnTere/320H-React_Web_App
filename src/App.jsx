import { useState } from "react";
import "./App.css";

import Packs from "./components/Packs";
import Cards from "./components/Cards";
import CardDetails from "./components/CardDetails";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <section className="page-container">
        <h1>Magic Sim 2.0</h1>

        <Packs />
        <Cards />
        <CardDetails />
      </section>
    </div>
  );
}

export default App;
