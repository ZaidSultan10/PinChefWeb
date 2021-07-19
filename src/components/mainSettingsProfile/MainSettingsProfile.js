import React from 'react'
import './MainSettingsProfile.css'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import HorizontalLine from '../../assets/svg/Horizontal-spliter-1.svg'
import { Avatar } from '@material-ui/core';

const MainSettingsProfile = () => {
    return (
        <div className='mainSettingsProfile'>
            <div className='mainSettingsProfile__heading'>
                <img src={LeftIcon} />
                <h4>Profile</h4>
            </div>
            <div className='mainSettingsProfile__picture'>
                <Avatar className='mainSettingsProfile__avatar' />
            </div>
            <div className='mainSettingsProfile__name'>
                <AccountBoxOutlinedIcon />
                <h4>Full Name</h4>
            </div>
            <div className='mainSettings__divider'>
                <img src={HorizontalLine} alt='line' />
            </div>
            <div className='mainSettingsProfile__name'>
                <AccountBoxOutlinedIcon />
                <h4>User-ID/Nickname</h4>
            </div>
            <div className='mainSettings__divider'>
                <img src={HorizontalLine} alt='line' />
            </div>
            <div className='mainSettingsProfile__name'>
                <AccountBoxOutlinedIcon />
                <h4>Number</h4>
            </div>
            <div className='mainSettings__divider'>
                <img src={HorizontalLine} alt='line' />
            </div>
            <div className='mainSettingsProfile__name'>
                <AccountBoxOutlinedIcon />
                <h4>Email</h4>
            </div>
            <div className='mainSettings__divider'>
                <img src={HorizontalLine} alt='line' />
            </div>
            <div className='mainSettingsProfile__name'>
                <AccountBoxOutlinedIcon />
                <h4>Adress</h4>
            </div>
            <div className='mainSettings__divider'>
                <img src={HorizontalLine} alt='line' />
            </div>
            <div className='mainSettingsProfile__name'>
                <AccountBoxOutlinedIcon />
                <h4>Delete Account</h4>
            </div>
            <div className='mainSettings__divider'>
                <img src={HorizontalLine} alt='line' />
            </div>
            <div className='mainSettingsProfile__name'>
                <AccountBoxOutlinedIcon />
                <h4>Logout</h4>
            </div>
            <div className='mainSettings__divider'>
                <img src={HorizontalLine} alt='line' />
            </div>
        </div>
    )
}

export default MainSettingsProfile
