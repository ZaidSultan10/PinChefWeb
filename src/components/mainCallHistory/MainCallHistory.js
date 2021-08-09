import React from 'react'
import './MainCallHistory.css'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import { SearchOutlined } from '@material-ui/icons'
import IncomingCallIcon from '../../assets/svg-for-user-profile/Incomming-audio-call.svg'
import IncomingVideoIcon from '../../assets/svg-for-user-profile/Incomming-video-call.svg'
import BottomLine from '../../assets/svg/Horizontal-spliter-1.svg'
import { Avatar } from '@material-ui/core'
import { useHistory } from 'react-router-dom'



const MainCallHistory = () => {

    const history = useHistory()

    return (
        <div className='mainCallHistory'>
            <div className='mainCallHistory__header'>
                <img onClick={() => {
                    history.push('/chef/profile')
                }} src={LeftIcon} alt='icon' />
                <h5>MY CALLS</h5>
            </div>
            <div className='mainCallHistory__clear'>
                <p className='clear-call'>Clear Calls</p>
                <p className='clear-all'>Clear All</p>
            </div>
            <div className='mainCallHistory__input'>
                <input placeholder='Search' />
                <SearchOutlined className='mainCallHistory__search' />
            </div>
            {[...Array(5)].map(() => (
                <>
                <div className='mainCallHistory__main'>
                    <Avatar className='mainCallHistory__avatar' />
                    <div className='mainCallHistory__username'>
                        <h4>John Doe</h4>
                        <img src={IncomingCallIcon} alt='icon' />
                        <p>8:45</p>

                    </div>
                    <img onClick={() => {
                        history.push('/chef/call')
                    }} src={IncomingVideoIcon} alt='icon' />
                    <img onClick={() => {
                        history.push('/chef/call')
                    }} src={IncomingCallIcon} alt='icon' />
                </div>
                <div className='mainCallHistory__bottom'>
                    <img src={BottomLine} alt='icon' />
                </div>
                </>
            ))}
            
        </div>

    )
}

export default MainCallHistory
