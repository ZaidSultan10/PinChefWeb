import React, { useState } from 'react'
import './MainFoodCheckoutTakeaway.css'
import { Avatar } from '@material-ui/core'
import { Button } from '@material-ui/core'



const MainFoodCheckoutTakeaway = ({takeawayProp}) => {
   
    const [heading,setHeading] = useState('TAKEAWAY')

    return (
        <div className='mainFoodCheckoutTakeaway'>
            <div className='mainFoodCheckoutTakeaway__top'>
                {takeawayProp ? (
                    
                    <h5>{heading}</h5>
                ):
                (
                    <h5>{heading}</h5>
                )}
                
                <p>13 October,2020</p>
            </div>
            <div className='mainFoodCheckoutTakeaway__user'>
                <Avatar className='mainFoodCheckoutTakeaway__avatar' />
                <div className='mainFoodCheckoutTakeaway__username'>
                    <h4>Matt Wilson</h4>
                    <h5>Executive Chef</h5>
                </div>
            </div>
            <div className='mainFoodCheckoutTakeaway__header'>
                <div className='mainFoodCheckoutTakeaway__item'>
                    <h5>Item</h5>
                </div>
                <div className='mainFoodCheckoutTakeaway__bill'>
                    <h5 className='takeaway-price'>QTY</h5>
                    <h5 className='takeaway-price'>Price</h5>
                    <h5 >Amount</h5>
                </div>
            </div> 
            <div className='mainFoodCheckoutTakeaway__info'>
                <div className='mainFoodCheckoutTakeaway__itemTitle'>
                    <p>Cook and Deliver</p>
                </div>
                <div className='mainFoodCheckoutTakeaway__itemBill'>
                    <h5 className='takeaway-price1'>1</h5>
                    <h5 className='takeaway-price2'>$23.80</h5>
                    <h5 className='takeaway-price3'>$23.80</h5>
                </div>
            </div>
            <div className='mainFoodCheckoutTakeaway__sub'>
                <div className='mainFoodCheckoutTakeaway__subTotal'>
                    <h5>Tax:</h5>
                    <h5>Delivery:</h5>
                    <h5 className='takeaway-text'>Total:</h5>
                </div>
                <div className='mainFoodCheckoutTakeaway__subTotalAmount'>
                    <p>%8</p>
                    <p>$15.00</p>
                    <p className='takeaway-amount'>$39.84</p>
                </div>
            </div>
            <div className='mainFoodCheckoutTakeaway__type'>
                <h5>Order Type<span>*</span></h5>
                <div className='mainFoodCheckoutTakeaway__delivery'>
                    <div className='mainFoodCheckoutTakeaway__del'>
                        <input type='radio' name="take" onClick={() => {
                            setHeading("TAKEAWAY")
                        }} />
                        <h5>Takeout/away</h5>
                    </div>
                    <div className='mainFoodCheckoutTakeaway__pick'>
                        <input type='radio' name="take" onClick={()=>{setHeading('DELIVERY')}} />
                        <h5>Delivery</h5>
                    </div>
                </div>
                <div className='mainFoodCheckoutTakeaway__ship'>
                    <input type='radio' name="take" onClick={() => {
                            setHeading("SHIPPING")
                        }} />
                    <h5>Shipping</h5>
                </div>
            </div>
            {
                heading !== 'SHIPPING' && (
                    <>
                        <div className='mainFoodCheckoutTakeaway__cuisine'>
                            <h5>Delivery Day<span>*</span></h5>
                            <select id='mainFoodCheckoutTakeaway__cuisineOptions'>
                                <option>Monday</option>
                                <option>tuesday</option>
                                <option>Wednesday</option>
                                <option>Thursday</option>
                                <option>Friday</option>
                            </select>
                        </div>
                        <div className='mainFoodCheckoutTakeaway__dietary'>
                            <h5>Delivery Time<span>*</span></h5>
                            <select id='mainFoodCheckoutTakeaway__dietOptions'>
                                <option>Monday</option>
                                <option>tuesday</option>
                                <option>Wednesday</option>
                                <option>Thursday</option>
                                <option>Friday</option>
                            </select>
                        </div>
                    </>
                )
            }
            <div className='mainFoodCheckoutTakeaway__details'>
                <h5>Address</h5>
                <textarea rows='7' placeholder="Chef Address" />
            </div>
            <div className='mainFoodCheckoutTakeaway__ingredients'>
                <h5>Extra Notes</h5>
                <textarea rows='7' placeholder='Extra Note' />
            </div>
            <div className='mainFoodCheckoutTakeaway__dietary'>
                <h5>Payment Methods<span>*</span></h5>
                <select id='mainFoodCheckoutTakeaway__dietOptions'>
                    <option>Cash on delivery</option>
                    <option>Credit card on delivery</option>
                    <option>Online payment</option>
                    
                </select>
            </div>
            <div className='mainFoodCheckoutTakeaway__button'>
                <Button>Send Request</Button>
            </div>
        </div>
    )
}

export default MainFoodCheckoutTakeaway
