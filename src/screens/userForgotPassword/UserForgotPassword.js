import React from 'react'
import './UserForgotPassword.css'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'


const UserForgotPassword = () => {

    const history=useHistory()

    return (
        <div className='userForgotPassword'>
            <div className='userForgotPassword__container'>
                <div className='userForgotPassword__header'>
                    <img src={LeftIcon} />
                    <h4>Forgot Password</h4>
                </div>
                <div className='userForgotPassword__input'>
                    <h5>Email/ID</h5>
                    <input type='text' placeholder='Enter email of ID' />
                </div>
                <div className='userForgotPassword__button'>
                    <Button onClick={() => {
                        history.push('/user/verification')
                    }}>Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForgotPassword
