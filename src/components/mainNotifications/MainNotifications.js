import { Avatar } from '@material-ui/core'
import React from 'react'
import './MainNotifications.css'
import DownIcon from '../../assets/svg/Down-button-green.svg'
import HorizontalLine from '../../assets/svg/Horizontal-spliter-1.svg'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'



const MainNotifications = () => {
    return (
        <div className='mainNotifications'>
            <div className='mainNotifications__header'>
                <img src={LeftIcon} alt='star' />
                <h3>NOTIFICATIONS</h3>
            </div>
            {
                [...Array(6)].map(() => (
                   <>
                   <div className='mainNotifications__container '>
                        <Avatar className='mainNotifications__avatar' />
                        <div className='mainNotifications__user'>
                            <div className='mainNotifications__userLeft'>
                                <h3>Matt Wilson</h3>
                                <p>13 October 2020 1:24pm</p>
                            </div>
                            <div className='mainNotifications__userRight'>
                                <h3>New Food Order</h3>
                                <img src={DownIcon} alt='star' />
                            </div>
                        </div>
                    </div>
                    <div className='mainNotifications__bottom'>
                        <img src={HorizontalLine} alt='star' />
                    </div>
                    </>
                ))
            }
        </div>
    )
}

export default MainNotifications
