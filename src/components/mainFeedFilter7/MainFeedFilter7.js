import React from 'react'
import { Button } from '@material-ui/core'
import './MainFeedFilter7.css'
import { useHistory } from 'react-router-dom'

const MainFeedFilter7 = () => {

    const history=useHistory()

    const chefRateButton = () =>{
        history.push('/chef/rate/area')
    }

    const chefRateReviewSavedButton = () =>{
        history.push('/chef/rate/review/saved')
    }

    return (
        <div className='mainFeedFilter7'>
            <Button onClick={chefRateButton} className='rating-button'>Ratings/Reviews</Button>
            <Button onClick={chefRateReviewSavedButton} className='filterchef-active2'>Saved</Button>
        </div>
    )
}

export default MainFeedFilter7
