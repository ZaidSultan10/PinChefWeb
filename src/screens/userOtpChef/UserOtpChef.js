import React from 'react'
import { Button } from '@material-ui/core'
import './UserOtpChef.css'
import { useHistory } from 'react-router-dom'


const UserOtpChef = () => {

    const history = useHistory()

    return (
        <div className='userOtpChef'>
            <div className='userOtpChef__container'>
                <h4>Veryify</h4>
                <h3>mary@yahoo.com</h3>
                <h4>Enter 4 digit OTP</h4>
                <div className='userOtpChef__input'>
                    <input className='input1' type='number' />
                    <input className='input2' type='number' />
                    <input className='input3' type='number' />
                    <input className='input4' type='number' />
                    <input className='input5' type='number' />
                    <input className='input6' type='number' />
                    <Button onClick={() => {
                        history.push('/chef/main/profile')
                    }}>OK</Button>
                </div>
                <Button>Resend email</Button>
            </div>
        </div>
    )
}

export default UserOtpChef
