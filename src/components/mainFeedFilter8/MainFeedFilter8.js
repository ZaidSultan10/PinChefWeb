import React from 'react'
import { useHistory } from 'react-router-dom'
import './MainFeedFilter8.css'

const MainFeedFilter8 = () => {

    const history=useHistory()

    const chefFeedSaved = () =>{
        history.push('/chef/rate/review/saved')
    }

    const chefFeedSavedRecipeRoute = () => {
        history.push('/chef/rate/review/saved/recipe')
    } 

    const chefFeedSavedFoodService = () => {
        history.push('/chef/rate/review/saved/food-service')
    }

    

    return (
        <div className='mainFeedFilter8'>
            <h3 onClick={chefFeedSaved} className='active2'>Feeds</h3>
            <h3 onClick={chefFeedSavedRecipeRoute}>Recipes</h3>
            <h3 onClick={chefFeedSavedFoodService}>Food&Services</h3>
        </div>
    )
}

export default MainFeedFilter8
