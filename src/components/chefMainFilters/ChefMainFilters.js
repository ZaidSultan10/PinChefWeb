import React from 'react'
import { Button } from '@material-ui/core'
import './ChefMainFilters.css'
import { NavLink, useHistory } from 'react-router-dom'


const ChefMainFilters = ({chefFilterProp}) => {
    
    const history=useHistory()

    return (

        <div className='chefMainFilters'>
            {
                chefFilterProp ?
                (
                    <>
                    <NavLink to='/chef/order-history' activeClassName='filterchef-active' >
                        My Sales
                    </NavLink>
                    <NavLink to='/chef/order-history/my-purchases' activeClassName='filterchef-active'>
                        My Purhases
                    </NavLink>
                    </>
                ):(
                    <>
                    <NavLink to='/chef/home/feed' activeClassName='cheffilter2' className='chefMainFilters__allposts'>ALL</NavLink>
                    <NavLink to='/chef/feed/my-posts' activeClassName='cheffilter2' className='chefMainFilters__myposts'>MY POSTS</NavLink>
                    
                    </>
                )
            }
        </div>
    )
}

export default ChefMainFilters 