import React from 'react'
import './MainCommentArea.css'
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import HorizontalLine from '../../assets/svg/Horizontal-spliter-1.svg'
import CommentIcon from "../../assets/svg/Commentwithborder.svg";
import HeartIcon from '../../assets/svg/Heart_Outline.svg'
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ShareItIcon from "../../assets/svg/Share-yellow.svg";
import { Avatar } from '@material-ui/core';
import Image1 from '../../assets/chef-images/chef-image1.jpg'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ReplyIcon from '../../assets/svg/reply.svg'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'

const MainCommentArea = () => {

    return (
        <div className='mainCommentArea'>
            <div className='mainCommentArea__topArea'>
                <img onClick={() => {
                    
                }} src={LeftIcon} alt='star' />
                <h4>COMMENTS</h4>
            </div>
            <div className='mainCommentArea__header'>
                <Avatar className='mainCommentArea__avatar' />
                <div className='mainCommentArea__username'>
                    <div className='mainCommentArea__user'>
                        <h3>Matt Wilson</h3>
                        <h4>Miami,FL</h4>
                    </div>
                    <div className='mainCommentArea__time'>
                        <MoreHorizOutlinedIcon className='mainCommentArea__horiz' />
                        <div className='mainCommentArea__timer'>
                            <QueryBuilderIcon className='query-builder' />
                            <p>45 min ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mainCommentArea__image'>
                <img src={Image1} alt='star' />
            </div>
            <div className='mainCommentArea__actions'>
                <div className='mainCommentArea__actionLeft'>
                    <div className='mainCommentArea__like'>
                        <img src={HeartIcon} alt='star' />
                        <p>236</p>
                    </div>
                    <div className='mainCommentArea__comment'>
                        <img src={CommentIcon} alt='star' />
                        <p>120</p>
                    </div>
                </div>
                <div className='mainCommentArea__actionRight'>
                    <div className='mainCommentArea__share'>
                        <img src={ShareItIcon} alt='star' />
                    </div>
                </div>
            </div>
            <div className='mainCommentArea__border'>
                <img src={HorizontalLine} alt='star' />
            </div>
            <div className='mainCommentArea__commentsArea'>
                <div className='mainCommentArea__commentName'>
                    <h5>Jennah</h5>
                    <Avatar className='mainCommentArea__avatar' />
                </div>
                <div className='mainCommentArea__text'>
                    <p>
                    i wanted to share how i like eating my burgers
                    i wanted to share how i like eating my burgers
                    i wanted to share how i like eating my burgers
                    </p>
                </div>
                <div className='mainCommentArea__status'>
                    <div className='mainCommentArea__reply'>
                        <p>19 hrs ago</p>
                        <img src={ReplyIcon} alt='star' />
                    </div>
                    <div className='mainCommentArea__commentLikes'>
                        <p>19 likes</p>
                        <div className='heart-container'>
                            <img src={HeartIcon} alt='star' />
                        </div>
                        
                    </div>

                </div>

            </div>
            <div className='mainCommentArea__border'>
                <img src={HorizontalLine} alt='star' />
            </div>
            <div className='mainCommentArea__input'>
                <input placeholder='Enter a comment' />
                <ArrowRightAltIcon className='comment-push' />
            </div>
        </div>
    )
}

export default MainCommentArea
