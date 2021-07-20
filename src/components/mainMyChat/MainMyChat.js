import React from 'react'
import './MainMyChat.css'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import { MoreHorizOutlined } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'

const MainMyChat = () => {
    return (
        <div className='mainMyChat'>
            <div className='mainMyChat__header'>
                <img src={LeftIcon} />
                <h4>MY CHATS</h4>
            </div>
            <div className='mainMyChat__search'>
                <input placeholder='search' />
            </div>
            {[...Array(9)].map(() => (
                <div className='mainMyChat__chats'>
                    <div className='mainMyChat__picture'>
                        <Avatar className='mainMyChat__avatar' />
                    </div>
                    <div className='mainMyChat__message'>
                        <h5>John Doe</h5>
                        <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                        </p>
                    </div>
                    <div className='mainMyChat__right'>
                        <MoreHorizOutlined />
                        <h5>2h</h5>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MainMyChat
