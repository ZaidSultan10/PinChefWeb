import React, {useState} from 'react'
import './GoogleAds.css'
import FilterIcon from '../../assets/svg/Filter-button.svg'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Ads from '../ads/Ads';
import RightArrow from '../../assets/svg/right-arrow-brown.svg'
import DatePicker from '../datePicker/DatePicker';
import Modal from 'react-modal'


const GoogleAds = ({filterSearchProp}) => {
  
  const [showSearch, setShowSearch] =useState(false);
  const [isModalOpen,setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
    <Modal isOpen={isModalOpen}
    onRequestClose={closeModal}
    
    className='datepickermodal'
    contentLabel="Example Modal">
        <DatePicker />
    </Modal>
    <div className="googleAds">
      <div className="googleAds__filter">
          <div className='googleAds__filter__header'>
              <img src={FilterIcon} alt='filter' />
              <h3>RESET</h3>
          </div>
          <h4 className='sort__by'>Sort by</h4>
          <div className='googleAds__filter__options'>
              <div className='googleAds__filter__most__commented'>
                <RadioButtonUncheckedIcon className='active1 radio' />
                <p>Most Commented Posts</p>
              </div>
              <div className='googleAds__filter__most__liked'>
                <RadioButtonUncheckedIcon className='radio' />
                <p>Most Liked Posts</p>
              </div>
              <div className='googleAds__filter__vip__chef'>
                <RadioButtonUncheckedIcon className='radio'  />
                <p>VIP Chefs</p>
              </div>
              <div className='googleAds__filter__top__rated'>
                <RadioButtonUncheckedIcon className='radio' />
                <p>Top Rated Chefs</p>
              </div>
          </div>
          {filterSearchProp && ( <>
          <h4 className='diff__by'>Difficulty Level</h4>
          <div className='googleAds__filter__options'>
              <div className='googleAds__filter__most__commented'>
                <RadioButtonUncheckedIcon className='active1 radio' />
                <p>Easy</p>
              </div>
              <div className='googleAds__filter__most__liked'>
                <RadioButtonUncheckedIcon className='radio' />
                <p>Medium</p>
              </div>
              <div className='googleAds__filter__vip__chef'>
                <RadioButtonUncheckedIcon className='radio'  />
                <p>Hard</p>
              </div>
          </div>
          <h4 className='diff__by'>Cooking Time</h4>
          <div className='googleAds__filter__options'>
              <div className='googleAds__filter__most__commented'>
                <RadioButtonUncheckedIcon className='active1 radio' />
                <p>1min - 30min</p>
              </div>
              <div className='googleAds__filter__most__liked'>
                <RadioButtonUncheckedIcon className='radio' />
                <p>30min - 60min</p>
              </div>
              <div className='googleAds__filter__vip__chef'>
                <RadioButtonUncheckedIcon className='radio'  />
                <p>60min - 120min</p>
              </div>
              <div className='googleAds__filter__top__rated'>
                <RadioButtonUncheckedIcon className='radio' />
                <p>120min & more</p>
              </div>
          </div>
          <h4 className='diff__by'>Cuisines</h4>
          <div className='googleAds__filter__options'>
              <div className='googleAds__filter__most__commented'>
                <RadioButtonUncheckedIcon className='active1 radio' />
                <p>European</p>
              </div>
              <div className='googleAds__filter__most__liked'>
                <RadioButtonUncheckedIcon className='radio' />
                <p>Russian</p>
              </div>
              <div className='googleAds__filter__vip__chef'>
                <RadioButtonUncheckedIcon className='radio'  />
                <p>Turkish</p>
              </div>
              <div className='googleAds__filter__top__rated'>
                <RadioButtonUncheckedIcon className='radio' />
                <p>Vegan</p>
              </div>
              <div className='googleAds__filter__top__rated'>
                <RadioButtonUncheckedIcon className='radio' />
                <p>Vegetarian</p>
              </div>
          </div>
          <h4 className='diff__by'>Diets</h4>
          <div className='googleAds__filter__options'>
              <div className='googleAds__filter__most__commented'>
                <RadioButtonUncheckedIcon className='active1 radio' />
                <p>Vegan</p>
              </div>
              <div className='googleAds__filter__most__liked'>
                <RadioButtonUncheckedIcon className='radio' />
                <p>Vegetarian</p>
              </div>
              <div className='googleAds__filter__vip__chef'>
                <RadioButtonUncheckedIcon className='radio'  />
                <p>Gluten Free</p>
              </div>
              <div className='googleAds__filter__top__rated'>
                <RadioButtonUncheckedIcon className='radio' />
                <p>Halal</p>
              </div>
              <div className='googleAds__filter__top__rated kosher'>
                <RadioButtonUncheckedIcon className='radio' />
                <p>Kosher</p>
              </div>
          </div> </>)}
          {!filterSearchProp && (
            <>
            
                <div onClick={openModal}
                 className='googleAds__filter__dates'>
                  <h4 >
                    Dates
                  </h4>
                  <img src={RightArrow} alt='arrow'/>
                </div>
                <div className='googleAds__filter__date'>
                  <p>25/02/2020 - 27/02/2020</p>
                </div>
            </>
          )}
      </div>
      <div className='googleAds__ads'>
          <Ads />
      </div>
      <div className='googleAds__ads'>
          <Ads />
      </div>
      <div className='googleAds__ads'>
          <Ads />
      </div>
    </div>
    </>
  );
};
export default GoogleAds;
