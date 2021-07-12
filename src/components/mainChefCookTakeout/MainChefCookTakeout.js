import React from 'react'
import './MainChefCookTakeout.css'
import { Avatar } from '@material-ui/core'
import { Button } from '@material-ui/core'


const MainChefCookTakeout = () => {
    return (
        <div className='mainChefCookTakeout'>
            <div className='mainChefCookTakeout__topArea'>
                <div className='mainChefCookTakeout__photo'>
                    <Avatar className='mainChefCookTakeout__avatar' />
                </div> 
                <div className='mainChefCookTakeout__chefName'>
                    <h3>Matt Wilson</h3>
                    <p>Head Chef</p>
                </div>    
            </div>
            <div className='mainChefCookTakeout__header'>
                <div className='mainChefCookTakeout__item'>
                    <h5>Item</h5>
                </div>
                <div className='mainChefCookTakeout__bill'>
                    <h5 className='cook-takeout'>QTY</h5>
                    <h5 className='cook-takeout'>Price</h5>
                    <h5 >Amount</h5>
                </div>
            </div> 
            <div className='mainChefCookTakeout__info'>
                <div className='mainChefCookTakeout__itemTitle'>
                    <p>Cook and Deliver</p>
                </div>
                <div className='mainChefCookTakeout__itemBill'>
                    <h5 className='cook-takeout1'>1</h5>
                    <h5 className='cook-takeout2'>$23.80</h5>
                    <h5 className='cook-takeout3'>$23.80</h5>
                </div>
            </div>
            <div className='mainChefCookTakeout__subTotal'>
                <h5>Tax:<span>%8</span></h5>
                <h5>Total:<span className='total-bill'>$ 39.84</span></h5>
            </div>
            <div className='mainChefCookTakeout__day'>
                <h5>Delivery Day<span>*</span></h5>
                <select>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                </select>
            </div>
            <div className='mainChefCookTakeout__time'>
                <h5>Delivery Time<span>*</span></h5>
                <select>
                    <option>10pm</option>
                    <option>11pm</option>
                    <option>12pm</option>
                </select>
            </div>
            <div className='mainChefCookTakeout__note'>
                <h5>Address</h5>
                <textarea placeholder='Enter note' rows='7' />
            </div>
            <div className='mainChefCookTakeout__note'>
                <h5>Extra Notes</h5>
                <textarea placeholder='Enter note' rows='7' />
            </div>
            <div className='mainChefCookTakeout__method'>
                <h5>Payment Method</h5>
                <select>
                    <option>Select Payment Method</option>
                    <option>Cash on Delivery</option>
                    <option>Credit Card of Delivery</option>
                    <option>Online Payment</option>
                </select>
            </div>
            <div className='mainChefCookTakeout__button'>
                <Button>Send Request</Button>
            </div>
        </div>
    )
}

export default MainChefCookTakeout
