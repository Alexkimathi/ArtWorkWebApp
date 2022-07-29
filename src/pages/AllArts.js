import React, { useEffect, useState } from "react";
import ArtsList from "../components/Arts/ArtsList";

function AllArts() {
  const [arts, setArt] = useState([]);

  function updateArt(art){
    setPoems([...arts , art])
  }

  function handleDelete(id) {
    function updateArt(art){
    setArt([...arts , art])
  }

  useEffect(() => {
    fetch("http://localhost:8000/ArtsWork")
      .then((response) => response.json())
      .then((data) => setArt(data));
  }, []);
  return (
    <div>
      <ArtsList arts={arts}  onDeleteArt={handleDelete} />
    </div>
  );
}
}

export default AllArts;
