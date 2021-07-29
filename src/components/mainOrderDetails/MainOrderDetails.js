import { Avatar } from '@material-ui/core'
import React from 'react'
import './MainOrderDetails.css'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import { useHistory } from 'react-router-dom'

const MainOrderDetails = () => {

    const history = useHistory()

    return (
        <div className='mainOrderDetails'>
            <div className='mainOrderDetails__top'>
                <img onClick={() => {
                    history.push('/chef/order-history/my-purchases')
                }} src={LeftIcon} />
                <p>13 October,2020</p>
            </div>
            <div className='mainOrderDetails__user'>
                <Avatar className='user-avatar-order' />
                <div className='mainOrderDetails__username'>
                    <h4>Matt Wilson</h4>
                    <h5>Executive Chef</h5>
                </div>
            </div>
            <div className='mainOrderDetails__header'>
                <div className='mainOrderDetails__item'>
                    <h5>Item</h5>
                </div>
                <div className='mainOrderDetails__bill'>
                    <h5 className='orders-price'>QTY</h5>
                    <h5 className='orders-price'>Price</h5>
                    <h5 >Amount</h5>
                </div>
            </div> 
            <div className='mainOrderDetails__info'>
                <div className='mainOrderDetails__itemTitle'>
                    <p>Cook and Deliver</p>
                </div>
                <div className='mainOrderDetails__itemBill'>
                    <h5 className='orders-price1'>1</h5>
                    <h5 className='orders-price2'>$23.80</h5>
                    <h5 className='orders-price3'>$23.80</h5>
                </div>
            </div>
            <div className='mainOrderDetails__sub'>
                <div className='mainOrderDetails__subTotal'>
                    <h5>Sub-total:</h5>
                    <h5>Tax:</h5>
                    <h5>Shipping:</h5>
                    <h5 className='total-text'>Total:</h5>
                </div>
                <div className='mainOrderDetails__subTotalAmount'>
                    <p>$23.80</p>
                    <p>%8</p>
                    <p>$15.00</p>
                    <p className='total-amount'>$39.84</p>
                </div>
            </div>
            <div className='mainOrderDetails__details'>
                <h5>Address</h5>
                <textarea rows='7' />
            </div>
            <div className='mainOrderDetails__ingredients'>
                <h5>Extra Notes</h5>
                <textarea rows='7' />
            </div>
        </div>
    )
}

export default MainOrderDetails
