import React from 'react'
import ChefCreateFeedRecipe from '../../components/chefCreateRecipe/ChefCreateFeedRecipe'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const ChefCreateRecipe = () => {
    return (
        <div className='chefCreateRecipe'>
            <Header searchProp={true} />
            <ChefCreateFeedRecipe />
            <Footer footerProp={true} />
        </div>
    )
}

export default ChefCreateRecipe
