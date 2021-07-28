import { ChevronLeft, QueryBuilder } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import React from 'react'
import './MainChats.css'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useHistory } from 'react-router-dom';


const MainChats = () => {

    const history=useHistory()

    return (
        <div className='mainChats'>
            <div className='mainChats__container'>
                <div className='mainChats__header'>
                    <div className='mainChats__leftIcon'>
                        <ChevronLeft onClick={() => {
                            history.push('/user/chef/profile')
                        }} className='mainChats__chevronLeft' />
                    </div>
                    <div className='mainChats__profile'>
                        <Avatar className='mainChats__avatar' />
                        <div className='mainChats__name'>
                            <h4>Robert Mills</h4>
                            <p>2 hours ago</p>
                        </div>
                    </div>
                    <div className='mainChats__status'>
                        <NotificationsActiveIcon className='mainChats__notify' />
                    </div>
                </div>
                <div className='mainChats__messageReciever'>
                    <p>Hello sir how are you,
                    Hello sir how are youHello sir how are you
                    Hello sir how are you
                    Hello sir how are you
                    Hello sir how are you
                    Hello sir how are you
                    </p>
                    <div className='mainChats__time'>
                        <QueryBuilder className='mainChats__timer' />
                        <p>Today 23:00</p>
                    </div>
                </div>
                <div className='mainChats__messageSender'>
                    <p>Hello sir how are you</p>
                    <div className='mainChats__time1'>
                        <QueryBuilder className='mainChats__timer1' />
                        <p>Today 23:00</p>
                    </div>
                </div>
                <div className='mainChats__input'>
                    <AddCircleIcon className='mainChats__add' />
                    <input placeholder='say something...' />
                    <ArrowRightAltIcon className='mainChats__sendMessage' />
                </div>
            </div>
        </div>
    )
}

export default MainChats
