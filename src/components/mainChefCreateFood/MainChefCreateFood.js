import React, { useState } from 'react'
import './MainChefCreateFood.css'
import AddImageIcon from '../../assets/svg/Add-image-video.svg'
import CloseIcon from '@material-ui/icons/Close';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import DownIcon from '../../assets/svg/Down-button-green.svg'
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal'
import { SearchOutlined } from '@material-ui/icons';
import cuisineDatas from './mainChefCuisineList';
import './MainChefCreateFoodModal.css'



const MainChefCreateFood = () => {

    const history=useHistory()

    const [modalIsOpen,setModalIsOpen] = useState(false)
    const [modalIsOpen1,setModalIsOpen1] = useState(false)
    const [modalIsOpen2,setModalIsOpen2] = useState(false)


    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const openModal1 =() => {
        setModalIsOpen1(true)
    }

    const closeModal1 = () => {
        setModalIsOpen1(false)
    }

    const openModal2 =() => {
        setModalIsOpen2(true)
    }

    const closeModal2 = () => {
        setModalIsOpen2(false)
    }

    const serviceDays = [{
        day:'Monday'
    },{
        day:'Tuesday'
    },{
        day:'Wednesday'
    },{
        day:'Thursday'
    },{
        day:'Friday'
    },{
        day:'Saturday'
    },{
        day:'Sunday'
    }]

    return (
        <>
        <Modal isOpen={modalIsOpen1}
            onRequestClose={closeModal1}
            
            className='mypostmodal1'
            contentLabel="Notification Modal">
                <div className='my-post-container'>
                    <div className='my-post-top'>
                        <h5>ARE YOU SURE?</h5>
                        
                    </div>
                    <div className='my-post-center'>
                        <p>
                            The data you entered
                            will not be saved, are you sure?
                        </p>
                    </div>
                    <div className='my-post-bottom'>
                        <Button onClick={closeModal1} className='my-post-recipe-stay'>Stay</Button>
                        <Button onClick={() => {
                        history.push('/chef/feed/food/my-posts')
                    }}  className='my-post-recipe-leave'>Leave</Button>
                    </div>
                </div>
            </Modal>
            <Modal isOpen={modalIsOpen}
            onRequestClose={closeModal}
            
            className='mycuisinemodal1'
            contentLabel="Notification Modal">
                <div className='my-cuisine-container'>
                    <div className='my-cuisine-search'>
                        <input placeholder='Search' />
                        <SearchOutlined className='my-cuisine-icon' />
                    </div>
                    <div className='my-cuisine-list'>
                        {
                            cuisineDatas.map((cuisineData) => (
                                <h4>{cuisineData.cuisine}</h4>
                            ))
                        }
                    </div>
                </div>
            </Modal>
            <Modal isOpen={modalIsOpen2}
            onRequestClose={closeModal2}
            
            className='servicedaymodal1'
            contentLabel="Notification Modal">
                <div className='service-day-container'>
                    <div className='service-day-heading'>
                        <h3>Service Days & Hours</h3>
                    </div>
                    <div>
                        {
                            serviceDays.map((serviceDay) => (
                                    <div className='service-monday'>
                                        <div className='service-monday-heading'>
                                            <h4>{serviceDay.day}</h4>
                                        </div>
                                        <div className='service-monday-toggle'>
                                            <label class="switch1">
                                                <input type="checkbox" className='input1' />
                                                <span class="slider1"></span>
                                            </label>
                                        </div>
                                        <div className='service-monday-time'>
                                            <p className='st'>9:00 AM</p>
                                            <p>-</p>
                                            <p className='et'>20:00 PM</p>
                                        </div>
                                        <div className='service-add-time'>
                                            <h4>+</h4>
                                        </div>
                                    </div>
                            ))
                        }
                        
                    </div>
                </div>
            </Modal>
        <div className='mainChefCreateFood'>
            <div className='mainChefCreateFood__container'>
                <div className='mainChefCreateFood__heading'>
                    <h5>Create Food</h5>
                    <CloseIcon onClick={openModal1} className='post-close-icon' />
                </div>
                <div className='mainChefCreateFood__addImage'>
                    <img src={AddImageIcon} />
                </div>
                <div className='mainChefCreateFood__name'>
                    <h5>Food Item Name</h5>
                    <input placeholder='Enter Food Title' />
                </div>
                <div onClick={openModal} className='mainChefCreateFood__cuisine'>
                    <h5>Cuisine Type</h5>
                    <select disabled id='cuisine__type__option'>
                        <option>Cuisine Specialities</option>
                        
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
                <div onClick={openModal2} className='mainChefCreateFood__cuisine'>
                    <h5>Service Days and Hours<span>*</span></h5>
                    <select id='service__type__option'>
                        <option>Select an Option</option>
                        
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
        </>
    )
}

export default MainChefCreateFood
