import React from 'react'
import './Footer.css'
import HomeUnselectedIcon from '../../assets/svg/Home-un-selected.svg'
import HomeSelectedIcon from '../../assets/svg/Home-selected.svg'
import ChefUnselectedIcon from '../../assets/svg/chef-un-selected.svg'
import ShopUnselectedIcon from '../../assets/svg/Shop-un-selected.svg'
import SettingsUnselectedIcon from '../../assets/svg/settings-un-selected.svg'
import StarUnselectedIcon from '../../assets/svg/Star-un-selected.svg'
import { useHistory } from 'react-router-dom'


const Footer = ({footerProp}) => {

    const history=useHistory()

    return (
        <div className='footer'>
            {
                footerProp ? (
                    <>
                        <img onClick={ () =>{
                        history.push('/chef/home/feed')
                            }
                        } src={HomeSelectedIcon} className='cheficon1' alt='home' />
                        <img onClick={ () =>{
                                history.push('/chef/profile')
                            }
                        } src={ChefUnselectedIcon} className='cheficon' alt='chef' />
                        <img onClick={() => {
                            history.push('/chef/order-history')
                        }} src={ShopUnselectedIcon}  alt='shop' />
                        <img onClick={() => {
                            history.push('/rate/area')
                        }} src={StarUnselectedIcon} alt='star' />
                        <img onClick={() => {
                            history.push('/chef/settings')
                        }} src={SettingsUnselectedIcon} className='cheficon' alt='settings' />
                    </>
                ):(
                    <>
                        <img onClick={ () =>{
                        history.push('/homepage')
                            }
                        } src={HomeSelectedIcon} className='cheficon1' alt='home' />
                        <img onClick={ () =>{
                                history.push('/chef/all-chef')
                            }
                        } src={ChefUnselectedIcon} className='cheficon' alt='chef' />
                        <img onClick={() => {
                            history.push('/shop/food')
                        }} src={ShopUnselectedIcon}  alt='shop' />
                        <img onClick={() => {
                            history.push('/star/feed')
                        }} src={StarUnselectedIcon} alt='star' />
                        <img onClick={() => {
                            history.push('/user/settings')
                        }} src={SettingsUnselectedIcon} className='cheficon' alt='settings' />
                    </>
                )
            }
            
        </div>
    )
}

export default Footer
