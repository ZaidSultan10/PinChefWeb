import React from 'react'
import './MainFeedFilter6.css'
import { NavLink } from 'react-router-dom'



const MainFeedFilter6 = () => {


    return (
        <div className='mainFeedFilter6'>
            <NavLink to='/chef/feed/my-posts' exact activeClassName='activefilter62' className='mainFeedFilter6__feed'  >Feeds</NavLink>
            <NavLink to='/chef/feed/recipe/my-posts' activeClassName='activefilter62' className='mainFeedFilter6__recipe' >Recipes</NavLink>
            <NavLink to='/chef/feed/food/my-posts' activeClassName='activefilter62' className='mainFeedFilter6__food' >Food</NavLink>
            <NavLink to='/chef/feed/service/my-posts' activeClassName='activefilter62' className='mainFeedFilter6__service' >Service</NavLink>
            <NavLink to='/chef/feed/masterclass/my-posts' activeClassName='activefilter62' className='mainFeedFilter6__master'>e-Masterclass</NavLink>
            
        </div>
    )
}

export default MainFeedFilter6
