import React from 'react'
import ChefRecipeFeedAll from '../../components/chefRecipeFeedAll/ChefRecipeFeedAll'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const ChefFeedRecipe = () => {
    return (
        <div className='chefFeedRecipe'>
            <Header searchProp={true} notificationProp={true} />
            <ChefRecipeFeedAll  />
            <Footer footerProp={true}/>
        </div>
    )
}

export default ChefFeedRecipe
