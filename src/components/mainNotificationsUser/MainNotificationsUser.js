import React from 'react'
import DownIcon from '../../assets/svg/Down-button-green.svg'
import HorizontalLine from '../../assets/svg/Horizontal-spliter-1.svg'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import { Avatar } from '@material-ui/core'
import './MainNotificationsUser.css'


const MainNotificationsUser = () => {
    return (
        <div className='mainNotificationsUser'>
            <div className='mainNotificationsUser__header'>
                <img src={LeftIcon} alt='star' />
                <h3>NOTIFICATIONS</h3>
            </div>
            {
                [...Array(6)].map(() => (
                   <>
                   <div className='mainNotificationsUser__container '>
                        <Avatar className='mainNotificationsUser__avatar' />
                        <div className='mainNotificationsUser__user'>
                            <div className='mainNotificationsUser__userLeft'>
                                <h3>Matt Wilson</h3>
                                <p>13 October 2020 1:24pm</p>
                            </div>
                            <div className='mainNotificationsUser__userRight'>
                                <h3>New Food Order</h3>
                                <img src={DownIcon} alt='star' />
                            </div>
                        </div>
                    </div>
                    <div className='mainNotificationsUser__bottom'>
                        <img src={HorizontalLine} alt='star' />
                    </div>
                    </>
                ))
            }
        </div>
    )
}

export default MainNotificationsUser
