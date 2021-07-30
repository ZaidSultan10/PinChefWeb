import React, { useState } from 'react'
import './MainSettings.css'
import {Avatar } from '@material-ui/core'
import { ChevronRight } from '@material-ui/icons'
import HorizontalLine from '../../assets/svg/Horizontal-spliter-1.svg'
import NotificationsIcon from '../../assets/svg/Notifications-icon.svg'
import HelpIcon from '../../assets/svg/Help-icon.svg';
import LanguageIcon from '../../assets/svg/Languages.svg';
import SettingsBrightnessIcon from '../../assets/svg/day-and-night-mode.svg';
import ShareIcon from '../../assets/svg/share-2.svg';
import StarIcon from '../../assets/svg/Star.svg';
import CardMembershipIcon from '../../assets/svg/subscription-icon.svg';
import PaymentIcon from '../../assets/svg/Payment-methods-icon.svg';
import { useHistory } from 'react-router-dom'
import Modal from 'react-modal'
import NotificationIcon from '../../assets/svg/Notifications-icon.svg'


const MainSettings = ({settingsProp}) => {
   
    const history=useHistory()

    const [modalIsOpen,setIsOpen]=useState(false)
    const [modalIsOpen1,setIsOpen1]=useState(false)
    const [modalIsOpen2,setIsOpen2]=useState(false)
    const [modalIsOpen3,setIsOpen3]=useState(false)

    const openModal = () => {
        setIsOpen(true)
    }
    
    const closeModal = () => {
      setIsOpen(false);
    }
    const openModal1 = () => {
      setIsOpen1(true)
    }
    
    const closeModal1 = () => {
        setIsOpen1(false);
    }
    const closeModal2 = () => {
      setIsOpen2(true);
      }

      const openModal3 = () => {
          setIsOpen3(true)
      }
    
      const closeModal3 = () => {
        setIsOpen3(false)
        
        }

    return (
        <>
        <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        
        className='notificationModal1'
        contentLabel="Notification Modal">
            <div className='notification-modal-options'>
                <img src={NotificationIcon} />
                <h5>App Notifications</h5>
                <input type='checkbox' />
            </div>
        </Modal>
        <div className='mainSettings'>
            <div className='mainSettings__container'>
                <div className='mainSettings__profile'>
                    <div className='mainSettings__profilePicture'>
                        <Avatar className='mainSettings__avatar' />
                        <div className='mainSettings__name'>
                            <h4>John Doe</h4>
                            <h4>User ID/Name</h4>
                        </div>
                    </div>
                    <div className='mainSettings__profileDetail'>
                        {
                            settingsProp ? (
                                <ChevronRight onClick={() => {
                                    history.push('/chef/settings/profile')
                                }} className='mainSettings__rightIcon' />
                            ):(
                                <ChevronRight onClick={() => {
                                    history.push('/user/settings/profile')
                                }} className='mainSettings__rightIcon' />
                            )
                        }
                        
                    </div>
                </div>
                <div onClick={openModal} className='mainSettings__notification'>
                    <img src={NotificationsIcon} className='notify__icon' />
                    <h4>NOTIFICATIONS</h4>
                </div>
                <div className='mainSettings__divider'>
                    <img src={HorizontalLine} alt='line' />
                </div>
                <div className='mainSettings__notifications'>
                    <img src={HelpIcon} className='help__icon' />
                    <h4>HELP</h4>
                </div>
                <div className='mainSettings__divider'>
                    <img src={HorizontalLine} alt='line' />
                </div>
                {
                    settingsProp && (
                        <>
                            <div onClick={() => {
                                history.push('/chef/payment/methods')
                            }} className='mainSettings__notifications'>
                                <img  src={PaymentIcon} className='help__icon' />
                                <h4>PAYMENT METHODS</h4>
                            </div>
                            <div className='mainSettings__divider'>
                                <img src={HorizontalLine} alt='line' />
                            </div>
                            <div onClick={() => {
                                history.push('/chef/settings/subscription')
                            }} className='mainSettings__notifications'>
                                <img src={CardMembershipIcon} className='help__icon' />
                                <h4>SUBSCRIPTIONS</h4>
                            </div>
                            <div className='mainSettings__divider'>
                                <img src={HorizontalLine} alt='line' />
                            </div>
                        </>
                    )
                }
                <div className='mainSettings__notifications'>
                    <img src={LanguageIcon} className='language__icon' />
                    <h4>LANGUAGES</h4>
                </div>
                <div className='mainSettings__divider'>
                    <img src={HorizontalLine} alt='line' />
                </div>
                <div className='mainSettings__notifications'>
                    <img src={SettingsBrightnessIcon} className='theme__icon' />
                    <h4>THEME</h4>
                </div>
                <div className='mainSettings__divider'>
                    <img src={HorizontalLine} alt='line' />
                </div>
                <div className='mainSettings__notifications'>
                    <img src={ShareIcon} className='sharing__icon' />
                    <h4>SHARE WITH FRIENDS</h4>
                </div>
                <div className='mainSettings__divider'>
                    <img src={HorizontalLine} alt='line' />
                </div>
                <div className='mainSettings__notifications'>
                    <img src={StarIcon} className='rate__icon' />
                    <h4>RATE US</h4>
                </div>
                <div className='mainSettings__divider'>
                    <img src={HorizontalLine} alt='line' />
                </div>
            </div>
        </div>
        </>
    )
}

export default MainSettings
