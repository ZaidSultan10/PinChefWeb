import React from 'react'
import './MainFeedFilter5.css'
import { NavLink } from 'react-router-dom'

const MainFeedFilter5 = () => {

    return (
        <div className='mainFeedFilter5'>

            <NavLink exact to='/chef/home/feed' activeClassName='activefilter52' className='mainFeedFilter5__feed'>Feeds</NavLink>
            <NavLink to='/chef/home/feed/recipe' activeClassName='activefilter52' className='mainFeedFilter5__recipe' >Recipes</NavLink>
            <NavLink to='/chef/home/feed/food' activeClassName='activefilter52' className='mainFeedFilter5__food'>Food</NavLink>
            <NavLink to='/chef/home/feed/service' activeClassName='activefilter52' className='mainFeedFilter5__service'>Service</NavLink>
            <NavLink to='/chef/home/feed/masterclass' activeClassName='activefilter52' className='mainFeedFilter5__masterclass'>e-Masterclass</NavLink>

        </div>
    )
}

export default MainFeedFilter5
