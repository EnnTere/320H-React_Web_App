// Pack Img - Static
// Button - Static
//// - Could the button pass down the API query?
//// - Would that mean each button needs to be a route?

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import FDN_Pack from "../assets/packs/FDN_Pack.jpg";
import HOU_Pack from "../assets/packs/HOU_Pack.jpg";
import POR_Pack from "../assets/packs/POR_Pack.jpg";

export default function Packs() {
  //const [count, setCount] = useState(0);
  return (
    <article>
      <h2>Select a Pack</h2>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={POR_Pack} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={HOU_Pack} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={FDN_Pack} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card">
        <button></button>
        {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button> */}
        <p>Test</p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </article>
  );
}
