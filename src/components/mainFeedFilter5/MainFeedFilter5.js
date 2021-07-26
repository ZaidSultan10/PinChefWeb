import React from 'react'
import { useHistory } from 'react-router-dom'
import './MainFeedFilter5.css'

const MainFeedFilter5 = () => {

    const history=useHistory()

    const chefHomeFeedRoute = () => {
        history.push('/chef/home/feed')
    }

    const chefHomeRecipeRoute =() => {
        history.push('/chef/home/feed/recipe')
    }

    const chefHomeFoodRoute = () => {
        history.push('/chef/home/feed/food')
    }

    const chefHomeServiceRoute = () => {
        history.push('/chef/home/feed/service')
    }

    const chefHomeMasterclassRoute = () =>{
        history.push('/chef/home/feed/masterclass')
    }

    return (
        <div className='mainFeedFilter5'>
            <h3 onClick={chefHomeFeedRoute} className='active2'>Feeds</h3>
            <h3 onClick={chefHomeRecipeRoute}>Recipes</h3>
            <h3 onClick={chefHomeFoodRoute}>Food</h3>
            <h3 onClick={chefHomeServiceRoute}>Service</h3>
            <h3 onClick={chefHomeMasterclassRoute}>e-Masterclass</h3>
        </div>
    )
}

export default MainFeedFilter5
