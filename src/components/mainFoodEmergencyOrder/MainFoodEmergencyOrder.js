import React from 'react'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import './MainFoodEmergencyOrder.css'
import InfoIcon from '../../assets/svg/info-icon-red.svg'
import Ads from '../ads/Ads'
import { Button } from '@material-ui/core'



const MainFoodEmergencyOrder = () => {
    return (
        <div className='mainFoodEmergencyOrder'>
            <div className='mainFoodEmergencyOrder__header'>
                <img src={LeftIcon} />
                <h5>FOOD EMERGENCY</h5>
            </div>
            <div className='mainFoodEmergencyOrder__warning2'>
                <img src={InfoIcon} />
                <p>To add or delete payment options, go back
                    to the chef's profile details
                </p>
            </div>
            <div className='mainFoodEmergencyOrder__text'>
                <h4>Help with cooking</h4>
            </div>
            <div className='mainFoodEmergencyOrder__cuisine'>
                <h5>Cuisine Specialities<span>*</span></h5>
                <select id='mainFoodEmergencyOrder__cuisineOptions'>
                    <option>Monday</option>
                    <option>tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                </select>
            </div>
            <div className='mainFoodEmergencyOrder__listings'>
                <p>Cuisine not in list? <a href='#'>Add Cuisine</a></p>
            </div>
            <div className='mainFoodEmergencyOrder__dietary'>
                <h5>Dietary<span>*</span></h5>
                <select id='mainFoodEmergencyOrder__dietOptions'>
                    <option>Monday</option>
                    <option>tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                </select>
            </div>
            <div className='mainFoodEmergencyOrder__type'>
                <h5>Order Type<span>*</span></h5>
                <div className='mainFoodEmergencyOrder__delivery'>
                    <div className='mainFoodEmergencyOrder__del'>
                        <input type='radio' />
                        <h5>Delivery</h5>
                    </div>
                    <div className='mainFoodEmergencyOrder__pick'>
                        <input type='radio' />
                        <h5>Pick Up/Takeaway</h5>
                    </div>
                </div>
            </div>
            <div className='mainFoodEmergencyOrder__desc'>
                <h5>Description<span>*</span></h5>
                <textarea rows='7' />
            </div>
            <div className='mainFoodEmergencyOrder__button'>
                <Button>Send</Button>
            </div>
            <div className='mainFoodEmergencyOrder__ads'>
                <Ads />
            </div>
        </div>
    )
}

export default MainFoodEmergencyOrder
