// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MovieSearch from "./components/MovieSearch";
// import MovieList from "./components/MovieList";
// import MovieDetails from "./components/MovieDetails";

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<MovieSearch />} />
//           <Route path="/movies" element={<MovieList />} />
//           <Route path="/movies/:movieId" element={<MovieDetails />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import MovieSearch from "./MovieSearch";

const App = () => {
  return (
    <div className="App">
      <MovieSearch />
    </div>
  );
};

export default App;
