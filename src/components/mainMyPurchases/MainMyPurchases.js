import React from 'react'
import { Avatar } from '@material-ui/core'
import RateIcon from '../../assets/svg/Rate-chef-for-order.svg'
import RepeatIcon from '../../assets/svg/Repeat-order-icon.svg'
import DownIcon from '../../assets/svg/Down-button-green.svg'
import './MainMyPurchases.css'
import { useHistory } from 'react-router-dom'

const MainMyPurchases = () => {

    const history = useHistory()

    return (
        <div className='mainMyPurchases'>
            <div className='mainMyPurchases__container'>
                <div className='mainMyPurchases__header'>
                    <Avatar onClick={() => {
                        history.push('/chef/profile')
                    }} className='mainMyPurchases__avatar'/>
                    <div onClick={() => {
                        history.push('/chef/profile')
                    }} className='mainMyPurchases__name'>
                        <h4>
                            Matt Wilson
                        </h4>
                        <p>Executive Chef</p>
                    </div>
                    <div className='mainMyPurchases__detailIcon'>
                        <img onClick={() => {
                            history.push('/rate/area')
                        }} src={RateIcon} className='rate-icon' />
                    </div>
                    <div className='mainMyPurchases__headerRight'>
                        <h4>Food and Services</h4>
                        <img src={RepeatIcon} className='repeat-icon' />
                    </div>
                </div>
                <div className='mainMyPurchases__center'>
                    <p>Cook and Deliver</p>
                    <p>1</p>
                    <p className='purchase__price'>$23.80</p>
                </div>
                <div className='mainMyPurchases__total'>
                    <h4>Total: $ 23.80</h4>
                </div>
                <div className='mainMyPurchases__showDetails'>
                    <div className='mainMyPurchases__showDetailsLeft'>
                        <p>2 days ago</p>
                        <h5>Pay Now</h5>
                    </div>
                    <div onClick={() => {
                        history.push('/chef/order-details')
                    }} className='mainMyPurchases__showDetailsRight'>
                        <p>Details</p>
                        <img src={DownIcon} className='down-icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainMyPurchases
