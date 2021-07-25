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
                    <Button>All</Button>
                    <Button className='filterchef-active'>My Posts</Button>
                    </>
                )
            }
        </div>
    )
}

export default ChefMainFilters 