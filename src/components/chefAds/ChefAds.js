import React from 'react'
import './ChefAds.css'
import CrownIcon from '../../assets/svg/Crown.svg'
import VipChefHome from '../vipchefshomefeed/VipChefHome'

const ChefAds = () => {
    return (
        <div className='chefAds'>
            <div className='chefAds__heading'>
                <img src={CrownIcon} alt='crown' />
                <h3>VIP CHEFS</h3>
                <img src={CrownIcon} alt='crown' />
            </div>
            <div className='chefAds__profile'>
                <VipChefHome />
            </div>
            <div className='chefAds__profile'>
                <VipChefHome />
            </div>
            <div className='chefAds__profile'>
                <VipChefHome />
            </div>
        </div>
    )
}

export default ChefAds
