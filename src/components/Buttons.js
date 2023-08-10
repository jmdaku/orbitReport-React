import satData from "./components/satData.js";
import "./styling.css";
import App from "../App.js";
import { filterByType , setSat , displaySats } from "../App.js";

const Buttons = () => {
  return (
    <div className="flex-container">
      {displaySats.map((sat, id) => {
         return (
           <button onClick={() => filterByType(sat)} key={id}>
             {sat} Orbit
           </button>
        );
      })}

      <button onClick={() => {
        setSat(satData)}
      }
      >All Orbits </button>
  </div>
  );
};

export default Buttons;