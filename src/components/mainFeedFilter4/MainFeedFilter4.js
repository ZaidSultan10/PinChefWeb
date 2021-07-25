import React from 'react'
import { useHistory } from 'react-router-dom'
import './MainFeedFilter4.css'

const MainFeedFilter4 = () => {

    const history=useHistory()

    return (
        <div className='mainFeedFilter4'>
            <h3 className='active2' onClick={() => {
                history.push('/star/feed')
            }}>Feeds</h3>
            <h3 onClick={() => {
                history.push('/star/feed/recipe')
            }}>Recipes</h3>
            <h3 onClick={() => {
                history.push('/star/feed/food-service')
            }}>Food&Services</h3>
            <h3 onClick={() => {
                history.push('/star/my-purchases')
            }}>My Purchases</h3>
        </div>
    )
}

export default MainFeedFilter4
