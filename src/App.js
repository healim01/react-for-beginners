import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [rockets, setRocket] = useState([]);

  const getRockets = async () => {
    const json = await (
      await fetch("https://api.spacexdata.com/v3/rockets")
    ).json();
    // console.log(json);
    setRocket(json);
    console.log(json);
    setLoading(false);
  }
  useEffect(() => {
    getRockets();
    
  }, []);

  return (
    <div>
        {loading ? <h1>loading</h1> : <div>
      {rockets.map((rocket) => (
        console.log(rocket),
        <div key={rocket.id} class="card">
          <h2> {rocket.rocket_name} </h2>
          <span>
            company : {rocket.company}  country : {rocket.country}
          </span>
          <br/>
          <span>{rocket.description}</span>
        </div>
      ))}
    </div>}
    </div>
  );
}

export default App;


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import './App.css';
// import { useState, useEffect } from "react";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [weathers, setWeather] = useState();

//   const getWeathers = async () => {
//     const lat = "36.1022";
//     const lon = "129.3898";
//     const API_key = "434f863823f4faa77e10d6893d0d3b21"
//     const json = await (
//       await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`)
//     ).json();
//     console.log(json);
//     setWeather(json);
//     setLoading(false);
//   }
//   useEffect(() => {
//     getWeathers();
//   }, []);

//   return (
//     <div>
//         {loading ? <h1>loading</h1> : <div>
//       {weathers.map((weather) => (
//         console.log(">>"),
//         console.log(weather),
//         <div key={weather.timezone}>
//         {/* <h2> {weather.weather.main} </h2> */}
//          </div>
//       ))}
//     </div>}
//     </div>
//   );
// }

// export default App;

