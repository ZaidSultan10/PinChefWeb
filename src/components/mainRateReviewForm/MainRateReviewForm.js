import React from 'react'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import StarHalfOutlinedIcon from '@material-ui/icons/StarHalfOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import './MainRateReviewForm.css'
import WriteIcon from '../../assets/svg/Path-28624.svg'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const MainRateReviewForm = () => {

    const history = useHistory()

    return (
        <div className='mainRateReviewForm'>
            <div className='mainRateReviewForm__container'>
                <div className='mainRateReviewform__header'>
                    <h5>Please rate the chef to help others. :)</h5>
                </div>
                <div className='mainRateReviewForm__rate'>
                    <div className='mainRateReviewForm__service'>
                        <h5>Service</h5>
                        <div className='mainRateReviewForm__stars'>
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarHalfOutlinedIcon />
                            <StarBorderOutlinedIcon />
                        </div>
                    </div>
                    <div className='mainRateReviewForm__food'>
                        <h5>Food</h5>
                        <div className='mainRateReviewForm__stars'>
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarHalfOutlinedIcon />
                            <StarBorderOutlinedIcon />
                        </div>
                    </div>
                    <div className='mainRateReviewForm__personality'>
                        <h5>Personality</h5>
                        <div className='mainRateReviewForm__stars'>
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarHalfOutlinedIcon />
                            <StarBorderOutlinedIcon />
                        </div>
                    </div>
                    <div className='mainRateReviewForm__presentation'>
                        <h5>Presentation</h5>
                        <div className='mainRateReviewForm__stars'>
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarOutlinedIcon />
                            <StarHalfOutlinedIcon />
                            <StarBorderOutlinedIcon />
                        </div>
                    </div>
                    <div className='mainRateReviewForm__service'>
                        <h5>Average Rating</h5>
                        <h5>3.5</h5>
                    </div>
                </div>
                <div className='mainRateReviewForm__icon'>
                    <img src={WriteIcon } alt='star' />
                </div>
                <div className='mainRateReviewForm__input'>
                    <textarea rows='6' placeholder='Please leave an honest review to help others decide :)'/>

                </div>
                <div className='mainRateReviewForm__button'>
                    <Button onClick={() => {
                        history.push('/rate/area')
                    }}>Done</Button>
                </div>
            </div>
        </div>
    )
}

export default MainRateReviewForm
