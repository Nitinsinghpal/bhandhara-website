import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./Modal.css";
import { db, storage } from "../../Db/firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
function Modal({ isModalOpen, modalContent, onClose }) {
  let init = {
    address: "",
    locationLink: "",
    desc: "",
    image: "",
    verified: false,
  };
  let dataToSave = {};
  const [formData, setFormData] = useState(init);
  // const [imageUrl, setImageUrl] = useState();

  if (isModalOpen !== true) {
    return null;
  }

  function changeHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  const UploadImage = async (file) => {
    if (!file) return;
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot);
      },
      (error) => {
        alert(error);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // setFormData({
          //   ...formData,
          //   [formData.image]: downloadURL,
          // });
          dataToSave = formData;
          dataToSave.image = downloadURL;
          // imageUrl=downloadURL;
          AddDataFire();
        });
      }
    );
  };

  function AddDataFire() {
    addDoc(collection(db, "BhandharaPosts"), {
      dataToSave,
      completed: false,
    });
 
  }
  async function submitForm(event) {
    event.preventDefault();
    const file = event.target[3].files[0];
    await UploadImage(file);
  }
  return (
    <div className="modal-main">
      <div className="modalCard">
        <div className="modalHeader">
          <IoMdClose onClick={onClose} />
        </div>
        <div className="formHeaderDescDiv">
          <h5 className="formHeaderDesc">
            Please provide right information to help other peoples
          </h5>
        </div>
        <div className="modalContent">
          <form className="form" onSubmit={submitForm}>
            <div className="field">
              <div className="labelDiv">
                <label for="address">Address</label>
              </div>
              <input
                name="address"
                type="text"
                value={formData.address}
                onChange={changeHandler}
              />
            </div>
            <div className="field">
              <div className="labelDiv">
                <label for="locationLink">Location Link</label>
              </div>
              <input
                name="locationLink"
                type="text"
                value={formData.locationLink}
                onChange={changeHandler}
              />
            </div>
            <div className="field">
              <div className="labelDiv">
                <label for="address">Description</label>
              </div>
              <textarea
                placeholder="Enter description here"
                className="field-textarea"
                name="desc"
                value={formData.desc}
                onChange={changeHandler}
              ></textarea>
            </div>
            <div className="field">
              <div className="labelDiv">
                <label for="image">Image</label>
              </div>
              <input
                label="choose image"
                input
                type="file"
                multiple
                accept="image/*"
              />
            </div>
            <div className="modalSubmitButtonDiv">
              <button type="submit" className="modalSubmitButton" variant="contained">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
