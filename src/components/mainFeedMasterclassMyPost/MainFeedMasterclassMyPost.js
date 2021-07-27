import React from 'react'
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



const MainFeedMasterclassMyPost = () => {
    return (
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
                    <div className='mainFeedMasterclassMyPost__cancel'>
                        <img src={CancelIcon} />
                        <h5>Cancel Masterclass</h5>
                    </div>
                    <div className='mainFeedMasterclassMyPost__share'>
                        <img src={ShareIcon} />
                        <h5>Share Post</h5>
                    </div>
                    <div className='mainFeedMasterclassMyPost__price'>
                        <img src={TicketPriceIcon} />
                        <h5>Ticket Price: $25</h5>
                    </div>
                </div>
                <div className='mainFeedMasterclassMyPost__middleRight'>
                    <img src={SetNotificationButton} />
                </div>
            </div>
            <div className='mainFeedMasterclassMyPost__bottom'>
                <div className='mainFeedMasterclassMyPost__link'>
                    <img src={LinkIcon} />
                    <a href='#'>pinchef/io/cookingplov.io</a>
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
    )
}

export default MainFeedMasterclassMyPost
