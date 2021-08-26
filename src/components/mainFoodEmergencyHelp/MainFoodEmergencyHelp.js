import React, { useState } from 'react'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import './MainFoodEmergencyHelp.css'
import InfoIcon from '../../assets/svg/info-icon-red.svg'
import Ads from '../ads/Ads'
import { Button } from '@material-ui/core'
import { cuisineList, dietsList } from '../mainChefCreateRecipe/mainChefCreateRecipeData'



const MainFoodEmergencyHelp = () => {

    const [cuisines,setCuisines] = useState('')
    const [dietType, setDietType] = useState('')
    const [description, setDescription] = useState('')

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
          default:
            break;
        }
      };
      const handleSubmit = (event) => {
        const obj = {
          description,
          cuisines,
          dietType,
        };
        console.log(obj);
      };


    return (
        <div className='mainFoodEmergencyHelp'>
            <div className='mainFoodEmergencyHelp__header'>
                <img src={LeftIcon} alt='star' />
                <h5>FOOD EMERGENCY</h5>
            </div>
            <div className='mainFoodEmergencyHelp__warning2'>
                <img src={InfoIcon} alt='star' />
                <p>We will match your needs with the chefs that fit 
your request and the ones available will contact you.
                </p>
            </div>
            <div className='mainFoodEmergencyHelp__text'>
                <h4>Help with cooking</h4>
            </div>
            <div className='mainFoodEmergencyHelp__cuisine'>
                <h5>Cuisine Specialities<span>*</span></h5>
                <select required name='cuisines' value={cuisines} onChange={handleChange} id='mainFoodEmergencyHelp__cuisineOptions'>
                    {
                        cuisineList.map((cuisine) => (
                            <option>{cuisine.cuisine}</option>
                        ))
                    }
                </select>
            </div>
            <div className='mainFoodEmergencyHelp__dietary'>
                <h5>Dietary<span>*</span></h5>
                <select required name='dietType' value={dietType} onChange={handleChange} id='mainFoodEmergencyHelp__dietOptions'>
                    {
                        dietsList.map((diet) => (
                            <option>{diet.diet}</option>
                        ))
                    }
                </select>
            </div>
            <div className='mainFoodEmergencyHelp__desc'>
                <h5>Description<span>*</span></h5>
                <textarea required name='description' value={description} onChange={handleChange} rows='7' />
            </div>
            <div className='mainFoodEmergencyHelp__button'>
                <Button onClick={handleSubmit}>Send</Button>
            </div>
            <div className='mainFoodEmergencyHelp__ads'>
                <Ads />
            </div>
        </div>
    )
}

export default MainFoodEmergencyHelp
