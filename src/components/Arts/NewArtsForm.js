import React from "react";
import Card from "../../ui/Card";
import classes from "./NewArtForm.module.css";

function NewArtsForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor='title'>Art-Title</label>
          <input type='text' required id='title' />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Art-Image</label>
          <input type='url' required id='image' />
        </div>
        <div className={classes.control}>
          <label htmlFor='contact'>Phone-No</label>
          <input type='text' required id='contact' />
        </div>
        <div className={classes.control}>
          <label htmlFor='author'>Art-owner</label>
          <input type='text' required id='author' />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' required rows='5'></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewArtsForm;
