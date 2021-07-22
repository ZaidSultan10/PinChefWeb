import ChevronRight from '@material-ui/icons/ChevronRight'
import React from 'react'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import ContactUsIcon from '../../assets/svg/Contact-us.svg'
import './MainContactUs.css'
import { Button } from '@material-ui/core'


const MainContactUs = () => {
    return (
        <div className='mainContactUs'>
            <div className='mainContactUs__header'>
                <img src={LeftIcon} />
                <div className='mainContactUs__contact'>
                    <img src={ContactUsIcon} />
                    <h5>CONTACT US</h5>
                </div>
            </div>
            <div className='mainContactUs__top'>
                <div className='mainContactUs__icon'>
                    <ChevronRight className='mainContactUs__right' />
                </div>
                <h5>Please fill the form below and submit
                        suggestion, feedback, or any
                        advertisement related questions
                </h5>
            </div>
            <div className='mainContactUs__name'>
                <h5>Name</h5>
                <input placeholder='Enter Name' />
            </div>
            <div className='mainContactUs__email'>
                <h5>Email</h5>
                <input placeholder='Enter Email' />
            </div>
            <div className='mainContactUs__subject'>
                <h5>Subject</h5>
                <input placeholder='Enter Subject' />
            </div>
            <div className='mainContactUs__message'>
                <h5>Message</h5>
                <textarea rows='7' placeholder='Enter Message' />
            </div>
            <div className='mainContactUs__button'>
                <Button>Send</Button>
            </div>
        </div>
    )
}

export default MainContactUs
