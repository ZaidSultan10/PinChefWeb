import React from 'react'
import MainShopFood from '../mainShopFood/MainShopFood'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainFeedFilter6 from '../mainFeedFilter6/MainFeedFilter6'
import ChefMainFilters from '../chefMainFilters/ChefMainFilters'
import AddNewIcon from '../../assets/svg/Creat-new-button.svg'
import './ChefFeedFoodAllMyPost.css'

const ChefFeedFoodAllMyPost = ({cart1Prop}) => {
    return (
        <div className='chefFeedFoodAllMyPost'>
            <div className='chefFeedFoodAllMyPost__container'>
                <div className='chefFeedFoodAllMyPost__left'>
                    <Ads />
                    <Ads />
                    <Ads />
                    <Ads />
                </div>
                <div className='chefFeedFoodAllMyPost__center'>
                    <ChefMainFilters />
                    <MainFeedFilter6 />
                    {
                        cart1Prop ? (
                            <MainShopFood cartProp={true} mileProp={true} />
                        ):(
                            <MainShopFood mileProp={true} />
                        )
                    }
                    
                    <div className='chefFeedFoodAllMyPost__plus'>
                        <img src={AddNewIcon} />
                    </div>
                     
                </div>
                <div className='chefFeedFoodAllMyPost__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default ChefFeedFoodAllMyPost
