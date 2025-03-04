// Card Img
//// Likely can't reuse Cards Component

// Card Details Text
// - Title
// - Type
// - Text
// - Color
// - Cost

import FDN_Pack from "../assets/packs/FDN_Pack.jpg";
import HOU_Pack from "../assets/packs/HOU_Pack.jpg";
import POR_Pack from "../assets/packs/POR_Pack.jpg";

export default function CardDetails() {
  //const [count, setCount] = useState(0);
  return (
    <article>
      <h2>Card Details</h2>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={POR_Pack} className="logo" alt="Vite logo" />
        </a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          quisquam id nobis, quas nesciunt doloremque quos ab ex rerum! Tenetur
          magni blanditiis quas nisi nesciunt asperiores autem placeat unde
          debitis.
        </p>
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
