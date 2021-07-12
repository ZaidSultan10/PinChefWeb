import React from 'react'
import './MainChefCookGuest.css'
import { Avatar } from '@material-ui/core'
import { Button } from '@material-ui/core'


const MainChefCookGuest = () => {
    return (
        <div className='mainChefCookGuest'>
            <div className='mainChefCookGuest__topArea'>
                <div className='mainChefCookGuest__photo'>
                    <Avatar className='mainChefCookGuest__avatar' />
                </div> 
                <div className='mainChefCookGuest__chefName'>
                    <h3>Matt Wilson</h3>
                    <p>Head Chef</p>
                </div>    
            </div>
            <div className='mainChefCookGuest__header'>
                <div className='mainChefCookGuest__item'>
                    <h5>Item</h5>
                </div>
                <div className='mainChefCookGuest__bill'>
                    <h5 className='cook-guest'>QTY</h5>
                    <h5 className='cook-guest'>Price</h5>
                    <h5 >Amount</h5>
                </div>
            </div> 
            <div className='mainChefCookGuest__info'>
                <div className='mainChefCookGuest__itemTitle'>
                    <p>Cook and Deliver</p>
                </div>
                <div className='mainChefCookGuest__itemBill'>
                    <h5 className='cook-guest1'>1</h5>
                    <h5 className='cook-guest2'>$23.80</h5>
                    <h5 className='cook-guest3'>$23.80</h5>
                </div>
            </div>
            <div className='mainChefCookGuest__subTotal'>
                <h5>Tax:<span>%8</span></h5>
                <h5>Total:<span className='total-bill'>$ 39.84</span></h5>
            </div>
            <div className='mainChefCookGuest__day'>
                <h5>Delivery Day<span>*</span></h5>
                <select>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                </select>
            </div>
            <div className='mainChefCookGuest__time'>
                <h5>Delivery Time<span>*</span></h5>
                <select>
                    <option>10pm</option>
                    <option>11pm</option>
                    <option>12pm</option>
                </select>
            </div>
            <div className='mainChefCookGuest__note'>
                <h5>Address</h5>
                <textarea placeholder='Enter note' rows='7' />
            </div>
            <div className='mainChefCookGuest__note'>
                <h5>Extra Notes</h5>
                <textarea placeholder='Enter note' rows='7' />
            </div>
            <div className='mainChefCookGuest__method'>
                <h5>Payment Method</h5>
                <select>
                    <option>Select Payment Method</option>
                    <option>Cash on Delivery</option>
                    <option>Credit Card of Delivery</option>
                    <option>Online Payment</option>
                </select>
            </div>
            <div className='mainChefCookGuest__button'>
                <Button>Send Request</Button>
            </div> 
        </div>
    )
}

export default MainChefCookGuest
