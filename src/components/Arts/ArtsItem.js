import React from "react";
import "../../../src/App.css";

function ArtsItem({ title, desc, contact, author, image }) {
  return (
    <li className="card">
      <card>
        <div className="images">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h1>{title}</h1>
          <p>{desc}</p>
          <h3>{contact}</h3>
          <h2>
            <strong>- By {author}</strong>
          </h2>
        </div>
        <div className="btn-actions">
          <button>To favorite</button>
          <button>Delete</button>
          <button>Buy Now</button>
          <button>Update</button>
        </div>
      </card>
    </li>
  );
}

export default ArtsItem;
