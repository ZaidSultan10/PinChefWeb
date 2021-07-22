import React from 'react'
import Header from '../../components/header/Header'
import CreateFoodEmergencyHelp from '../../components/createFoodEmergencyHelp/CreateFoodEmergencyHelp'
import Footer from '../../components/footer/Footer'
const FoodEmergencyHelp = () => {
    return (
        <div className='foodEmergencyHelp'>
            <Header searchProp={true} />
            <CreateFoodEmergencyHelp />
            <Footer />
        </div>
    )
}

export default FoodEmergencyHelp
