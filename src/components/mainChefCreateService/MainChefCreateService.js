import React, { useState } from 'react'
import './MainChefCreateService.css'
import AddImageIcon from '../../assets/svg/Add-image-video.svg'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal'


const MainChefCreateService = () => {

    const history=useHistory()

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
                        history.push('/chef/feed/service/my-posts')
                    }}  className='my-post-recipe-leave'>Leave</Button>
                    </div>
                </div>
            </Modal>
        <div className='mainChefCreateService'>
            <div className='mainChefCreateService__container'>
                <div className='mainChefCreateService__heading'>
                    <h5>Create Service</h5>
                    <CloseIcon onClick={openModal1} className='post-close-icon' />
                </div>
                <div className='mainChefCreateService__addImage'>
                    <img src={AddImageIcon} />
                </div>
                <div className='mainChefCreateService__cuisine'>
                    <h5>Service Type</h5>
                    <select id='service__type__option'>
                        <option>Delivery</option>
                        <option>Take away</option>
                        <option>Shipping</option>
                    </select>
                </div>
                
                <div className='mainChefCreateService__ingredients'>
                    <h5>Description about Serivce</h5>
                    <textarea rows='7' placeholder='Write all the ingredients' />
                </div>
                <div className='mainChefCreateService__days'>
                    <h5>Service Days and Hours<span>*</span></h5>
                    <select id='service__type__option'>
                        <option>Monday</option>
                        <option>tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                    </select>
                </div>
                <div className='mainChefCreateService__name'>
                    <h5>Price</h5>
                    <input placeholder='Price..' />
                </div>
                <div className='mainChefCreateService__buttons'>
                    <Button onClick={openModal1} className='service-cancel-button'>Cancel</Button>
                    <Button className='service-post-button'>Post</Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainChefCreateService
