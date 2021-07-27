import React from 'react'
import './ChefMasterClassFeedAllMyPost.css'
import Ads from '../ads/Ads'
import ChefAds from '../chefAds/ChefAds'
import MainFeedFilter6 from '../mainFeedFilter6/MainFeedFilter6'
import ChefMainFilters from '../chefMainFilters/ChefMainFilters'
import MainFeedMasterclassMyPost from '../mainFeedMasterclassMyPost/MainFeedMasterclassMyPost'
import GoogleAds2 from '../googleAds2/GoogleAds2'
import AddNewIcon from '../../assets/svg/Creat-new-button.svg'
import { useHistory } from 'react-router-dom'



const ChefMasterClassFeedAllMyPost = () => {

    const history=useHistory()

    return (
        <div className='chefMasterClassFeedAllMyPost'>
            <div className='chefMasterClassFeedAllMyPost__container'>
                <div className='chefMasterClassFeedAllMyPost__left'>
                    <GoogleAds2 adsProp2={true} />
                </div>
                <div className='chefMasterClassFeedAllMyPost__center'>
                    <ChefMainFilters />
                    <MainFeedFilter6 />
                    <MainFeedMasterclassMyPost />
                    <div className='add-masterclass'>
                        <img src={AddNewIcon} onClick={ () => {
                            history.push('/chef/home/feed/create-masterclass')
                        }} />
                    </div>
                </div>
                <div className='chefMasterClassFeedAllMyPost__right'>
                    <ChefAds />
                </div>
            </div>
        </div>
    )
}

export default ChefMasterClassFeedAllMyPost