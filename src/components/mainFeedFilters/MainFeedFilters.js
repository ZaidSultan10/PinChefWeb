import React from 'react'
import { NavLink } from 'react-router-dom'
import './MainFeedFilters.css'


const MainFeedFilters = ({mainFilterProp}) => {

    return (
        <div className='mainFeedFilters'>
            {
                mainFilterProp ? (
                    <>
                        
                        <NavLink to='/chef/order-history' exact activeClassName='activess3' className='feedss'>Food</NavLink>
                        <NavLink to='/chef/order-history/services'  activeClassName='activess3' className='recipess'>Service</NavLink>
                        <NavLink to='/chef/order-history/e-masterclass' activeClassName='activess3' className='masterclass'>e-Masterclass</NavLink>
                                
                    </>
                ):(
                    <>
                        <NavLink to='/home' activeClassName='active2' className='feedss'>Feeds</NavLink>
                        <NavLink to='/home/recipe' activeClassName='active2' className='recipess'>Recipe</NavLink>
                        <NavLink to='/home/masterclass' activeClassName='active2' className='masterclass'>e-Masterclass</NavLink>
                    </>
                )
            }
        </div>
    )
}

export default MainFeedFilters
