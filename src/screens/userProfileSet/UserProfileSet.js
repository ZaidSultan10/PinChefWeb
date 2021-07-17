import React from 'react'
import './UserProfileSet.css'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import { Button } from '@material-ui/core'
import ProfileImage from '../../assets/svg/Profile-image.svg'

const UserProfileSet = () => {
    return (
        <div className='userProfileSet'>
            <div className='userProfileSet__container'>
                <div className='userProfileSet__header'>
                    <img src={LeftIcon} />
                    <h4>Create Profile</h4>
                </div>
                <div className='userProfileSet__picture'>
                     <img src={ProfileImage} />
                </div>
                <div className='userProfileSet__input'>
                    <h5>Name/Lastname</h5>
                    <input type='text' placeholder='Enter name and last name' />
                </div>
                <div className='userProfileSet__input2'>
                    <h5>User ID-Nickname</h5>
                    <input type='text' placeholder='ex:Johndoe23' />
                </div>
                <div className='userProfileSet__input3'>
                    <h5>Mobile Number <span>(Optional)</span></h5>
                    <input type='number' placeholder='+1 xxx xxx xxxx' />
                </div>
                <div className='userProfileSet__button'>
                    <Button>Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default UserProfileSet
