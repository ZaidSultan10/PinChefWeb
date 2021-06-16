import { Avatar } from '@material-ui/core'
import React from 'react'
import './MainFeed.css'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/Share';
import PostImage from '../../assets/chef-images/chef-image1.jpg'
import CommentIcon from '../../assets/svg/comment.png'
import { LocationOnOutlined } from '@material-ui/icons';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import MainFeedFilters from '../mainFeedFilters/MainFeedFilters';


const MainFeed = () => {
    return (
        <div className='mainFeed'>
            <MainFeedFilters />
            <div className='mainFeed__header'>
                <div className='mainFeed__userData'>
                    <Avatar />
                    <div className='mainFeed__userName'>
                        <h3>Matt Wilson</h3>
                        <p>Executive Chef</p>
                    </div>
                </div>
                <MoreHorizOutlinedIcon />
            </div>
            <img className='post__image' src={PostImage} alt='post' />
            <div className='mainFeed__actions'>
                <div className='mainFeed__actions__left'>
                    <div className='like'>
                        <FavoriteBorderOutlinedIcon className='heart__icon' />
                        <p>135</p>
                    </div>
                    <div className='comment'>
                        <img src={CommentIcon} alt='comment' />    
                        <p>120</p>
                    </div>
                    <div className='share'>
                        <ShareIcon className='share__icon' />
                        <p>50</p>
                    </div>
                    <div className='mainFeed__location'>
                        <LocationOnOutlined />
                        <p className='location__city'>
                            Miami,
                        </p>
                        <p className='location__country'>
                            FL
                        </p>
                    </div>
                </div>
                <div className='mainFeed__actions__right'>
                    <div className='mainFeed__time'>
                        <QueryBuilderIcon />
                        <p>45 min ago</p>
                    </div>
                </div>
            </div>
            <div className='mainFeed__paragraph'>
                <p>It was a great night as we were 
                    catering for a wedding. Thank you
                    to all the staff that helped to make
                    this event as wonderful as possible.
                    Special thanks to the host
                </p>
            </div>
            <hr></hr>
        </div>
    )
}

export default MainFeed
