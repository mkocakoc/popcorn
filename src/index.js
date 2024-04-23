import React from 'react';
import ReactDOM from 'react-dom/client';
// import StarRatings from './components/StarRatings';
// import { useState } from 'react';
import './index.css';
import App from './App';


// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div >
//       <StarRatings maxRating={10} onSetRating={setMovieRating} />
//       <p>Rating: {movieRating}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StarRatings maxRating={5} color='red' size={31} className="starDivs" messages={["worst", "bad", "mhm", "good", "excellent"]} defaultRating={5}  />
    <Test  /> */}
    <App />
  </React.StrictMode>
);


