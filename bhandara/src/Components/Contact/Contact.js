import React, { useState } from "react";
import "./Contact.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Db/firebase";
function Contact() {
  let init = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState(init);
  function changeHandler(event) {
    setFormData({
        ...formData,
        [event.target.name]:event.target.value
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log("Submit")
    addToDatabase()
  }
  function addToDatabase() {
    addDoc(collection(db, "FromContactUsFrom"), {
        formData
      });
  }
  return (
    <div className="contact">

    <div className="contactMain">
        <div className="contact-heading">
<h2>Contact Us</h2>
        </div>
      <div className="formDiv">
        <form className="formMain" onSubmit={handleSubmit}>
            <div className="contactFormFields">
            <label className="formLabel">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={changeHandler}
          />
            </div>
           <div className="contactFormFields">

            <label className="formLabel">Email</label>

           <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            />
            </div>
            <div className="contactFormFields">

            <label className="formLabel">Message</label>

           <input
            type="text"
            name="message"
            value={formData.message}
            onChange={changeHandler}
            />
            </div>
            <div className="submitDiv">

            <button type="submit" className="contact-submit-button">Submit</button>
            </div>
        </form>
      </div>
    </div>
    </div>

  );
}

export default Contact;
