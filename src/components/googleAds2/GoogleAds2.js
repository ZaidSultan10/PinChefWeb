import React from 'react'
import './GoogleAds2.css'
import FilterIcon from '../../assets/svg/Filter-button.svg'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Ads from '../ads/Ads';
import RightArrow from '../../assets/svg/right-arrow-brown.svg'

const GoogleAds2 = ({adsProp,adsProp2}) => {
  return (
    <div className="googleAds2">
      <div className="googleAds__filter2">
          <div className='googleAds__filter__header2'>
              <img src={FilterIcon} alt='filter' />
              <h3>RESET</h3>
          </div>
          {
              adsProp2 && (
                  <>
                        <h4 className='sort__by2'>Location</h4>
                        <div className='googleAds__filter__options2'>
                            <div className='googleAds__filter__most__commented2'>
                                <RadioButtonUncheckedIcon className='active__googleads2 radio' />
                                <p>Current Location</p>
                            </div>
                            <div className='googleAds__filter__most__liked2'>
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
                    <h4 className='diff__by2'>Sort by</h4>
                  </>
              ):(
                 <>
                    <h4 className='sort__by2'>Sort by</h4>
                 </>
              )
          }
          <div className='googleAds__filter__options2'>
              {adsProp && (
                <>
                <div className='googleAds__filter__most__commented2'>
                    <RadioButtonUncheckedIcon className='active__googleads2 radio2' />
                    <p>Most Commented Posts</p>
                </div>
                <div className='googleAds__filter__most__liked2'>
                    <RadioButtonUncheckedIcon className='radio2' />
                    <p>Most Liked Posts</p>
                </div>
                <div className='googleAds__filter__most__liked2'>
                    <RadioButtonUncheckedIcon className='active__googleads2 radio2' />
                    <p>Live Streaming</p>
                </div>
                <div className='googleAds__filter__most__liked2'>
                    <RadioButtonUncheckedIcon className='radio2' />
                    <p>Pre-recorded</p>
                </div>
                </>
              )}
              <div className='googleAds__filter__vip__chef2'>
                <RadioButtonUncheckedIcon className='radio2'  />
                <p>VIP Chefs</p>
              </div>
              <div className='googleAds__filter__top__rated2'>
                <RadioButtonUncheckedIcon className='radio2' />
                <p>Top Rated Chefs</p>
              </div>
              {adsProp2 && (
                <>
                    <div className='googleAds__filter__vip__chef2'>
                        <RadioButtonUncheckedIcon className='radio2 active__googleads2' />
                        <p>Delivery</p>
                    </div>
                    <div className='googleAds__filter__most__liked2'>
                        <RadioButtonUncheckedIcon className='radio2' />
                        <p>Pick Up / Takeaway</p>
                    </div>
                    <div className='googleAds__filter__vip__chef2'>
                        <RadioButtonUncheckedIcon className='radio2' />
                        <p>Shipping Available</p>
                    </div>
                    <div className='googleAds__filter__vip__chef2'>
                        <RadioButtonUncheckedIcon className='radio2' />
                        <p>Invite Chef to your location</p>
                    </div>
                    <div className='googleAds__filter__vip__chef2'>
                        <RadioButtonUncheckedIcon className='radio2' />
                        <p>Chef hosts at chefs location</p>
                    </div>
                    <div className='googleAds__filter__vip__chef2'>
                        <RadioButtonUncheckedIcon className='radio2' />
                        <p>Cook live with chef</p>
                    </div>
                    <div className='googleAds__filter__most__liked2'>
                        <RadioButtonUncheckedIcon className='radio2' />
                        <p>Available Now</p>
                    </div>
                </>
              )}
          </div>
          {adsProp && (<>
              <div className='googleAds__filter__dates2'>
              <h4>Dates</h4>
              <img src={RightArrow} alt='arrow2'/>
            </div>
            <div className='googleAds__filter__date2'>
              <p>25/02/2020 - 27/02/2020</p>
            </div></>
          )}
          {/*filterSearchProp && ( <> */}
          <h4 className='diff__by2'>Cuisines</h4>
          <div className='googleAds__filter__options2'>
              <div className='googleAds__filter__most__commented2'>
                <RadioButtonUncheckedIcon className='active__googleads2 radio2' />
                <p>European</p>
              </div>
              <div className='googleAds__filter__most__liked2'>
                <RadioButtonUncheckedIcon className='radio2' />
                <p>Russian</p>
              </div>
              <div className='googleAds__filter__vip__chef2'>
                <RadioButtonUncheckedIcon className='radio2'  />
                <p>Turkish</p>
              </div>
              <div className='googleAds__filter__top__rated2'>
                <RadioButtonUncheckedIcon className='radio2' />
                <p>Vegan</p>
              </div>
              <div className='googleAds__filter__top__rated2'>
                <RadioButtonUncheckedIcon className='radio2' />
                <p>Vegetarian</p>
              </div>
          </div>
          <h4 className='diff__by2'>Diets</h4>
          <div className='googleAds__filter__options2'>
              <div className='googleAds__filter__most__commented2'>
                <RadioButtonUncheckedIcon className='active__googleads2 radio2' />
                <p>Vegan</p>
              </div>
              <div className='googleAds__filter__most__liked2'>
                <RadioButtonUncheckedIcon className='radio2' />
                <p>Vegetarian</p>
              </div>
              <div className='googleAds__filter__vip__chef2'>
                <RadioButtonUncheckedIcon className='radio2'  />
                <p>Gluten Free</p>
              </div>
              <div className='googleAds__filter__top__rated2'>
                <RadioButtonUncheckedIcon className='radio2' />
                <p>Halal</p>
              </div>
              <div className='googleAds__filter__top__rated2 kosher'>
                <RadioButtonUncheckedIcon className='radio2' />
                <p>Kosher</p>
              </div>
          </div>
          {adsProp2 && (<>
              <div className='googleAds__filter__dates2'>
              <h4>Dates</h4>
              <img src={RightArrow} alt='arrow'/>
            </div>
            <div className='googleAds__filter__date2'>
              <p>25/02/2020 - 27/02/2020</p>
            </div></>
          )}{/* </>)}*/}
      </div>
      <div className='googleAds__ads2'>
          <Ads />
      </div>
      <div className='googleAds__ads2'>
          <Ads />
      </div>
      <div className='googleAds__ads2'>
          <Ads />
      </div>
    </div>
  );
};
export default GoogleAds2;
