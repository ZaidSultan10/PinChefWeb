import React from 'react'
import './MainFeedFilter3.css'
import CartIcon from '../../assets/svg/Cart.svg'
import { useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


const MainFeedFilter3 = () => {

    const history = useHistory()

    return (
        <div className='mainFeedFilters3'>
            <div className='mainFeedFilters3__container'>
               <NavLink exact to='/shop/food' activeClassName='activefilter32' className='mainFeedFilter3__food'>Food</NavLink>
               <NavLink to='/shop/service' activeClassName='activefilter32' className='mainFeedFilter3__service'>Services</NavLink>
            </div>
            <div className='mainFeedFilters3__image'>
                <img src={CartIcon} className='cart' />
                <span>0</span>
            </div>
        </div>
    )
}

export default MainFeedFilter3