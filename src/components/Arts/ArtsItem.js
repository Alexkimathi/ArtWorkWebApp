import React from "react";
import "../../../src/App.css";
// import { useNavigate } from "react-router-dom";

function ArtsItem({ id ,title, desc, contact, author, image, onDeleteArt}) {
  // const history = useNavigate();
  const handleDelete =()=>{
    fetch('http://localhost:8000/ArtsWork/'+ id,{
      method: 'DELETE'
    }).then(()=>{
      // history("/");
      onDeleteArt(id)
    })
    
  }
  return (
    
    <li className="card">
      <card>
        <div className="images">
          <img src={image} alt="" />
        </div>
        <hr className="h1"/>
        <div className="content">
          <h1>{title}</h1>
          <hr className="h"/>
          <p>{desc}</p>
          <h3>{contact}</h3>
          <h2>
            <strong>- By {author}</strong>
          </h2>
        </div>
        <div className="btn-actions">
          <button>To favorite</button>
          <button onClick={handleDelete}>Delete</button>
          <button>Buy Now</button>
          <button>Update</button>
        </div>
      </card>
    </li>
  );
}

export default ArtsItem;
