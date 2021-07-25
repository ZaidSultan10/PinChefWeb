import React from 'react'
import { useHistory } from 'react-router-dom'
import './MainFeedFilter2.css'

const MainFeedFilter2 = () => {

    const history=useHistory()

    return (
        <div className='mainFeedFilters2'>
            <h3 className='active2' onClick={
                () => {history.push('/chef/all-chef')}
            }>All Chefs</h3>
            <h3 onClick={() => {
                history.push('/chef/followed-chef')
            }}>Following</h3>
        </div>
    )
}

export default MainFeedFilter2
