import React from 'react'
import './MainOrderHistory.css'
import DownIcon from '../../assets/svg/Down-button-green.svg'
import { useHistory } from 'react-router-dom'

const MainOrderHistory = () => {

    const history=useHistory()

    return (
        <div className='mainOrderHistory'>
            {[...Array(6)].map(()=>(
                <div className='mainOrderHistory__container'>
                    <div className='mainOrderHistory__header'>
                        <div className='mainOrderHistory__item'>
                            <h5>Item</h5>
                        </div>
                        <div className='mainOrderHistory__bill'>
                            <h5 className='history-price'>QTY</h5>
                            <h5 className='history-price'>Price</h5>
                            <h5 >Amount</h5>
                        </div>
                    </div> 
                    <div className='mainOrderHistory__info'>
                        <div className='mainOrderHistory__itemTitle'>
                            <p>Cook and Deliver</p>
                        </div>
                        <div className='mainOrderHistory__itemBill'>
                            <h5 className='history-price1'>1</h5>
                            <h5 className='history-price2'>$23.80</h5>
                            <h5 className='history-price3'>$23.80</h5>
                        </div>
                    </div>
                    <div className='mainOrderHistory__sub'>
                        <div className='mainOrderHistory__subTotal'>
                            
                            <h5 className='history-text'>Total:</h5>
                        </div>
                        <div className='mainOrderHistory__subTotalAmount'>
                            
                            <p className='history-amount'>$39.84</p>
                        </div>
                    </div>
                    
                    <div className='mainOrderHistory__bottom'>
                        <div className='mainOrderHistory__days'>
                            <p>2 days ago</p>
                            <h5>Approved</h5>
                        </div>
                        <div onClick={()=>{
                            history.push('/chef/order-details')
                        }} className='mainOrderHistory__details'>
                            <h5>Details</h5>
                            <img src={DownIcon} />
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default MainOrderHistory
