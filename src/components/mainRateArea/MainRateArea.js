import React from 'react'
import './MainRateArea.css'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import StarHalfOutlinedIcon from '@material-ui/icons/StarHalfOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import { Avatar } from '@material-ui/core';
import HeartIcon from '../../assets/svg/Heart_Outline.svg'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ReplyIcon from '../../assets/svg/reply.svg'
import HorizontalLine from '../../assets/svg/Horizontal-spliter-1.svg'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import MainFeedFilter7 from '../mainFeedFilter7/MainFeedFilter7';
import { useHistory } from 'react-router-dom';

const MainRateArea = ({rateReplyProp}) => {

    const history=useHistory()

    return (
        <div className='mainRateArea'>
            
                {
                    rateReplyProp ? (
                        <div className='chefRateAreaMain'>
                            <MainFeedFilter7 />
                        </div>
                    ):(
                        <div className='mainRateArea__header'>
                            <img src={LeftIcon} />
                            <h5>Ratings & Reviews</h5>
                        </div>
                    )
                }
                
            
            {
                rateReplyProp ? (
                    <div className='mainRateArea__highlight1'>
                        <h5>Ratings and Reviews left for you.</h5>
                    </div>
                ):(
                    <div onClick={() => {
                        history.push('/rate/review/form')
                    }} className='mainRateArea__highlight'>
                        <h5>Write a Review</h5>
                    </div>
               )
            }
            <div className='mainRateArea__rate'>
                <div className='mainRateArea__service'>
                    <h5>Service</h5>
                    <div className='mainRateArea__stars'>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__score'>
                            <h5>4.5</h5>
                        </div>
                    </div>
                </div>
                <div className='mainRateArea__food'>
                    <h5>Food</h5>
                    <div className='mainRateArea__stars'>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__score'>
                            <h5>4.5</h5>
                        </div>
                    </div>
                </div>
                <div className='mainRateArea__personality'>
                    <h5>Personality</h5>
                    <div className='mainRateArea__stars'>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__score'>
                            <h5>4.5</h5>
                        </div>
                    </div>
                </div>
                <div className='mainRateArea__presentation'>
                    <h5>Presentation</h5>
                    <div className='mainRateArea__stars'>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__star'>
                            <StarOutlinedIcon className='mainRateArea__star1' />
                        </div>
                        <div className='mainRateArea__score'>
                            <h5>4.5</h5>
                        </div>
                    </div>
                </div>
                <div className='mainRateArea__service'>
                    <h5>Average Rating</h5>
                    <h5 className='rate-total-num'>3.5</h5>
                </div>
            </div>
            <div className='mainRateArea__commentsArea'>
                <div className='mainRateArea__commentName'>
                    <h5>Jennah</h5>
                    <Avatar className='mainRateArea__avatar' />
                </div>
                <div className='mainRateArea__text'>
                    <p>
                    i wanted to share how i like eating my burgers
                    i wanted to share how i like eating my burgers
                    i wanted to share how i like eating my burgers
                    </p>
                </div>
                <div className='mainRateArea__commentLikes'>
                    <p >19 hrs ago</p>
                    {
                        rateReplyProp && (
                            <div className='reply-icon'>
                                <img src={ReplyIcon} />
                            </div>
                        )
                    }
                    <div className='heart-container'>
                        <img src={HeartIcon} />
                   </div>
                   <p>19 Likes</p>
                </div>
            </div>
            {
                rateReplyProp ? (
                    <div></div>
                ):(
                    <div className='mainRateArea__input'>
                        <input placeholder='Enter a comment' />
                        <ArrowRightAltIcon className='comment-push' />
                    </div>
                )
            }
            
        </div>
    )
}

export default MainRateArea
