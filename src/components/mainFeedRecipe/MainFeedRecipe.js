import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MainFeedRecipe.css";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import PostImage from "../../assets/chef-images/chef-image1.jpg";
import CommentIcon from "../../assets/svg/Commentwithborder.svg";
import HeartIcon from '../../assets/svg/Heart_Outline.svg'
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import { ChevronRight } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import TextTruncate from "react-text-truncate";

const MainFeedRecipe = () => {

    const history=useHistory()

    const detailRecipeButton = () => {
        history.push('/user/recipe/details')
    }

    return (
    <div className="mainFeedRecipe">
      <div className='mainFeedRecipe__container'>
        <div className="mainFeedRecipe__header">
            <div className='avatarRecipe__container'>
                <Avatar onClick={()=>{
                    history.push('/user/chef/profile')
                }} className="avatar" />
            </div>
            <div className="mainFeedRecipe__userName">
            <h3 onClick={()=>{
                    history.push('/user/chef/profile')
                }}>Matt Wilson</h3>
            <MoreHorizOutlinedIcon className="moreHoriz" />
            </div>
        </div>
        {/*<div className="mainFeed__location">
            <div className="mainFeed__container__location">
            <img src={LocationIcon} className="icon" alt="Location" />
            <p className="location__city">Miami,</p>
            <p className="location__country">FL</p>
            </div>
            <div className="mainFeed__time">
            <QueryBuilderIcon className="time" />
            <p>45 min ago</p>
            </div>
            </div>*/}
        <div className='post__imageRecipe__container'>
            <img className="post__image" src={PostImage} alt="post" />
        </div>
        <div className="mainFeedRecipe__actions">
            <div className="mainFeedRecipe__actions__right">
                <div className='dish__name'>
                    <h4>Beef Taco</h4>
                    <p>(Mexican)</p>
                </div>
                <div className="mainFeedRecipe__time">
                    <QueryBuilderIcon className="time" />
                    <p>Total: 1 hour</p>
                </div>
            </div>
            <div className="mainFeedRecipe__actions__left">
                <div className="like">
                    <img src={HeartIcon} className="heart__icon" alt='star' />
                    <p>135</p>
                </div>
                <div className="comment">
                    <img onClick={() => {
                        history.push('/user/comments')
                    }} src={CommentIcon} alt="comment" />
                    <p>120</p>
                </div>
            </div>
        </div>
        <div className="mainFeedRecipe__paragraphs">
            <h4>Ingredients :</h4>
            <div className='mainFeedRecipe__paragraph'>
                
                <TextTruncate
                        line={1}
                        element='p'
                        truncateText='...'
                        text='Ground Beef 1Kg, Tortillas 1 Pack, Celery, 1 Onion,
                        Taco Seasoning'      
                />
                <ChevronRight onClick={detailRecipeButton} className='rightIcon' />
            </div>
        </div>
      </div>
      
    </div>
    )
}

export default MainFeedRecipe
