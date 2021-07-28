import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FeedAllChefsChefSide from '../../components/feedAllChefsChefside/FeedAllChefsChefSide'

const ChefSideAllChefs = () => {
    return (
        <div>
            <Header searchProp={true} />
            <FeedAllChefsChefSide allChefProp={true} />
            <Footer footerProp={true} />
        </div>
    )
}

export default ChefSideAllChefs
