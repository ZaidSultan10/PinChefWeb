import React from 'react'
import './MainChefCreateFood.css'
import AddImageIcon from '../../assets/svg/Add-image-video.svg'
import CloseIcon from '@material-ui/icons/Close';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import DownIcon from '../../assets/svg/Down-button-green.svg'
import { useHistory } from 'react-router-dom';

const MainChefCreateFood = () => {

    const history=useHistory()

    return (
        <div className='mainChefCreateFood'>
            <div className='mainChefCreateFood__container'>
                <div className='mainChefCreateFood__heading'>
                    <h5>Create Food</h5>
                    <CloseIcon onClick={() => {
                        history.push('/chef/feed/food/my-posts')
                    }} className='post-close-icon' />
                </div>
                <div className='mainChefCreateFood__addImage'>
                    <img src={AddImageIcon} />
                </div>
                <div className='mainChefCreateFood__name'>
                    <h5>Food Item Name</h5>
                    <input placeholder='Enter Food Title' />
                </div>
                <div className='mainChefCreateFood__cuisine'>
                    <h5>Cuisine Type</h5>
                    <select id='cuisine__type__option'>
                        <option>European</option>
                        <option>Turkish</option>
                        <option>Russian</option>
                        <option>Arabic</option>
                        <option>Indian</option>
                    </select>
                </div>
                <div className='mainChefCreateFood__diet'>
                    <h5>Diet Type</h5>
                    <select id='diet__type__option'>
                        <option>Vegan</option>
                        <option>Vegetarian</option>
                        <option>Halal</option>
                        <option>Kashar</option>
                        <option>Meat</option>
                    </select>
                </div>
                <div className='mainChefCreateFood__ingredients'>
                    <h5>Description & Ingredients</h5>
                    <textarea rows='7' placeholder='Write all the ingredients' />
                </div>
                <div className='mainChefCreateFood__calory'>
                    <h5>Calories</h5>
                    <input placeholder='363' />
                </div>
                <div className='mainChefCreateFood__cuisine'>
                    <h5>Service Days and Hours<span>*</span></h5>
                    <select id='service__type__option'>
                        <option>Monday</option>
                        <option>tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                    </select>
                </div>
                <div className='mainChefCreateFood__name'>
                    <h5>Price</h5>
                    <input placeholder='Price..' />
                </div>
                <div className='mainChefCreateFood__level'>
                  <h5>Available for Service<span>*</span></h5>
                  <div className='input__options__food'>
                      <div className='input__easy__food'>
                          <input type="radio" id="takeaway" name="level" value="takeaway" />
                          <label for="takeaway">Takeaway</label>
                      </div>
                      <div className='input__medium__food'>
                          <input type="radio" id="delivery" name="level" value="delivery"/>
                          <label for="delivery">Delivery</label>
                          <div className='delivery-fee'>
                            <h5>Fee:</h5>
                            <p>$</p>
                            <form>
                                <FormControl>
                                    <InputLabel>Enter Delivery Fee</InputLabel>
                                    <Input />
                                </FormControl>
                            </form>
                          </div>
                      </div>
                      <div className='input__hard__food'>
                          <input type="radio" id="shipping" name="level" value="shipping"/>
                          <label for="shipping">Shipping</label>
                          <div className='shipping-fee'>
                            <h5>Fee:</h5>
                            <p>$</p>
                            <form>
                                <FormControl>
                                    <InputLabel>Enter Delivery Fee</InputLabel>
                                    <Input />
                                </FormControl>
                            </form>
                          </div>
                      </div>
                  </div>
                  
                </div>
            </div>
        </div>
    )
}

export default MainChefCreateFood
