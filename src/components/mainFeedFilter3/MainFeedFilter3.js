import React from 'react'
import './MainFeedFilter3.css'
import CartIcon from '../../assets/svg/Cart.svg'
import { useHistory } from 'react-router-dom'

const MainFeedFilter3 = () => {

    const history = useHistory()

    return (
        <div className='mainFeedFilters3'>
            <div className='mainFeedFilters3__container'>
                <h3 className='active3' onClick={() => {
                    history.push('/shop/food')
                }}>Food</h3>
                <h3 onClick={() => {
                    history.push('/shop/service')
                }}>Services</h3>
            </div>
            <div className='mainFeedFilters3__image'>
                <img src={CartIcon} className='cart' />
                <span>0</span>
            </div>
        </div>
    )
}

export default MainFeedFilter3