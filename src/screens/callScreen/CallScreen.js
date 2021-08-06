import React from 'react'
import './CallScreen.css'
import HangRedIcon from '../../assets/svg/Hang-of-red.svg'
import MuteIcon from '../../assets/svg/Mute-voice-btnn.svg'
import SpeakerIcon from '../../assets/svg/Speaker-btn.svg'
import  VideoCallIcon from '../../assets/svg/Video-call-btnn.svg'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import { Avatar } from '@material-ui/core'
import { useHistory } from 'react-router-dom'


const CallScreen = () => {

    const history = useHistory()

    return (
        <div className='callScreen'>
            <div className='callScreen__container'>
                <div className='callScreen__Header'>
                    <img onClick={() => {
                        history.push('/chef/profile')
                    }} src={LeftIcon} alt='star' />
                    <h4>Calling</h4>
                </div>
                <div className='callScreen__Image'>
                    <Avatar className='callScreen__avatar' />
                </div>
                <div className='callScreen__name'>
                    <h4>Maria Lu</h4>
                </div>
                <div className='callScreen__actions'>
                    <img src={SpeakerIcon} alt='star' />
                    <img src={VideoCallIcon} alt='star' />
                    <img src={MuteIcon} alt='star' />
                </div>
                <div className='callScreen__end'>
                    <img onClick={() => {
                        history.push('/chef/profile')
                    }} src={HangRedIcon} alt='star' />
                </div>
            </div>
            
        </div>
    )
}

export default CallScreen
