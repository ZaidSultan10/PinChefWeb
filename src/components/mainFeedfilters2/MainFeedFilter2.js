import React from 'react'
import { useHistory } from 'react-router-dom'
import './MainFeedFilter2.css'
import { NavLink } from 'react-router-dom'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'

const MainFeedFilter2 = ({filter2Prop}) => {

    const history=useHistory()

    return (
        <>
            {
                filter2Prop ? (
                    <div className='mainFeedFilters21'>
                        <img src={LeftIcon} onClick={() => {
                            history.push('/chef/profile')
                        }} alt='star' />
                        <NavLink to='/chef/all-chef' activeClassName='activefilter22' className='mainFeedFilters2__allChef'>Chefs</NavLink>
                        <NavLink to='/chef/followed-chef' activeClassName='activefilter22' className='mainFeedFilters2__followed'>Following</NavLink>
                    </div>
                )
                :(
                    <div className='mainFeedFilters2'>
                        <NavLink to='/user/all-chef' activeClassName='activefilter22' className='mainFeedFilters2__allChef'>Chefs</NavLink>
                        <NavLink to='/user/followed-chef' activeClassName='activefilter22' className='mainFeedFilters2__followed'>Following</NavLink>
                    </div>
                )
            }
        </>
    )
}

export default MainFeedFilter2
