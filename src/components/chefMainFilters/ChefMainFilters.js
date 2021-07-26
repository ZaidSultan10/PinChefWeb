import React from 'react'
import { Button } from '@material-ui/core'
import './ChefMainFilters.css'
import { useHistory } from 'react-router-dom'

const ChefMainFilters = ({chefFilterProp}) => {
    
    const history=useHistory()

    const myPurchasesButton = () =>{
        history.push('/chef/order-history/my-purchases')
    }

    const mySalesButton = () =>{
        history.push('/chef/order-history')
    }
    
    const myPostFeedRoute = () => {
        history.push('/chef/feed/my-posts')
    }

    const allFeedRoute = () => {
        history.push('/chef/home/feed')
    }
    return (

        <div className='chefMainFilters'>
            {
                chefFilterProp ?
                (
                    <>
                    <Button onClick={mySalesButton}>My Sales</Button>
                    <Button className='filterchef-active'
                    onClick={myPurchasesButton}>My Purhases</Button>
                    </>
                ):(
                    <>
                    <Button onClick={allFeedRoute}>All</Button>
                    <Button onClick={myPostFeedRoute} className='filterchef-active'>My Posts</Button>
                    </>
                )
            }
        </div>
    )
}

export default ChefMainFilters 