import React from 'react'
import './MainChefCookDelivery.css'
import { Avatar } from '@material-ui/core'
import { Button } from '@material-ui/core'

const MainChefCookDelivery = () => {
    return (
        <div className='mainChefCookDelivery'>
            <div className='mainChefCookDelivery__topArea'>
                <div className='mainChefCookDelivery__photo'>
                    <Avatar className='mainChefCookDelivery__avatar' />
                </div> 
                <div className='mainChefCookDelivery__chefName'>
                    <h3>Matt Wilson</h3>
                    <p>Head Chef</p>
                </div>    
            </div>
            <div className='mainChefCookDelivery__header'>
                <div className='mainChefCookDelivery__item'>
                    <h5>Item</h5>
                </div>
                <div className='mainChefCookDelivery__bill'>
                    <h5 className='cook-delivery'>QTY</h5>
                    <h5 className='cook-delivery'>Price</h5>
                    <h5 >Amount</h5>
                </div>
            </div> 
            <div className='mainChefCookDelivery__info'>
                <div className='mainChefCookDelivery__itemTitle'>
                    <p>Cook and Deliver</p>
                </div>
                <div className='mainChefCookDelivery__itemBill'>
                    <h5 className='cook-delivery1'>1</h5>
                    <h5 className='cook-delivery2'>$23.80</h5>
                    <h5 className='cook-delivery3'>$23.80</h5>
                </div>
            </div>
            <div className='mainChefCookDelivery__subTotal'>
                <h5>Tax:<span>%8</span></h5>
                <h5>Total:<span className='total-bill'>$ 39.84</span></h5>
            </div>
            <div className='mainChefCookDelivery__day'>
                <h5>Day<span>*</span></h5>
                <select>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                </select>
            </div>
            <div className='mainChefCookDelivery__time'>
                <h5>Time<span>*</span></h5>
                <select>
                    <option>10pm</option>
                    <option>11pm</option>
                    <option>12pm</option>
                </select>
            </div>
            <div className='mainChefCookDelivery__note'>
                <h5>Address</h5>
                <textarea placeholder='Enter note' rows='7' />
            </div>
            <div className='mainChefCookDelivery__note'>
                <h5>Extra Notes</h5>
                <textarea placeholder='Enter note' rows='7' />
            </div>
            <div className='mainChefCookDelivery__method'>
                <h5>Payment Method</h5>
                <select>
                    <option>Select Payment Method</option>
                    <option>Cash on Delivery</option>
                    <option>Credit Card of Delivery</option>
                    <option>Online Payment</option>
                </select>
            </div>
            <div className='mainChefCookDelivery__button'>
                <Button>Send Request</Button>
            </div>
        </div>
    )
}

export default MainChefCookDelivery
