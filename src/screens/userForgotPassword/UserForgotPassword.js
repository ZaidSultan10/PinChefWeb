import React, { useState } from 'react'
import './UserForgotPassword.css'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import Modal from 'react-modal'
import SentEmailIcon from '../../assets/svg-for-user-profile/Check_email_icon.svg'
import './UserForgotPasswordModal.css'



const UserForgotPassword = () => {

    const history=useHistory()

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
            
            className='forgotmodal1'
            contentLabel="Notification Modal">

                <div className='forgot-container'>
                    <div className='forgot-top'>
                        <img src={SentEmailIcon} />
                    </div>
                    <div className='forgot-center'>
                        <h5>Check your email to reset
                            your password
                        </h5>
                    </div>
                    <div className='forgot-bottom'>
                        <div onClick={() => {
                        history.push('/user/verification')
                    }} className='forgot-button-container'>
                            <h5 >OK</h5>
                        </div>
                    </div>
                </div>


        </Modal>
        <div className='userForgotPassword'>
            <div className='userForgotPassword__container'>
                <div className='userForgotPassword__header'>
                    <img src={LeftIcon} />
                    <h4>Forgot Password</h4>
                </div>
                <div className='userForgotPassword__input'>
                    <h5>Email/ID</h5>
                    <input type='text' placeholder='Enter email of ID' />
                </div>
                <div className='userForgotPassword__button'>
                    <Button onClick={openModal}>Continue</Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserForgotPassword
