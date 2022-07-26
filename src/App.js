import React,{useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import AllArts from "./pages/AllArts";
import FavoriteArt from "./pages/FavoriteArt";
import NewArt from "./pages/NewArt";


function App() {
  const [art , setArt] = useState([])

  useEffect(() =>{
    fetch ("http://localhost:8000/ArtsWork")
    .then((response) => response.json())
    .then((data) => setArt(data))
  
},[])  
  return (
    <div>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<AllArts />} />
          <Route path="favoriteart" element={<FavoriteArt />} />
          <Route path="newarts" element={<NewArt />} />
        </Routes>
  
    </div>
  );
}

export default App;
