import React, { useState } from "react";
import "./MainChefCreateService.css";
// import AddImageIcon from '../../assets/svg/Add-image-video.svg'
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import "./MainChefCreateServiceModal.css";

const MainChefCreateService = () => {
  const history = useHistory();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen1, setModalIsOpen1] = useState(false);

    const [imageUpload, setImageUpload] = useState("");
    const [serviceType, setServiceType] = useState("");
    const [description,setDescription] = useState('')
    const [serviceDays, setServiceDays] = useState('')
    const [price,setPrice] = useState('')

    const handleChange = (event) => {
        switch (event.target.name) {
          case "description":
            setDescription(event.target.value);
            break;
          case "serviceType":
            setServiceType(event.target.value);
            break;
          case "imageUpload":
            setImageUpload(event.target.value);
            break;
          case "serviceDays":
            setServiceDays(event.target.value);
            break;
            case "price":
            setPrice(event.target.value);
            break;
          default:
            break;
        }
      };
      const handleSubmit = (event) => {
        const obj = {
          description,
          serviceType,
          imageUpload,
          serviceDays,
          price
        };
        console.log(obj);
      };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
                history.push("/chef/feed/service/my-posts");
              }}
              className="my-post-recipe-leave"
            >
              Leave
            </Button>
          </div>
        </div>
      </Modal>
      {/*<Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="myservicetypemodal1"
        contentLabel="Notification Modal"
      >
        <div className="my-service-container">
          <h3>Cook and Deliver</h3>
          <h3>Cook and Ship</h3>
          <h3>Cook for Takeout/Away</h3>
          <h3>Host guests and cook</h3>
          <h3>Go to customers address to cook</h3>
          <h3>Cook Online with Chef</h3>
        </div>
      </Modal> */}
      <div className="mainChefCreateService">
        <div className="mainChefCreateService__container">
          <div className="mainChefCreateService__heading">
            <h5>Create Service</h5>
            <CloseIcon onClick={openModal1} className="post-close-icon" />
          </div>
          <div className="mainChefCreateService__addImage">
            <input multiple required type='file' name="imageUpload" value={imageUpload} onChange={handleChange} />
          </div>
          <div /*onClick={openModal}*/ className="mainChefCreateService__cuisine">
            <h5>Service Type</h5>
            <select required name='serviceType' value={serviceType} onChange={handleChange} id="service__type__option">
                <option>Cook and Deliver</option>
                <option>Cook and Ship</option>
                <option>Cook for Takeout/Away</option>
                <option>Host guests and cook</option>
                <option>Go to customers address to cook</option>
                <option>Cook Online with Chef</option>
            </select>
          </div>

          <div className="mainChefCreateService__ingredients">
            <h5>Description about Serivce</h5>
            <textarea required name='description' value={description} onChange={handleChange} rows="7" placeholder="Write all the ingredients" />
          </div>
          <div className="mainChefCreateService__days">
            <h5>
              Service Days and Hours<span>*</span>
            </h5>
            <select required name='serviceDays' value={serviceDays} onChange={handleChange} id="service__type__option">
              <option>Monday</option>
              <option>tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
          </div>
          <div className="mainChefCreateService__name">
            <h5>Price</h5>
            <input required name='price' value={price} onChange={handleChange} placeholder="Price.." />
          </div>
          <div className="mainChefCreateService__buttons">
            <Button onClick={openModal1} className="service-cancel-button">
              Cancel
            </Button>
            <Button onClick={handleSubmit} className="service-post-button">Post</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainChefCreateService;
