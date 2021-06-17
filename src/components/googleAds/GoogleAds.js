import React from 'react'
import './GoogleAds.css'
import FilterIcon from '../../assets/svg/Filter-button.svg'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Ads from '../ads/Ads';
import RightArrow from '../../assets/svg/right-arrow-brown.svg'

const GoogleAds = () => {
  return (
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
          <div className='googleAds__filter__dates'>
              <h4>Dates</h4>
              <img src={RightArrow} alt='arrow'/>
          </div>
          <div className='googleAds__filter__date'>
              <p>25/02/2020 - 27/02/2020</p>
          </div>
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
  );
};
export default GoogleAds;
