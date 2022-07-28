import React, { useState } from "react";
import Card from "../../ui/Card";
import classes from "./NewArtForm.module.css";

import { useNavigate } from "react-router-dom";

function NewArtsForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [contact, setContact] = useState("");
  const [author, setAuthor] = useState("");
  const [desc, setDesc] = useState("");

  const history = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    const ArtsWorks = { title, image, contact, author, desc };

    fetch("http://localhost:8000/ArtsWork", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ArtsWorks),
    }).then(() => {
      history("/newarts");
    });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Art-Title</label>
          <input
            type="text"
            required
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Art-Images</label>
          <input
            type="url"
            required
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="contact">Phone-No</label>
          <input
            type="text"
            required
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="author">Art-owner</label>
          <input
            type="text"
            required
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add NewArt</button>
        </div>
      </form>
    </Card>
  );
}

export default NewArtsForm;
