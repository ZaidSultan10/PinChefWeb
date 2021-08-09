import React, { useState } from 'react'
import './MainMyChat.css'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import { MoreHorizOutlined } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import HorizontalLine from '../../assets/svg/Horizontal-spliter-1.svg'
import { useHistory } from 'react-router-dom'
import Modal from 'react-modal'
import PinIcon from '../../assets/svg-for-user-profile/chat_menu_pin_icon.svg'
import DeleteIcon from '../../assets/svg-for-user-profile/Delete_chat.svg'
import ClearIcon from '../../assets/svg-for-user-profile/Clear_messages.svg'
import './MainMyChatModal.css'


const MainMyChat = () => {

    const history = useHistory()

    const [modalIsOpen,setModalIsOpen] = useState(false)
    
    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    return (
        <>
        <Modal isOpen={modalIsOpen}
            onRequestClose={closeModal}
            
            className='chatspopupmodal1'
            contentLabel="Notification Modal" >

                <div className='chats-popup-container'>
                    <div className='chats-popup-top'>
                        <div className='chats-popup-pin'>
                            <img src={PinIcon} alt='star' />
                            <h4>Pin User</h4>
                        </div>
                        <div className='chats-popup-line'>
                            <img src={HorizontalLine} alt='star' />
                        </div>
                        
                    </div>
                    <div className='chats-popup-center'>
                        <div className='chats-popup-delete'>
                            <img src={DeleteIcon} alt='star' />
                            <h4>Delete</h4>
                        </div>
                        <div className='chats-popup-line'>
                            <img src={HorizontalLine} alt='star' />
                        </div>
                    </div>
                    <div className='chats-popup-bottom'>
                        <div className='chats-popup-clear'>
                            <img src={ClearIcon} alt='star' />
                            <h4>Clear Messages</h4>
                        </div>
                    </div>
                </div>
        </Modal>
        <div className='mainMyChat'>
            <div className='mainMyChat__header'>
                <img onClick={() => {
                    history.push('/chef/profile')
                }} src={LeftIcon} alt='star' />
                <h4>MY CHATS</h4>
            </div>
            <div className='mainMyChat__search'>
                <input placeholder='search' />
            </div>
            {[...Array(9)].map(() => (
                <>
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
                        <MoreHorizOutlined onClick={openModal} 
                        className='mainMyChat__moreHoriz' />
                        { /*  <svg className='mypinsvg' xmlns='/assets/svg-for-user-profile/chat_menu_pin_icon.svg' width='30' height='30' viewBox=' 0 0 30 30' /> */}
                        <h5>2h</h5>
                    </div>
                </div>
                <div className='mainMyChat__line'>
                    <img src={HorizontalLine} alt='star' />
                </div>
            </>
            ))}
        </div>
        </>
    )
}

export default MainMyChat
