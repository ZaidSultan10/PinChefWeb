import { Button } from '@material-ui/core'
import React from 'react'
import './USerResetPassword.css'

const UserResetPassword = () => {
    return (
        <div className='userResetPassword'>
            <div className='userResetPassword__container'>
                <div className='userResetPassword__header'>
                    <h4>Reset Password</h4>
                </div>
                <div className='userResetPassword__input'>
                    <h5>New Password</h5>
                    <input type='password' placeholder='Enter new password' />
                </div>
                <div className='userResetPassword__input2'>
                    <h5>Confirm Password</h5>
                    <input type='password' placeholder='Re-Enter new password' />
                </div>
                <div className='userResetPassword__button'>
                    <Button>Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default UserResetPassword
