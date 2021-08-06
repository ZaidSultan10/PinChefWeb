import ChevronRight from '@material-ui/icons/ChevronRight'
import React, { useState } from 'react'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import ContactUsIcon from '../../assets/svg/Contact-us.svg'
import './MainContactUs.css'
import { Button } from '@material-ui/core'
import Modal from 'react-modal'
import TickIcon from '../../assets/svg/tick-mark-Success.svg'
import './MainContactUsModal.css'



const MainContactUs = () => {

    const [modalIsOpen,setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    return (
        <>
        <Modal isOpen={modalIsOpen}
            onRequestClose={closeModal}
            
            className='messagesentmodal1'
            contentLabel="Notification Modal">

                <div className='message-container'>
                    <div className='message-top'>
                        <h5>.</h5>
                        <h4 onClick={closeModal}>x</h4>
                    </div>
                    <div className='message-center'>
                        <img src={TickIcon} alt='star' />
                    </div>
                    <div className='message-bottom'>
                        <h5>Message was successfully sent.
                            Team will get back to you in 24 hours.
                        </h5>
                    </div>
                </div>

        </Modal>
        <div className='mainContactUs'>
            <div className='mainContactUs__header'>
                <img src={LeftIcon} alt='star' />
                <div className='mainContactUs__contact'>
                    <img src={ContactUsIcon} alt='star' />
                    <h5>CONTACT US</h5>
                </div>
            </div>
            <div className='mainContactUs__top'>
                <div className='mainContactUs__icon'>
                    <ChevronRight className='mainContactUs__right' />
                </div>
                <h5>Please fill the form below and submit
                        suggestion, feedback, or any
                        advertisement related questions
                </h5>
            </div>
            <div className='mainContactUs__name'>
                <h5>Name</h5>
                <input placeholder='Enter Name' />
            </div>
            <div className='mainContactUs__email'>
                <h5>Email</h5>
                <input placeholder='Enter Email' />
            </div>
            <div className='mainContactUs__subject'>
                <h5>Subject</h5>
                <input placeholder='Enter Subject' />
            </div>
            <div className='mainContactUs__message'>
                <h5>Message</h5>
                <textarea rows='7' placeholder='Enter Message' />
            </div>
            <div className='mainContactUs__button'>
                <Button onClick={openModal} >Send</Button>
            </div>
        </div>
        </>
    )
}

export default MainContactUs
