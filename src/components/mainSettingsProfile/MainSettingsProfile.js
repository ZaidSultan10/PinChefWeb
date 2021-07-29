import React from 'react'
import './MainSettingsProfile.css'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import HorizontalLine from '../../assets/svg/Horizontal-spliter-1.svg'
import { Avatar } from '@material-ui/core';
import NameIcon from '../../assets/svg-for-user-profile/name.svg'
import PhoneIcon from '../../assets/svg-for-user-profile/smartphone.svg'
import EmailIcon from '../../assets/svg-for-user-profile/email1.svg'
import LocationIcon from '../../assets/svg-for-user-profile/Location.svg'
import DeleteIcon from '../../assets/svg-for-user-profile/Delete.svg'
import LogoutIcon from '../../assets/svg-for-user-profile/Logout.svg'
import DetailedInfo from '../../assets/svg-for-user-profile/chef-4.svg'
import bannerImage from '../../assets/chef-images/chef-image1.jpg'
import EditIcon from '../../assets/svg-for-user-profile/Cover_Photo_button.svg'
import { useHistory } from 'react-router-dom';



const MainSettingsProfile = ({chefProfileCondiitonProp}) => {
    
    const history = useHistory()
    
    return (
        <div className='mainSettingsProfile'>
            {
                chefProfileCondiitonProp ? (
                    <div className='mainSettingsProfile__heading'>
                        <img onClick={() => {
                            history.push('/chef/settings')
                        }} src={LeftIcon} />
                        <h4>Profile</h4>
                    </div>
                ):(
                    <div onClick={() => {
                        history.push('/user/settings')
                    }} className='mainSettingsProfile__heading'>
                        <img src={LeftIcon} />
                        <h4>Profile</h4>
                    </div>
                )
            }
            
            {
                chefProfileCondiitonProp ? (
                    <div className='mainSettingsProfile__picture'>
                        <img src={bannerImage} />
                        <div className='mainSettingsProfile__bannerIcons'>
                            <Avatar className='mainSettingsProfile__avatar' />
                            <img src={EditIcon} />
                        </div>
                    </div>
                ):(
                    <div className='mainSettingsProfile__picture1'>
                        <Avatar className='mainSettingsProfile__avatar' />
                    </div>
                )
            }
            
            <div className='mainSettingsProfile__name'>
                <img src={NameIcon} />
                <h4>Full Name</h4>
            </div>
            <div className='mainSettings__divider'>
                <img src={HorizontalLine} alt='line' />
            </div>
            <div className='mainSettingsProfile__name'>
                <img src={NameIcon} />
                <h4>User-ID/Nickname</h4>
            </div>
            <div className='mainSettings__divider'>
                <img src={HorizontalLine} alt='line' />
            </div>
            <div className='mainSettingsProfile__name'>
                <img src={PhoneIcon} />
                <h4>Number</h4>
            </div>
            <div className='mainSettings__divider'>
                <img src={HorizontalLine} alt='line' />
            </div>
            <div className='mainSettingsProfile__name'>
                <img src={EmailIcon} />
                <h4>Email</h4>
            </div>
            <div className='mainSettings__divider'>
                <img src={HorizontalLine} alt='line' />
            </div>
            <div className='mainSettingsProfile__name'>
                <img src={LocationIcon} />
                <h4>Address</h4>
            </div>
            <div className='mainSettings__divider'>
                <img src={HorizontalLine} alt='line' />
            </div>
            {
                chefProfileCondiitonProp && (
                    <>
                        <div onClick={() => {
                            history.push('/chef/main/profile')
                        }} className='mainSettingsProfile__name'>
                            <img src={DetailedInfo} />
                            <h4>Detailed Info</h4>
                        </div>
                        <div className='mainSettings__divider'>
                            <img src={HorizontalLine} alt='line' />
                        </div>
                    </>
                )
            }
            <div className='mainSettingsProfile__name'>
                <img src={DeleteIcon} />
                <h4>Delete Account</h4>
            </div>
            <div className='mainSettings__divider'>
                <img src={HorizontalLine} alt='line' />
            </div>
            <div className='mainSettingsProfile__name'>
                <img src={LogoutIcon} />
                <h4>Logout</h4>
            </div>
            <div className='mainSettings__divider'>
                <img src={HorizontalLine} alt='line' />
            </div>
        </div>
    )
}

export default MainSettingsProfile
