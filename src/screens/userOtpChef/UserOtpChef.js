import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import './UserOtpChef.css'
import { useHistory } from 'react-router-dom'
import './UserOtpChefModal.css'
import Modal from 'react-modal'
import ResendIcon from '../../assets/svg-for-user-profile/EMail_icon.svg'



const UserOtpChef = () => {

    const history = useHistory()

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
        
        className='userotp1'
        contentLabel="Notification Modal">
            <div className='userotp-resend-container'>
                <div className='userotp-resend-icon'>
                    <img src={ResendIcon} />
                </div>
                <div className='userotp-resend-text'>
                    <p>
                       An OTP was send to your
                       registered email address.
                       Please enter the OTP in the
                       next page 
                    </p>
                </div>
            </div>
        </Modal>
        <div className='userOtpChef'>
            <div className='userOtpChef__container'>
                <h4>Veryify</h4>
                <h3>mary@yahoo.com</h3>
                <h4>Enter 4 digit OTP</h4>
                <div className='userOtpChef__input'>
                    <input className='input1' type='number' />
                    <input className='input2' type='number' />
                    <input className='input3' type='number' />
                    <input className='input4' type='number' />
                    <input className='input5' type='number' />
                    <input className='input6' type='number' />
                    <Button onClick={() => {
                        history.push('/chef/main/profile')
                    }}>OK</Button>
                </div>
                <Button onClick={openModal}>Resend email</Button>
            </div>
        </div>
        </>
    )
}

export default UserOtpChef
