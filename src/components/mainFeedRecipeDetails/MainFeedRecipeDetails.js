import React from 'react'
import RoomServiceOutlinedIcon from '@material-ui/icons/RoomServiceOutlined';
import PostImage from "../../assets/chef-images/chef-image1.jpg";
import CommentIcon from "../../assets/svg/Commentwithborder.svg";
import HeartIcon from '../../assets/svg/Heart_Outline.svg'
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import './MainFeedRecipeDetails.css'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import MoreHorizOutlined from '@material-ui/icons/MoreHorizOutlined';
import { Avatar } from '@material-ui/core';



const MainFeedRecipeDetails = () => {
    return (
        <div className='mainFeedRecipeDetails'>
            <div className='mainFeedRecipeDetails__header'>
                <img src={LeftIcon} />
                <h5>BEEF TACO</h5>
            </div>
            <div className='mainFeedRecipeDetails__Profile'>
                <Avatar className='mainFeedRecipeDetails__avatar' />
                <div className='mainFeedRecipeDetails__username'>
                    <h5>Jenah Stephen</h5>
                    <MoreHorizOutlined />
                </div>
            </div>
            <div className='mainFeedRecipeDetails__photo'>
                <img src={PostImage} />
            </div>
            <div className='mainFeedRecipeDetails__actions'>
                <div className='mainFeedRecipeDetails__dishName'>
                    <h5>BEEF TACO <span>(Mexican)</span></h5>
                </div>
                <div className='mainFeedRecipeDetails__icons'>
                    <div className='mainFeedRecipeDetails__heart'>
                        <img src={HeartIcon} />
                        <p>235</p>
                    </div>
                    <div className='mainFeedRecipeDetails__comment'>
                        <img src={CommentIcon} />
                        <p>110</p>
                    </div>
                </div>
            </div>
            <div className='mainFeedRecipeDetails__time'>
                <div className='mainFeedRecipeDetails__time1'>
                    <QueryBuilderIcon className='recipe-timer' />
                    <p>Total: 1 hour </p>
                </div>
                <div className='mainFeedRecipeDetails__time2'>
                    <QueryBuilderIcon className='recipe-timer' />
                    <p>Prep: 20 mins Cook 40 mins </p>
                </div>
                <div className='mainFeedRecipeDetails__time3'>
                    <RoomServiceOutlinedIcon className='recipe-timer' />
                    <p>Serving # 2 </p>
                </div>
            </div>
            <div className='mainFeedRecipeDetails__ingredients'>
                <h5>Ingredients</h5>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
            <div className='mainFeedRecipeDetails__instruction'>
                <h5>Instructions</h5>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>
            <div className='mainFeedRecipeDetails__tools'>
                <h5>Required Tools</h5>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            </div>           
        </div>
    )
}

export default MainFeedRecipeDetails
