import React from 'react'
import './Footer.css'
import HomeUnselectedIcon from '../../assets/svg/Home-un-selected.svg'
import HomeSelectedIcon from '../../assets/svg/Home-selected.svg'
import ChefUnselectedIcon from '../../assets/svg/chef-un-selected.svg'
import ShopUnselectedIcon from '../../assets/svg/Shop-un-selected.svg'
import SettingsUnselectedIcon from '../../assets/svg/settings-un-selected.svg'
import StarUnselectedIcon from '../../assets/svg/Star-un-selected.svg'


const Footer = () => {
    return (
        <div className='footer'>
            <img src={HomeSelectedIcon} alt='home' />
            <img src={ChefUnselectedIcon} alt='chef' />
            <img src={ShopUnselectedIcon} alt='shop' />
            <img src={StarUnselectedIcon} alt='star' />
            <img src={SettingsUnselectedIcon} alt='settings' />
        </div>
    )
}

export default Footer
