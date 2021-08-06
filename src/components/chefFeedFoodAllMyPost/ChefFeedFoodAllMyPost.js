import React from 'react'
import MainShopFood from '../mainShopFood/MainShopFood'
import ChefAds from '../chefAds/ChefAds'
import MainFeedFilter6 from '../mainFeedFilter6/MainFeedFilter6'
import ChefMainFilters from '../chefMainFilters/ChefMainFilters'
import AddNewIcon from '../../assets/svg/Creat-new-button.svg'
import './ChefFeedFoodAllMyPost.css'
import GoogleAds2 from '../googleAds2/GoogleAds2'
import { useHistory } from 'react-router-dom'


const ChefFeedFoodAllMyPost = ({cart1Prop}) => {

    const history=useHistory()

    return (
        <div className='chefFeedFoodAllMyPost'>
            <div className='chefFeedFoodAllMyPost__container'>
                <div className='chefFeedFoodAllMyPost__left'>
                    <GoogleAds2 adsProp2={true} />
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
                        <img onClick={() => {
                            history.push('/chef/home/feed/create-food')
                        }} src={AddNewIcon} alt='image' />
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
