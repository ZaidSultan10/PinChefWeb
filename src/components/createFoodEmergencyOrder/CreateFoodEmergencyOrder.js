import React from 'react'
import './CreateFoodEmergencyOrder.css'
import MainFoodEmergencyOrder from '../mainFoodEmergencyOrder/MainFoodEmergencyOrder'
const CreateFoodEmergencyOrder = () => {
    return (
        <div className='createFoodEmergencyOrder'>
            <div className='createFoodEmergencyOrder__container'>
                <div className='createFoodEmergencyOrder__left'>

                </div>
                <div className='createFoodEmergencyOrder__center'>
                    <MainFoodEmergencyOrder />
                </div>
                <div className='createFoodEmergencyOrder__right'>
                    
                </div>
            </div>
        </div>
    )
}

export default CreateFoodEmergencyOrder
