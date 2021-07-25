import React from 'react'
import { useHistory } from 'react-router-dom'
import './MainFeedFilters.css'

const MainFeedFilters = ({mainFilterProp}) => {
   
    const history=useHistory()
   
    return (
        <div className='mainFeedFilters'>
            {
                mainFilterProp ? (
                    <>
                        <h3  className='active2 feedss' onClick={() => {
                            history.push('/chef/order-history')
                        }}>Foods</h3>
                        <h3 className='recipess' onClick={() => {
                            history.push('/chef/order-history/services')
                        }}>Services</h3>
                        <h3  className='masterclass' onClick={() => {
                            history.push('/chef/order-history/e-masterclass')
                        }}>e-Masterclass</h3>        
                    </>
                ):(
                    <>
                        <h3 onClick={() => {
                            history.push('/homepage')
                        }} className='active2 feedss'>Feeds</h3>
                        <h3 onClick={() => {
                            history.push('/homerecipe')
                        }} className='recipess'>Recipes</h3>
                        <h3 onClick={() => {
                            history.push('/home/masterclass')
                        }} className='masterclass'>e-Masterclass</h3>
                    </>
                )
            }
        </div>
    )
}

export default MainFeedFilters
