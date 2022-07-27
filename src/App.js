import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AllArts from "./pages/AllArts";
import FavoriteArt from "./pages/FavoriteArt";
import NewArt from "./pages/NewArt";

function App() {
  return (
    <div>
      <div>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<AllArts />} />
          <Route exact path="/favoriteart" element={<FavoriteArt />} />
          <Route exact path="/newarts" element={<NewArt />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
