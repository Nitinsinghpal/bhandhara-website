import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./Modal.css";
import { db, storage } from "../../Db/firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { format } from "date-fns";
import { Country, State, City } from "country-state-city";

function Modal({ isModalOpen, modalContent, onClose }) {
  const date = new Date();
  const formattedDate = format(date, "MMM dd, yyyy");
  let init = {
    address: "",
    locationLink: "",
    desc: "",
    date: formattedDate,
    country: "",
    state: "",
    city: "",
    image: "",
    verified: false,
  };
  let selectedValueInit = { country: "IN", state: "HR", city: "" };
  let dataToSave = {};
  let CountryOptions = [];
  let StatesOptions = [];
  let CitiesOptions = [];
  let optionSelected = "";

  let countries;
  let StatesOfCountry;
  let CitiesOfState;
  const [formData, setFormData] = useState(init);
  const [selectedValue, setSelectedValue] = useState(selectedValueInit);
  const [buttonClicked, setButtonClicked] = useState(false);

  
  // const [imageUrl, setImageUrl] = useState();

  countries = Country.getAllCountries();
  useEffect(() => {
    DropDownData(optionSelected);
  }, [selectedValue]);

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
    }).then((d)=>{
setButtonClicked(false)
alert(
  "Your post will add after verification, Thanks for your contribution"
);
    }).catch((e)=>{
      console.log(e)
    });
    onClose();
   

    setFormData(init);
  }
  async function submitForm(event) {
    event.preventDefault();
    setButtonClicked(true)
    const file = event.target[7].files[0];
    await UploadImage(file);
  }
  function DropDownData(CSC) {
    switch (CSC) {
      case "country":
        countries = Country.getAllCountries();
        return DropDownOptions(countries, CountryOptions);
        break;
      case "state":
        StatesOfCountry = State.getStatesOfCountry(selectedValue.country);
        return DropDownOptions(StatesOfCountry, StatesOptions);

        break;
      case "city":
        CitiesOfState = City.getCitiesOfState(
          selectedValue.country,
          selectedValue.state
        );
        return DropDownOptions(CitiesOfState, CitiesOptions);
        break;

      default:
        break;
    }
  }
  function DropDownOptions(params, optionsArray) {
    if (params != null && params != undefined) {
      params.map((d) => {
        optionsArray.push(<option className="fields-option" value={d.isoCode}>{d.name}</option>);
      });
      return optionsArray;
    } else {
      return <option className="fields-option" value="selectValue">Select value</option>;
    }
  }
  function handleDropDownChange(event) {
    setSelectedValue({
      ...selectedValue,
      [event.target.name]: event.target.value,
    });
    optionSelected = event.target.name;  // For dropDownData that is passed in useEffect
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <div id="modal" className="modal-main">
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
                className="inputFields"
                value={formData.address}
                onChange={changeHandler}
              />
            </div>
            <div className="field">
              <div className="labelDiv">
                <label for="country">Country</label>
              </div>
              <select
                name="country"
                className="inputFields"
                value={formData.country}
                onChange={handleDropDownChange}
              >
                <option className="fields-option" selected>select country</option>
                {DropDownData("country")}
              </select>
            </div>
            <div className="field">
              <div className="labelDiv">
                <label for="state">State</label>
              </div>
              <select
                name="state"
                className="inputFields"
                value={formData.state}
                onChange={handleDropDownChange}
              >
                <option selected>select state</option>

                {DropDownData("state")}
              </select>
            </div>
            <div className="field">
              <div className="labelDiv">
                <label for="city">City</label>
              </div>
              <select
                name="city"
                className="inputFields"
                value={formData.city}
                onChange={handleDropDownChange}
              >
                <option selected>select city</option>

                {DropDownData("city")}
              </select>
            </div>
            <div className="field">
              <div className="labelDiv">
                <label for="locationLink">Location Link</label>
              </div>
              <input
                name="locationLink"
                type="text"
                className="inputFields"
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
                <label for="date">Date</label>
              </div>
              <input
                name="date"
                type="date"
                className="inputFields"
                value={formData.date}
                onChange={changeHandler}
              />
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
                className="field-image"
              />
            </div>
            <div className="modalSubmitButtonDiv">
              <button
                type="submit"
                className="modalSubmitButton"
                variant="contained"
              >
                 {buttonClicked ? (
                <i class="fa fa-spinner fa-spin"></i>
              ) : (
                "Submit"
              )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
