import React from 'react'
import './MainFeedFilter4.css'
import { NavLink } from 'react-router-dom'

const MainFeedFilter4 = () => {

    

    return (
        <div className='mainFeedFilter4'>
            <NavLink exact to='/star/feed' activeClassName='activefilter42' className='mainFeedFilter4__feed'>Feeds</NavLink>
            <NavLink to='/star/recipe' activeClassName='activefilter42' className='mainFeedFilter4__recipe'>Recipes</NavLink>
            <NavLink to='/star/food-service' activeClassName='activefilter42' className='mainFeedFilter4__foodservice'>Food&Services</NavLink>
            <NavLink to='/star/my-purchases' activeClassName='activefilter42' className='mainFeedFilter4__purchases'>My Purchases</NavLink>
            
        </div>
    )
}

export default MainFeedFilter4
