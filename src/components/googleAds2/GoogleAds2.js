import React from 'react'
import './GoogleAds2.css'
import FilterIcon from '../../assets/svg/Filter-button.svg'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Ads from '../ads/Ads';
import RightArrow from '../../assets/svg/right-arrow-brown.svg'

const GoogleAds2 = ({adsProp,adsProp2}) => {
  return (
    <div className="googleAds">
      <div className="googleAds__filter">
          <div className='googleAds__filter__header'>
              <img src={FilterIcon} alt='filter' />
              <h3>RESET</h3>
          </div>
          {
              adsProp2 && (
                  <>
                        <h4 className='sort__by'>Location</h4>
                        <div className='googleAds__filter__options'>
                            <div className='googleAds__filter__most__commented'>
                                <RadioButtonUncheckedIcon className='active1 radio' />
                                <p>Current Location</p>
                            </div>
                            <div className='googleAds__filter__most__liked'>
                                <RadioButtonUncheckedIcon className='radio' />
                                <p>Select</p>
                            </div>
                        </div>
                  </>
              )
          }
          {
              adsProp2 ? (
                  <>
                    <h4 className='diff__by'>Sort by</h4>
                  </>
              ):(
                 <>
                    <h4 className='sort__by'>Sort by</h4>
                 </>
              )
          }
          <div className='googleAds__filter__options'>
              {adsProp && (
                <>
                <div className='googleAds__filter__most__commented'>
                    <RadioButtonUncheckedIcon className='active1 radio' />
                    <p>Most Commented Posts</p>
                </div>
                <div className='googleAds__filter__most__liked'>
                    <RadioButtonUncheckedIcon className='radio' />
                    <p>Most Liked Posts</p>
                </div>
                <div className='googleAds__filter__most__liked'>
                    <RadioButtonUncheckedIcon className='active1 radio' />
                    <p>Live Streaming</p>
                </div>
                <div className='googleAds__filter__most__liked'>
                    <RadioButtonUncheckedIcon className='radio' />
                    <p>Pre-recorded</p>
                </div>
                </>
              )}
              <div className='googleAds__filter__vip__chef'>
                <RadioButtonUncheckedIcon className='radio'  />
                <p>VIP Chefs</p>
              </div>
              <div className='googleAds__filter__top__rated'>
                <RadioButtonUncheckedIcon className='radio' />
                <p>Top Rated Chefs</p>
              </div>
              {adsProp2 && (
                <>
                    <div className='googleAds__filter__vip__chef'>
                        <RadioButtonUncheckedIcon className='radio active1' />
                        <p>Delivery</p>
                    </div>
                    <div className='googleAds__filter__most__liked'>
                        <RadioButtonUncheckedIcon className='radio' />
                        <p>Pick Up / Takeaway</p>
                    </div>
                    <div className='googleAds__filter__vip__chef'>
                        <RadioButtonUncheckedIcon className='radio' />
                        <p>Shipping Available</p>
                    </div>
                    <div className='googleAds__filter__vip__chef'>
                        <RadioButtonUncheckedIcon className='radio' />
                        <p>Invite Chef to your location</p>
                    </div>
                    <div className='googleAds__filter__vip__chef'>
                        <RadioButtonUncheckedIcon className='radio' />
                        <p>Chef hosts at chefs location</p>
                    </div>
                    <div className='googleAds__filter__vip__chef'>
                        <RadioButtonUncheckedIcon className='radio' />
                        <p>Cook live with chef</p>
                    </div>
                    <div className='googleAds__filter__most__liked'>
                        <RadioButtonUncheckedIcon className='radio' />
                        <p>Available Now</p>
                    </div>
                </>
              )}
          </div>
          {adsProp && (<>
              <div className='googleAds__filter__dates'>
              <h4>Dates</h4>
              <img src={RightArrow} alt='arrow'/>
            </div>
            <div className='googleAds__filter__date'>
              <p>25/02/2020 - 27/02/2020</p>
            </div></>
          )}
          {/*filterSearchProp && ( <> */}
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
          </div>
          {adsProp2 && (<>
              <div className='googleAds__filter__dates'>
              <h4>Dates</h4>
              <img src={RightArrow} alt='arrow'/>
            </div>
            <div className='googleAds__filter__date'>
              <p>25/02/2020 - 27/02/2020</p>
            </div></>
          )}{/* </>)}*/}
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
export default GoogleAds2;
