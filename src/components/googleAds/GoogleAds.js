import React, { useState } from "react";
import "./GoogleAds.css";
//import FilterUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import Ads from "../ads/Ads";
import RightArrow from "../../assets/svg/right-arrow-brown.svg";
import DatePicker from "../datePicker/DatePicker";
import Modal from "react-modal";
//import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {ReactComponent as FilterUnchecked} from '../../assets/svg/outline.svg'
import {ReactComponent as FilterChecked} from '../../assets/svg/fill-yellow.svg'



const GoogleAds = ({filterSearchProp}) => {
  
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [selectFilter, setSelectFilter] = useState(1)

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="datepickermodal"
        contentLabel="Example Modal"
      >
        <DatePicker />
      </Modal>
      <div className="googleAds">
        <div className="googleAds__filter">
          <div className="googleAds__filter__header">
            <h4 className="sort__by">Sort by</h4>
            <h3 onClick={() => setSelectFilter(1)}>RESET</h3>
          </div>
          
          <div className="googleAds__filter__options">
            <div className="googleAds__filter__most__commented">
              {
                selectFilter === 1 ? (
                  <FilterUnchecked className="radio" onClick={() => setSelectFilter(0)} />
              
                )  : (
                  <FilterChecked className="radio filled-circle" onClick={() => setSelectFilter(1)} />
                )
              }
              
              <p>Most Commented Posts</p>
            </div>
            <div className="googleAds__filter__most__liked">
              
              <FilterUnchecked className="radio" />
              <p>Most Liked Posts</p>
            </div>
            <div className="googleAds__filter__vip__chef">
              <FilterUnchecked className="radio" />
              <p>VIP Chefs</p>
            </div>
            <div className="googleAds__filter__top__rated">
              <FilterUnchecked className="radio" />
              <p>Top Rated Chefs</p>
            </div>
          </div>
          {filterSearchProp && (
            <>
              <h4 className="diff__by">Difficulty Level</h4>
              <div className="googleAds__filter__options">
                <div className="googleAds__filter__most__commented">
                  <FilterUnchecked className="active1 radio" />
                  <p>Easy</p>
                </div>
                <div className="googleAds__filter__most__liked">
                  <FilterUnchecked className="radio" />
                  <p>Medium</p>
                </div>
                <div className="googleAds__filter__vip__chef">
                  <FilterUnchecked className="radio" />
                  <p>Hard</p>
                </div>
              </div>
              <h4 className="diff__by">Cooking Time</h4>
              <div className="googleAds__filter__options">
                <div className="googleAds__filter__most__commented">
                  <FilterUnchecked className="active1 radio" />
                  <p>1min - 30min</p>
                </div>
                <div className="googleAds__filter__most__liked">
                  <FilterUnchecked className="radio" />
                  <p>30min - 60min</p>
                </div>
                <div className="googleAds__filter__vip__chef">
                  <FilterUnchecked className="radio" />
                  <p>60min - 120min</p>
                </div>
                <div className="googleAds__filter__top__rated">
                  <FilterUnchecked className="radio" />
                  <p>120min & more</p>
                </div>
              </div>
              <h4 className="diff__by">Cuisines</h4>
              <div className="googleAds__filter__options">
                <div className="googleAds__filter__most__commented">
                  <FilterUnchecked className="active1 radio" />
                  <p>European</p>
                </div>
                <div className="googleAds__filter__most__liked">
                  <FilterUnchecked className="radio" />
                  <p>Russian</p>
                </div>
                <div className="googleAds__filter__vip__chef">
                  <FilterUnchecked className="radio" />
                  <p>Turkish</p>
                </div>
                <div className="googleAds__filter__top__rated">
                  <FilterUnchecked className="radio" />
                  <p>Vegan</p>
                </div>
                <div className="googleAds__filter__top__rated">
                  <FilterUnchecked className="radio" />
                  <p>Vegetarian</p>
                </div>
              </div>
              <h4 className="diff__by">Diets</h4>
              <div className="googleAds__filter__options">
                <div className="googleAds__filter__most__commented">
                  <FilterUnchecked className="active1 radio" />
                  <p>Vegan</p>
                </div>
                <div className="googleAds__filter__most__liked">
                  <FilterUnchecked className="radio" />
                  <p>Vegetarian</p>
                </div>
                <div className="googleAds__filter__vip__chef">
                  <FilterUnchecked className="radio" />
                  <p>Gluten Free</p>
                </div>
                <div className="googleAds__filter__top__rated">
                  <FilterUnchecked className="radio" />
                  <p>Halal</p>
                </div>
                <div className="googleAds__filter__top__rated kosher">
                  <FilterUnchecked className="radio" />
                  <p>Kosher</p>
                </div>
              </div>{" "}
            </>
          )}
          {!filterSearchProp && (
            <>
              <div onClick={openModal} className="googleAds__filter__dates">
                <h4>Dates</h4>
                <img src={RightArrow} alt="arrow" />
              </div>
              <div className="googleAds__filter__date">
                <p>25/02/2020 - 27/02/2020</p>
              </div>
            </>
          )}
        </div>
        <div className="googleAds__ads">
          <Ads />
        </div>
        <div className="googleAds__ads">
          <Ads />
        </div>
        <div className="googleAds__ads">
          <Ads />
        </div>
      </div>
    </>
  );
};
export default GoogleAds;
