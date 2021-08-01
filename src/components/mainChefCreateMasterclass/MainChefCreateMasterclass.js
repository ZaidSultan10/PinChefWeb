import React, { useState } from 'react'
import './MainChefCreateMasterclass.css'
import AddImageIcon from '../../assets/svg/Add-image-video.svg'
import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal'

const MainChefCreateMasterclass = () => {
    
    const history = useHistory()
    const [modalIsOpen1,setModalIsOpen1] = useState(false)

    const openModal1 =() => {
        setModalIsOpen1(true)
    }

    const closeModal1 = () => {
        setModalIsOpen1(false)
    }
    
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
                        history.push('/chef/feed/masterclass/my-posts')
                    }}  className='my-post-recipe-leave'>Leave</Button>
                    </div>
                </div>
            </Modal>
        <div className='mainChefCreateMasterclass'>
            <div className='mainChefCreateMasterclass__heading'>
                    <h5>Create Masterclass</h5>
                    <CloseIcon onClick={openModal1} className='post-close-icon' />
            </div>
            <div className='mainChefCreateMasterclass__top'>
                <div className='mainChefCreateMasterclass__topLeft'>
                    <img src={AddImageIcon} />
                </div>
                <div className='mainChefCreateMasterclass__topRight'>
                    <div className='mainChefCreateMasterclass__title'>
                        <h5>Masterclass title <span>*</span></h5>
                        <input placeholder='Enter Class Title' />
                    </div>
                    <div className='mainChefCreateMasterclass__cuisine'>
                        <h5>Cuisine<span>*</span></h5>
                        <select id='cuisine__masterclass'>
                            <option>European</option>
                            <option>Turkish</option>
                            <option>Russian</option>
                            <option>Arabic</option>
                            <option>Indian</option>
                        </select>
                    </div>
                    <div className='mainChefCreateMasterclass__diet'>
                        <h5>Dietary<span>*</span></h5>
                        <select id='diet__type__option'>
                            <option>Vegan</option>
                            <option>Vegetarian</option>
                            <option>Halal</option>
                            <option>Kashar</option>
                            <option>Meat</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='mainChefCreateMasterclass__desc'>
                <h5>Description<span>*</span></h5>
                <textarea rows='7' placeholder='Short description' />
            </div>
            <div className='mainChefCreateMasterclass__ingredients'>
                <h5>Ingredients List<span>*</span></h5>
                <textarea rows='6' placeholder='Short explanation' />
            </div>
            <div className='mainChefCreateMasterclass__video'>
                <h5>Class-Video Type<span>*</span></h5>
                  <div className='input__video'>
                      <div className='input__pre'>
                          <input type="radio" id="pre" name="level" value="pre" />
                          <label for="pre">Pre-Recorded Video</label>
                      </div>
                      
                      <div className='input__live'>
                          <input type="radio" id="live" name="level" value="live"/>
                          <label for="live">Live Streaming</label>
                      </div>
                  </div>
            </div>
            <div className='mainChefCreateMasterclass__date'>
                <h5>Start Date<span>*</span></h5>
                  <div className='input__date'>
                      <div className='input__select'>
                          <input type="radio" id="select" name="level" value="select" />
                          <label for="select">Select Date</label>
                      </div>
                      
                      <div className='input__request'>
                          <input type="radio" id="request" name="level" value="request"/>
                          <label for="request">Upon Request</label>
                      </div>
                  </div>
            </div>
            <div className='mainChefCreateMasterclass__start'>
                <h5>Start Time<span>*</span></h5>
                <select id='diet__type__option'>
                    <option>1:00 pm</option>
                    <option>2:00 pm</option>
                    <option>3:00 pm</option>
                    <option>4:00 pm</option>
                    <option>5:00 pm</option>
                </select>
            </div>
            <div className='mainChefCreateMasterclass__duration'>
                <h5>Class Duation<span>*</span></h5>
                <select id='diet__type__option'>
                    <option>30min</option>
                    <option>60min</option>
                    <option>90min</option>
                    <option>120min</option>
                    <option>120min+</option>
                </select>
            </div>
            <div className='mainChefCreateMasterclass__location'>
                <h5>Masterclass Location <span>*</span></h5>
                <input placeholder='Location' />
            </div>
            <div className='mainChefCreateMasterclass__ticket'>
                <h5>Ticket/Group number<span>*</span></h5>
                <select id='diet__type__option'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className='mainChefCreateMasterclass__price'>
                <h5>Price Per Ticket</h5>
                <input placeholder='Enter Price' />
                <p>$</p>
            </div>
            <div className='mainChefCreateMasterclass__notify'>
                <h5>Get Notified in Advance?</h5>
                  <div className='input__decision'>
                      <div className='input__no'>
                          <input type="radio" id="no" name="level" value="no" />
                          <label for="no">No</label>
                      </div>
                      
                      <div className='input__yes'>
                          <input type="radio" id="yes" name="level" value="yes"/>
                          <label for="yes">Yes</label>
                      </div>
                  </div>
            </div>
            <div className='mainChefCreateMasterclass__buttons'>
                <Button onClick={openModal1} className='mainChefCreateMasterclass__cancel'>Cancel</Button>
                <Button className='mainChefCreateMasterclass__post'>Post</Button>
            </div>
        </div>
        </>
    )
}

export default MainChefCreateMasterclass
