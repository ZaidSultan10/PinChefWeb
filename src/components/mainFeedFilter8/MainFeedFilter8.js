import React from 'react'
import { useHistory } from 'react-router-dom'
import './MainFeedFilter8.css'
import { NavLink } from 'react-router-dom'

const MainFeedFilter8 = () => {

    const history=useHistory()

    return (
        <div className='mainFeedFilter8'>
            
            <NavLink to='/chef/rate/review/saved' exact activeClassName='activefilter82' className='mainFeedFilter8__feed'>Feeds</NavLink>
            <NavLink to='/chef/rate/review/saved/recipe' activeClassName='activefilter82' className='mainFeedfilter8__recipe'>Recipes</NavLink>
            <NavLink to='/chef/rate/review/saved/food-service' activeClassName='activefilter82' className='mainFeedFilter8__foodservice'>Food&Services</NavLink>

        </div>
    )
}

export default MainFeedFilter8
