import React, { useState } from 'react'
import './MainFeedMasterclassMyPost.css'
import GreenInfoIcon from '../../assets/svg/Green_info.svg'
import AnyImage from '../../assets/chef-images/chef-image1.jpg'
import LineIcon from '../../assets/svg/Horizontal-spliter-1.svg'
import LinkIcon from '../../assets/svg/masterclass_link_icon.svg'
import TicketIcon from '../../assets/svg/ticket-icon.svg'
import SetNotificationButton from '../../assets/svg/Set_notification_btn.svg'
import TimeLeftIcon from '../../assets/svg/Time_left.svg'
import DateTimeIcon from '../../assets/svg/Date_Time.svg'
import DurationIcon from '../../assets/svg/Duration.svg'
import CancelIcon from '../../assets/svg/Cancel_masterclass.svg'
import ShareIcon from '../../assets/svg/Share_icon.svg'
import TicketPriceIcon from '../../assets/svg/Ticket_price_icon.svg'
import NotificationCancelIcon from '../../assets/svg-for-user-profile/Turn_of_notifications.svg'
import './MainFeedMasterclassMyPostModal.css'
import { Button } from '@material-ui/core'
import Modal from 'react-modal'
import LeftTimeIcon from '../../assets/svg/Time_left.svg'


const MainFeedMasterclassMyPost = () => {

    const [modalIsOpen,setModalIsOpen] = useState(false)
    const [modalIsOpen1,setModalIsOpen1] = useState(false)
    const [modalIsOpen2,setModalIsOpen2] = useState(false)


    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const openModal1 = () => {
        setModalIsOpen1(true)
    }

    const closeModal1 = () => {
        setModalIsOpen1(false)
    }

    const openModal2 = () => {
        setModalIsOpen2(true)
    }

    const closeModal2 = () => {
        setModalIsOpen2(false)
    }

    return (
        <>
        <Modal isOpen={modalIsOpen}
            onRequestClose={closeModal}
            
            className='masterclassnoticemodal1'
            contentLabel="Notification Modal">
            <div className='notice-master-container'>
                <div className='notice-master-top'>
                    <h5>EMPTY CART</h5>
                    <img src={NotificationCancelIcon} />   
                </div>
                <div className='notice-master-center'>
                    <p>
                        Are you sure you want to
                        turn off your notification?
                    </p>
                </div>
                <div className='notice-master-bottom'>
                    <Button onClick={closeModal} className='notice-master-no'>Cancel</Button>
                    <Button onClick={closeModal} className='notice-master-allow'>Yes</Button>
                </div>
            </div>
        </Modal>
        <Modal isOpen={modalIsOpen1}
            onRequestClose={closeModal1}
            
            className='masterclasscancelmodal1'
            contentLabel="Notification Modal">
            <div className='cancel-master-container'>
                <div className='cancel-master-top'>
                    <h5>CANCEL MASTERCLASS</h5>
                    
                </div>
                <div className='cancel-master-center'>
                    <h5>Explain your emergency and refund
                        info to customers
                    </h5>
                    <textarea rows='7' placeholder='Enter message to customers' />
                </div>
                <div className='cancel-master-bottom'>
                    
                    <Button onClick={closeModal1} className='cancel-master-allow'>Ok</Button>
                </div>
            </div>
        </Modal>

        <Modal isOpen={modalIsOpen2}
            onRequestClose={closeModal2}
            
            className='masterclassinfomodal1'
            contentLabel="Notification Modal">
                <div className='class-info-container'>
                    <div className='class-info-top'>
                        <h5></h5>
                        <h3>x</h3>
                    </div>
                    <div className='class-info-center'>
                        <div className='class-info-centerLeft'>
                            <h4>Pizza</h4>
                            <img src={AnyImage} />
                            
                        </div>
                        <div className='class-info-centerRight'>
                            <p>Lorem Ipsum</p>
                            <span>Ingredients:<p>peppers,flour,orange juice</p></span>
                            <div className='class-info-timings'>
                                <div className='class-info-price'>
                                    <h5>$</h5>
                                    <p>25</p>   
                                </div>
                                <div className='class-info-space'>
                                    <h5>|</h5>
                                </div>
                                <div className='class-info-time'>
                                    <img src={LeftTimeIcon} />
                                    <p>02.20.20 - 12:30</p>
                                </div>
                                <div className='class-info-space'>
                                    <h5>|</h5>
                                </div>
                                <div className='class-info-duration'>
                                    <img src={DurationIcon} />
                                    <p>2:30</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='class-info-bottom'>
                        <div className='class-info-bottomLeft'>
                            <h5>Italian</h5>
                            <p>______</p>
                            <h5>Vegan</h5>
                        </div>
                        <div className='class-info-bottomRight'>
                            <p>Available Tickets</p>
                            <img src={TicketIcon} />
                            <h4>34</h4>
                        </div>
                    </div>
                </div>
        </Modal>

        <div className='mainFeedMasterclassMyPost'>
            <div className='mainFeedMasterclassMyPost__top'>
                <img src={GreenInfoIcon} />
                <p>Posted on 24/05/2020 23:00</p>
            </div>
            <div className='mainFeedMasterclassMyPost__middle'>
                <div className='mainFeedMasterclassMyPost__middleLeft'>
                    <div className='mainFeedMasterclassMyPost__leftHeading'>
                        <h4>PIZZA</h4>
                        <img src={AnyImage} />
                    </div>
                </div>
                <div className='mainFeedMasterclassMyPost__middleCenter'>
                    <div className='mainFeedMasterclassMyPost__date'>
                        <img src={TimeLeftIcon} />
                        <p>2 h/ 49 m/ 20 sec left</p>
                    </div>
                    <div className='mainFeedMasterclassMyPost__time'>
                        <img src={DateTimeIcon} />
                        <p>02:20:20 - 12:30</p>
                    </div>
                    <div className='mainFeedMasterclassMyPost__duration'>
                        <img src={DurationIcon} />
                        <p>2:30</p>
                    </div>
                    <div onClick={openModal1} className='mainFeedMasterclassMyPost__cancel'>
                        <img src={CancelIcon} />
                        <h5>Cancel Masterclass</h5>
                    </div>
                    <div onClick={openModal2} className='mainFeedMasterclassMyPost__share'>
                        <img src={ShareIcon} />
                        <h5>Share Post</h5>
                    </div>
                    <div className='mainFeedMasterclassMyPost__price'>
                        <img src={TicketPriceIcon} />
                        <h5>Ticket Price: $25</h5>
                    </div>
                </div>
                <div className='mainFeedMasterclassMyPost__middleRight'>
                    <img onClick={openModal} src={SetNotificationButton} />
                </div>
            </div>
            <div className='mainFeedMasterclassMyPost__bottom'>
                <div className='mainFeedMasterclassMyPost__link'>
                    <img src={LinkIcon} />
                    <input placeholder='Enter e-Masterclass Link' />
                </div>
                <div className='mainFeedMasterclassMyPost__ticket'>
                    <p>Bought Tickets:</p>
                    <img src={TicketIcon} />
                    <h5>34</h5>
                </div>
            </div>
            <div className='mainFeedMasterclassMyPost__bottomLine'>
                <img src={LineIcon} />
            </div>
        </div>
        </>
    )
}

export default MainFeedMasterclassMyPost
