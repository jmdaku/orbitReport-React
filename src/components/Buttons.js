import satData from "./satData.js";
import "./styling.css";
import App from "../App.js";


const Buttons = () => {
  return (
    <div className="flex-container">
      {App.displaySats.map((sat, id) => {
         return (
           <button onClick={() => App.filterByType(sat)} key={id}>
             {sat} Orbit
           </button>
        );
      })}

      <button onClick={() => {
        App.setSat(satData)}
      }
      >All Orbits </button>
  </div>
  );
};

export default Buttons;