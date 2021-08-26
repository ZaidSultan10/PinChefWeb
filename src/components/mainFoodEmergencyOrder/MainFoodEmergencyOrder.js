import React, { useState } from 'react'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import './MainFoodEmergencyOrder.css'
import InfoIcon from '../../assets/svg/info-icon-red.svg'
import Ads from '../ads/Ads'
import { Button } from '@material-ui/core'
import { cuisineList, dietsList } from '../mainChefCreateRecipe/mainChefCreateRecipeData'



const MainFoodEmergencyOrder = () => {
    
    const [cuisines,setCuisines] = useState('')
    const [dietType, setDietType] = useState('')
    const [description, setDescription] = useState('')
    const [orderType, setOrderType] = useState('')


    const handleChange = (event) => {
        switch (event.target.name) {
          case "description":
            setDescription(event.target.value);
            break;
          case "cuisines":
            setCuisines(event.target.value);
            break;
          case "dietType":
            setDietType(event.target.value);
            break;
          case "orderType":
            setOrderType(event.target.value);
            break;
          default:
            break;
        }
      };
      const handleSubmit = (event) => {
        const obj = {
          description,
          cuisines,
          dietType,
          orderType
        };
        console.log(obj);
      };

    
    return (
        <div className='mainFoodEmergencyOrder'>
            <div className='mainFoodEmergencyOrder__header'>
                <img src={LeftIcon} alt='star' />
                <h5>FOOD EMERGENCY</h5>
            </div>
            <div className='mainFoodEmergencyOrder__warning2'>
                <img src={InfoIcon} alt='star' />
                <p>We will match your needs with the chefs that fit 
your request and the ones available will contact you.
                </p>
            </div>
            <div className='mainFoodEmergencyOrder__text'>
                <h4>Order Food ASAP</h4>
            </div>
            <div className='mainFoodEmergencyOrder__cuisine'>
                <h5>Cuisine Specialities<span>*</span></h5>
                <select required name='cuisines' value={cuisines} onChange={handleChange} id='mainFoodEmergencyOrder__cuisineOptions'>
                    {
                        cuisineList.map((cuisine) => (
                            <option>{cuisine.cuisine}</option>
                        ))
                    }
                </select>
            </div>
            <div className='mainFoodEmergencyOrder__dietary'>
                <h5>Dietary<span>*</span></h5>
                <select required name='dietType' value={dietType} onChange={handleChange} id='mainFoodEmergencyOrder__dietOptions'>
                    {
                        dietsList.map((diet) => (
                            <option>{diet.diet}</option>
                        ))
                    }
                </select>
            </div>
            <div className='mainFoodEmergencyOrder__type'>
                <h5>Order Type<span>*</span></h5>
                <div className='mainFoodEmergencyOrder__delivery'>
                    <div className='mainFoodEmergencyOrder__del'>
                        <input type='radio' name='orderType' value={orderType} onChange={handleChange} />
                        <h5>Delivery</h5>
                    </div>
                    <div className='mainFoodEmergencyOrder__pick'>
                        <input type='radio' name='orderType' value={orderType} onChange={handleChange} />
                        <h5>Pick Up/Takeaway</h5>
                    </div>
                </div>
            </div>
            <div className='mainFoodEmergencyOrder__desc'>
                <h5>Description<span>*</span></h5>
                <textarea name='description' value={description} onChange={handleChange} required rows='7' placeholder='Requirment' />
            </div>
            <div className='mainFoodEmergencyOrder__button'>
                <Button onClick={handleSubmit}>Send</Button>
            </div>
            <div className='mainFoodEmergencyOrder__ads'>
                <Ads />
            </div>
        </div>
    )
}

export default MainFoodEmergencyOrder
