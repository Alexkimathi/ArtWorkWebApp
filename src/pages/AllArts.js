import React, { useEffect, useState } from "react";
import ArtsList from "../components/Arts/ArtsList";

function AllArts() {
  const [arts, setArt] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/ArtsWork")
      .then((response) => response.json())
      .then((data) => setArt(data));
  }, []);
  return (
    <div>
      <ArtsList arts={arts} />
    </div>
  );
}

export default AllArts;
