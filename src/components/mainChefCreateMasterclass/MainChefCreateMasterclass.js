import React, { useState } from "react";
import "./MainChefCreateMasterclass.css";
// import AddImageIcon from '../../assets/svg/Add-image-video.svg'
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import { cuisineList } from "../mainChefCreateRecipe/mainChefCreateRecipeData";
import { dietsList } from "../mainChefCreateRecipe/mainChefCreateRecipeData";

const MainChefCreateMasterclass = () => {
  const history = useHistory();
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [imageUpload, setImageUpload] = useState("");
  const [masterclassTitle, setMasterclassTitle] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [dietType, setDietType] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [classVideoType, setClassVideoType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [classDuration, setClassDuration] = useState("");
  const [masterclassLocation, setMasterclassLocation] = useState("");
  const [ticketNumber, setTicketNumber] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [getNotify, setGetNotify] = useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case "imageUpload":
        setImageUpload(event.target.value);
        break;
      case "masterclassTitle":
        setMasterclassTitle(event.target.value);
        break;
      case "cuisine":
        setCuisine(event.target.value);
        break;
      case "dietType":
        setDietType(event.target.value);
        break;
      case "description":
        setDescription(event.target.value);
        break;
      case "ingredients":
        setIngredients(event.target.value);
        break;
      case "classVideoType":
        setClassVideoType(event.target.value);
        break;
      case "startDate":
        setStartDate(event.target.value);
        break;
      case "startTime":
        setStartTime(event.target.value);
        break;
      case "classDuration":
        setClassDuration(event.target.value);
        break;
      case "masterclassLocation":
        setMasterclassLocation(event.target.value);
        break;
      case "ticketNumber":
        setTicketNumber(event.target.value);
        break;
      case "ticketPrice":
        setTicketPrice(event.target.value);
        break;
      case "getNotify":
        setGetNotify(event.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (event) => {
    const obj = {
      imageUpload,
      masterclassTitle,
      cuisine,
      dietType,
      description,
      ingredients,
      classVideoType,
      startDate,
      startTime,
      classDuration,
      masterclassLocation,
      ticketNumber,
      ticketPrice,
      getNotify,
    };
    console.log(obj);
  };

  const openModal1 = () => {
    setModalIsOpen1(true);
  };

  const closeModal1 = () => {
    setModalIsOpen1(false);
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={closeModal1}
        className="mypostmodal1"
        contentLabel="Notification Modal"
      >
        <div className="my-post-container">
          <div className="my-post-top">
            <h5>ARE YOU SURE?</h5>
          </div>
          <div className="my-post-center">
            <p>The data you entered will not be saved, are you sure?</p>
          </div>
          <div className="my-post-bottom">
            <Button onClick={closeModal1} className="my-post-recipe-stay">
              Stay
            </Button>
            <Button
              onClick={() => {
                history.push("/chef/feed/masterclass/my-posts");
              }}
              className="my-post-recipe-leave"
            >
              Leave
            </Button>
          </div>
        </div>
      </Modal>
      <div className="mainChefCreateMasterclass">
        <div className="mainChefCreateMasterclass__heading">
          <h5>Create Masterclass</h5>
          <CloseIcon onClick={openModal1} className="post-close-icon" />
        </div>
        <div className="mainChefCreateMasterclass__top">
          <div className="mainChefCreateMasterclass__topLeft">
            <input
              type="file"
              multiple
              required
              name="imageUpload"
              value={imageUpload}
              onChange={handleChange}
            />
          </div>
          <div className="mainChefCreateMasterclass__topRight">
            <div className="mainChefCreateMasterclass__title">
              <h5>
                Masterclass title <span>*</span>
              </h5>
              <input
                required
                name="masterclassTitle"
                value={masterclassTitle}
                onChange={handleChange}
                placeholder="Enter Class Title"
              />
            </div>
            <div className="mainChefCreateMasterclass__cuisine">
              <h5>
                Cuisine<span>*</span>
              </h5>
              <select
                required
                name="cuisine"
                value={cuisine}
                onChange={handleChange}
                id="cuisine__masterclass"
              >
                {cuisineList.map((cuisine1) => (
                  <option>{cuisine1.cuisine}</option>
                ))}
              </select>
            </div>
            <div className="mainChefCreateMasterclass__diet">
              <h5>
                Dietary<span>*</span>
              </h5>
              <select
                required
                name="dietType"
                value={dietType}
                onChange={handleChange}
                id="diet__type__option"
              >
                {dietsList.map((diet) => (
                  <option>{diet.diet}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="mainChefCreateMasterclass__desc">
          <h5>
            Description<span>*</span>
          </h5>
          <textarea
            required
            name="description"
            value={description}
            onChange={handleChange}
            rows="7"
            placeholder="Short description"
          />
        </div>
        <div className="mainChefCreateMasterclass__ingredients">
          <h5>
            Ingredients List<span>*</span>
          </h5>
          <textarea
            required
            name="ingredients"
            value={ingredients}
            onChange={handleChange}
            rows="6"
            placeholder="Short explanation"
          />
        </div>
        <div className="mainChefCreateMasterclass__video">
          <h5>
            Class-Video Type<span>*</span>
          </h5>
          <div className="input__video">
            <div className="input__pre">
              <input
                type="radio"
                id="pre"
                name="classVideoType"
                value={classVideoType}
                onChange={handleChange}
              />
                <label htmlFor="pre">Pre-Recorded Video</label>
            </div>

            <div className="input__live">
              <input
                type="radio"
                id="live"
                name="classVideoType"
                value={classVideoType}
                onChange={handleChange}
              />
                <label htmlFor="live">Live Streaming</label>
            </div>
          </div>
        </div>
        <div className="mainChefCreateMasterclass__date">
          <h5>
            Start Date<span>*</span>
          </h5>
          <div className="input__date">
            <div className="input__select">
              <input
                type="radio"
                id="select"
                name="startDate"
                value={startDate}
                onChange={handleChange}
              />
                <label htmlFor="select">Select Date</label>
            </div>

            <div className="input__request">
              <input
                type="radio"
                id="request"
                name="startDate"
                value={startDate}
                onChange={handleChange}
              />
                <label htmlFor="request">Upon Request</label>
            </div>
          </div>
        </div>
        <div className="mainChefCreateMasterclass__start">
          <h5>
            Start Time<span>*</span>
          </h5>
          <select
            required
            name="startTime"
            value={startTime}
            onChange={handleChange}
            id="diet__type__option"
          >
            <option>1:00 pm</option>
            <option>2:00 pm</option>
            <option>3:00 pm</option>
            <option>4:00 pm</option>
            <option>5:00 pm</option>
          </select>
        </div>
        <div className="mainChefCreateMasterclass__duration">
          <h5>
            Class Duration<span>*</span>
          </h5>
          <select
            required
            name="classDuration"
            value={classDuration}
            onChange={handleChange}
            id="diet__type__option"
          >
            <option>30min</option>
            <option>60min</option>
            <option>90min</option>
            <option>120min</option>
            <option>120min+</option>
          </select>
        </div>
        <div className="mainChefCreateMasterclass__location">
          <h5>
            Masterclass Location <span>*</span>
          </h5>
          <input
            required
            name="masterclassLocation"
            value={masterclassLocation}
            onChange={handleChange}
            placeholder="Location"
          />
        </div>
        <div className="mainChefCreateMasterclass__ticket">
          <h5>
            Ticket/Group number<span>*</span>
          </h5>
          <input
            placeholder="Enter ticket number"
            required
            name="ticketNumber"
            value={ticketNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mainChefCreateMasterclass__price">
          <h5>Price Per Ticket</h5>
          <input
            required
            name="ticketPrice"
            value={ticketPrice}
            onChange={handleChange}
            placeholder="Enter Price"
          />
          <p>$</p>
        </div>
        <div className="mainChefCreateMasterclass__notify">
          <h5>Get Notified in Advance?</h5>
          <div className="input__decision">
            <div className="input__no">
              <input
                type="radio"
                id="no"
                name="getNotify"
                value={getNotify}
                onChange={handleChange}
              />
                <label htmlFor="no">No</label>
            </div>

            <div className="input__yes">
              <input
                type="radio"
                id="yes"
                name="getNotify"
                value={getNotify}
                onChange={handleChange}
              />
                <label htmlFor="yes">Yes</label>
            </div>
          </div>
        </div>
        <div className="mainChefCreateMasterclass__buttons">
          <Button
            onClick={openModal1}
            className="mainChefCreateMasterclass__cancel"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="mainChefCreateMasterclass__post"
          >
            Post
          </Button>
        </div>
      </div>
    </>
  );
};

export default MainChefCreateMasterclass;
