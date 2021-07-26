import React from 'react'
import MainShopFood from '../mainShopFood/MainShopFood'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainFeedFilter5 from '../mainFeedFilter5/MainFeedFilter5'
import ChefMainFilters from '../chefMainFilters/ChefMainFilters'
import './ChefFeedFoodAll.css'
import AddNewIcon from '../../assets/svg/Creat-new-button.svg'



const ChefFeedFoodAll = ({myfoodProp,cart1Prop}) => {
    return (
        <div className='chefFoodFeedAll'>
            <div className='chefFoodFeedAll__container'>
                <div className='chefFoodFeedAll__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='chefFoodFeedAll__center'>
                    <ChefMainFilters />
                    <MainFeedFilter5 />
                    {
                        cart1Prop ? (
                            <MainShopFood cartProp={true} mileProp={true} />
                        ):(
                            <MainShopFood mileProp={true} />
                        )
                    }
                    
                    {
                        myfoodProp && (
                            <div className='chefFoodFeedAll__plus'>
                                <img src={AddNewIcon} />
                             </div>
                        )
                    }
                </div>
                <div className='chefFoodFeedAll__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default ChefFeedFoodAll
