import React from 'react'
import './MainFeedFilters.css'

const MainFeedFilters = ({mainFilterProp}) => {
    return (
        <div className='mainFeedFilters'>
            <h3 className='active2 feedss'>Feeds</h3>
            <h3 className='recipess'>Recipes</h3>
            <h3 className='masterclass'>e-Masterclass</h3>
        </div>
    )
}

export default MainFeedFilters
