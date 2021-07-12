import React from 'react'
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


const MainSettings = ({settingsProp}) => {
    return (
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
                        <ChevronRight className='mainSettings__rightIcon' />
                    </div>
                </div>
                <div className='mainSettings__notification'>
                    <img src={NotificationsIcon} className='notify__icon' />
                    <h4>Notifications</h4>
                </div>
                <div className='mainSettings__divider'>
                    <img src={HorizontalLine} alt='line' />
                </div>
                <div className='mainSettings__notifications'>
                    <img src={HelpIcon} className='help__icon' />
                    <h4>Help</h4>
                </div>
                <div className='mainSettings__divider'>
                    <img src={HorizontalLine} alt='line' />
                </div>
                {
                    settingsProp && (
                        <>
                            <div className='mainSettings__notifications'>
                                <img src={PaymentIcon} className='help__icon' />
                                <h4>Payment Methods</h4>
                            </div>
                            <div className='mainSettings__divider'>
                                <img src={HorizontalLine} alt='line' />
                            </div>
                            <div className='mainSettings__notifications'>
                                <img src={CardMembershipIcon} className='help__icon' />
                                <h4>Subscriptions</h4>
                            </div>
                            <div className='mainSettings__divider'>
                                <img src={HorizontalLine} alt='line' />
                            </div>
                        </>
                    )
                }
                <div className='mainSettings__notifications'>
                    <img src={LanguageIcon} className='language__icon' />
                    <h4>Languages</h4>
                </div>
                <div className='mainSettings__divider'>
                    <img src={HorizontalLine} alt='line' />
                </div>
                <div className='mainSettings__notifications'>
                    <img src={SettingsBrightnessIcon} className='theme__icon' />
                    <h4>Theme</h4>
                </div>
                <div className='mainSettings__divider'>
                    <img src={HorizontalLine} alt='line' />
                </div>
                <div className='mainSettings__notifications'>
                    <img src={ShareIcon} className='sharing__icon' />
                    <h4>Share With Friends</h4>
                </div>
                <div className='mainSettings__divider'>
                    <img src={HorizontalLine} alt='line' />
                </div>
                <div className='mainSettings__notifications'>
                    <img src={StarIcon} className='rate__icon' />
                    <h4>Rate Us</h4>
                </div>
                <div className='mainSettings__divider'>
                    <img src={HorizontalLine} alt='line' />
                </div>
            </div>
        </div>
    )
}

export default MainSettings
