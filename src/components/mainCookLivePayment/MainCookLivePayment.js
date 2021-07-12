import React from 'react'
import './MainCookLivePayment.css'
import { Avatar } from '@material-ui/core'
import { Button } from '@material-ui/core'

const MainCookLivePayment = () => {
    return (
        <div className='mainCookLivePayment'>
            <div className='mainCookLivePayment__topArea'>
                <div className='mainCookLivePayment__photo'>
                    <Avatar className='mainCookLivePayment__avatar' />
                </div> 
                <div className='mainCookLivePayment__chefName'>
                    <h3>Matt Wilson</h3>
                    <p>Head Chef</p>
                </div>    
            </div>
            <div className='mainCookLivePayment__header'>
                <div className='mainCookLivePayment__item'>
                    <h5>Item</h5>
                </div>
                <div className='mainCookLivePayment__bill'>
                    <h5 className='cook-price'>QTY</h5>
                    <h5 className='cook-price'>Price</h5>
                    <h5 >Amount</h5>
                </div>
            </div> 
            <div className='mainCookLivePayment__info'>
                <div className='mainCookLivePayment__itemTitle'>
                    <p>Cook and Deliver</p>
                </div>
                <div className='mainCookLivePayment__itemBill'>
                    <h5 className='cook-price1'>1</h5>
                    <h5 className='cook-price2'>$23.80</h5>
                    <h5 className='cook-price3'>$23.80</h5>
                </div>
            </div>
            <div className='mainCookLivePayment__subTotal'>
                <h5>Tax:<span>%8</span></h5>
                <h5>Total:<span className='total-bill'>$ 39.84</span></h5>
            </div>
            <div className='mainCookLivePayment__day'>
                <h5>Day<span>*</span></h5>
                <select>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                </select>
            </div>
            <div className='mainCookLivePayment__time'>
                <h5>Time<span>*</span></h5>
                <select>
                    <option>10pm</option>
                    <option>11pm</option>
                    <option>12pm</option>
                </select>
            </div>
            <div className='mainCookLivePayment__note'>
                <h5>Extra Notes</h5>
                <textarea placeholder='Enter note' rows='7' />
            </div>
            <div className='mainCookLivePayment__method'>
                <h5>Payment Method</h5>
                <div className='mainCookLivePayment__methodText'>
                    <p>Online</p>
                </div>
            </div>
            <div className='mainCookLivePayment__button'>
                <Button>Send Request</Button>
            </div>
        </div>
    )
}

export default MainCookLivePayment
