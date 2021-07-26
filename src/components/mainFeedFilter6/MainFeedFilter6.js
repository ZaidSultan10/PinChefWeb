import React from 'react'
import { useHistory } from 'react-router-dom'
import './MainFeedFilter6.css'



const MainFeedFilter6 = () => {

    const history=useHistory()

    const chefHomeFeedRouteMyPost = () => {
        history.push('/chef/feed/my-posts')
    }

    const chefHomeRecipeRouteMyPost =() => {
        history.push('/chef/feed/recipe/my-posts')
    }

    const chefHomeFoodRouteMyPost = () => {
        history.push('/chef/feed/food/my-posts')
    }

    const chefHomeServiceRouteMyPost = () => {
        history.push('/chef/feed/service/my-posts')
    }

    const chefHomeMasterclassRouteMyPost = () =>{
        history.push('/chef/home/feed/masterclass')
    }

    return (
        <div className='mainFeedFilter6'>
            <h3 onClick={chefHomeFeedRouteMyPost} className='active2'>Feeds</h3>
            <h3 onClick={chefHomeRecipeRouteMyPost}>Recipes</h3>
            <h3 onClick={chefHomeFoodRouteMyPost}>Food</h3>
            <h3 onClick={chefHomeServiceRouteMyPost}>Service</h3>
            <h3 onClick={chefHomeMasterclassRouteMyPost}>e-Masterclass</h3>
        </div>
    )
}

export default MainFeedFilter6
