import React from 'react'
import './MainOrderNotifications.css'
import { Avatar } from '@material-ui/core'
import { Button } from '@material-ui/core'

const MainOrderNotifications = () => {
    return (
        <div className='mainOrderNotifications'>
            <div className='mainOrderNotifications__top'>
                <Avatar />
                <div className='mainOrderNotifications__user'>
                    <div className='mainOrderNotifications__username'>
                        <h4>Matt Wilson</h4>
                        <h5>13 October 2020, 1:24pm</h5>
                    </div>
                    <div className='mainOrderNotifications__food'>
                        <h4>New Food Order</h4>
                        <p>some icon</p>
                    </div>
                </div>
            </div>
            <div className='mainOrderNotifications__header'>
                <div className='mainOrderNotifications__item'>
                    <h5>Item</h5>
                </div>
                <div className='mainOrderNotifications__bill'>
                    <h5 className='notifications-price'>QTY</h5>
                    <h5 className='notifications-price'>Price</h5>
                    <h5 >Amount</h5>
                </div>
            </div> 
            <div className='mainOrderNotifications__info'>
                <div className='mainOrderNotifications__itemTitle'>
                    <p>Cook and Deliver</p>
                </div>
                <div className='mainOrderNotifications__itemBill'>
                    <h5 className='notifications-price1'>1</h5>
                    <h5 className='notifications-price2'>$23.80</h5>
                    <h5 className='notifications-price3'>$23.80</h5>
                </div>
            </div>
            <div className='mainOrderNotifications__sub'>
                <div className='mainOrderNotifications__subTotal'>
                    <h5>Sub-total:</h5>
                    <h5>Tax:</h5>
                    <h5>Shipping:</h5>
                    <h5 className='notifications-text'>Total:</h5>
                </div>
                <div className='mainOrderNotifications__subTotalAmount'>
                    <p>$23.80</p>
                    <p>%8</p>
                    <p>$15.00</p>
                    <p className='notifications-amount'>$39.84</p>
                </div>
            </div>
            <div className='mainOrderNotifications__address'>
                <h4>Address</h4>
                <p>It is a long established fact that a reader will be distracted</p>
            </div>
            <div className='mainOrderNotifications__notes'>
                <h4>Extra Notes</h4>
                <p>It is a long established fact that a reader will be distracted</p>
            </div>
            <div className='mainOrderNotifications__buttons'>
                <Button className='button-n1'>Accept</Button>
                <Button className='button-n2'>Chat with Client</Button>
                <Button className='button-n3'>Reject</Button>
            </div>
        </div>
    )
}

export default MainOrderNotifications
