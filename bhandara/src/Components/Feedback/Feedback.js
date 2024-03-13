import React, { useState } from "react";
import "./Feedback.css";
import image from "../../Images/img.png";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Db/firebase";
function Feedback() {
  const [formData, setFormData] = useState({ feedback: "" });
  const [buttonClicked, setButtonClicked] = useState(false);
  function changeHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setButtonClicked(true);
    addToDatabase();
  }
  function addToDatabase() {
    addDoc(collection(db, "FeedBack"), {
      formData,
    })
      .then( (d) => {
        setButtonClicked(false);
        alert('thanks for your feedback')
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div className="feedback-main">
      <div className="feedback-left">
        <img src={image} />
      </div>
      <div className="feedback-right">
        <div className="feedBack-heading">
          <h2>Give Your valuable feedBack to improve our website</h2>
        </div>
        <form onSubmit={handleSubmit} className="feedback-form">
          <input
            name="feedback"
            type="text"
            onChange={changeHandler}
            value={formData.feedback}
          />
          <div className="feedbackbuttonDiv">
            <button type="submit">
              {buttonClicked ? (
                <i class="fa fa-spinner fa-spin"></i>
              ) : (
                "Send Feedback"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
