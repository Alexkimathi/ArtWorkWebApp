import React from "react";


function AllArts({id,title,desc,contact,author,image}) {
  return (
    
    <div id={id}>
        <img src={image} alt="d"></img>
          <h1>{title}</h1>
          <p>{desc}</p>
          <h3>{contact}</h3>
          <h2>
          <strong>- By {author}</strong>
          </h2>
        </div>
  );
}

export default AllArts;
