import React from 'react'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import './MainFoodEmergencyHelp.css'
import InfoIcon from '../../assets/svg/info-icon-red.svg'
import Ads from '../ads/Ads'
import { Button } from '@material-ui/core'



const MainFoodEmergencyHelp = () => {
    return (
        <div className='mainFoodEmergencyHelp'>
            <div className='mainFoodEmergencyHelp__header'>
                <img src={LeftIcon} />
                <h5>FOOD EMERGENCY</h5>
            </div>
            <div className='mainFoodEmergencyHelp__warning2'>
                <img src={InfoIcon} />
                <p>To add or delete payment options, go back
                    to the chef's profile details
                </p>
            </div>
            <div className='mainFoodEmergencyHelp__text'>
                <h4>Help with cooking</h4>
            </div>
            <div className='mainFoodEmergencyHelp__cuisine'>
                <h5>Cuisine Specialities<span>*</span></h5>
                <select id='mainFoodEmergencyHelp__cuisineOptions'>
                    <option>Monday</option>
                    <option>tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                </select>
            </div>
            <div className='mainFoodEmergencyHelp__listings'>
                <p>Cuisine not in list? <a href='#'>Add Cuisine</a></p>
            </div>
            <div className='mainFoodEmergencyHelp__dietary'>
                <h5>Dietary<span>*</span></h5>
                <select id='mainFoodEmergencyHelp__dietOptions'>
                    <option>Monday</option>
                    <option>tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                </select>
            </div>
            <div className='mainFoodEmergencyHelp__desc'>
                <h5>Description<span>*</span></h5>
                <textarea rows='7' />
            </div>
            <div className='mainFoodEmergencyHelp__button'>
                <Button>Send</Button>
            </div>
            <div className='mainFoodEmergencyHelp__ads'>
                <Ads />
            </div>
        </div>
    )
}

export default MainFoodEmergencyHelp
