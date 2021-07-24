import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CreateFoodCheckoutTakeaway from '../../components/createFoodCheckoutTakeaway/CreateFoodCheckoutTakeaway'


const FoodCheckoutTakeaway = () => {
    return (
        <div>
            <Header searchProp={true} />
            <CreateFoodCheckoutTakeaway />
            <Footer />
        </div>
    )
}

export default FoodCheckoutTakeaway
