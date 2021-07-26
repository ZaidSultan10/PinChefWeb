import { Avatar } from '@material-ui/core'
import { MoreHoriz } from '@material-ui/icons'
import React from 'react'
import PostImage2 from '../../assets/chef-images/chef-image2.jpg'
import CommentIcon from "../../assets/svg/Commentwithborder.svg";
import HeartIcon from '../../assets/svg/Heart_Outline.svg'
import HorizontalLine from '../../assets/svg/Horizontal-spliter-1.svg'
import AddToCartIcon from '../../assets/svg/Add-to-cart.svg'
import './MainShopFood.css'

const MainShopFood = ({cartProp,mileProp}) => {
    return (
        <div className='mainShopFood'>
            <div className='mainShopFood__header'>
                <Avatar className='mainShopFood__avatar' />
                <div className='mainShopFood__name'>
                    <div className='name__top'>
                        <h3>Matt Wilson</h3>
                        <MoreHoriz className='more__horiz' />
                    </div>
                    <div className='location__bottom'>
                        <div className='location'>
                            <h4>Miami,</h4>
                            <h4>FL</h4>
                        </div>
                        <div className='delivery'>
                            <p>Delivery + Takeout</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mainShopFood__post'>
                <img src={PostImage2} className='postimage2' alt='postImage' />
                {
                    cartProp && (
                        <img src={AddToCartIcon} className='addCart' />
                    )
                }
                
            </div>
            <div className='mainShopFood__Bottom'>
                <div className='recipe__name'>
                    <div className='recipe__data'>
                        <h4>Vegan Soft Tacos -</h4>
                        <h4 className='recipe__price'>$25</h4>
                    </div>
                    {
                        mileProp && (
                            <p>2 Miles Away</p>
                        )
                    }
                    
                </div>
                <div className='mainShopfood__actions'>
                    <div className='like__post'>
                        <img src={HeartIcon} className='likeIcon'/>
                        <p>236</p>
                    </div>
                    <div className='comment__post'>
                        <img src={CommentIcon} className='commentIcon' />
                        <p>110</p>
                    </div>
                </div>
            </div>
            <div className='mainShopFood__para'>
                <p>
                    It was a great night as we were catering for a wedding. Thank you to
                    all the staff that helped to make this event as wonderful as possible.
                    Special thanks to the host
                </p>
            </div>
            <div className='bottom__line'>
                <img src={HorizontalLine} />
            </div>
        </div>
    )
}

export default MainShopFood
