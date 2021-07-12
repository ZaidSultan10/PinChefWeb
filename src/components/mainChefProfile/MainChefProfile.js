import React from 'react'
import './MainChefProfile.css'
import CoverPhoto from '../../assets/chef-images/chef-image2.jpg'
import { Avatar } from '@material-ui/core'
import LocationIcon from '../../assets/svg/Location.svg'
import FollowIcon from '../../assets/svg/Followers.svg'
import FullStarIcon from '../../assets/svg/Full-star.svg'
import HalfStarIcon from '../../assets/svg/Half-empty-star.svg'
import EmptyStarIcon from '../../assets/svg/Empty-Star.svg'
import HorizontalLine from '../../assets/svg/Horizontal-spliter-1.svg'
import { Button } from '@material-ui/core'


const MainChefProfile = () => {
    return (
        <div className='mainChefProfile'>
            <div className='mainChefProfile__container'>
                <div className='mainChefProfile__cover'>
                   <img src={CoverPhoto} className='coverPhoto' alt='cover' />
                </div>
                <div className='mainChefProfile__chefHeader'>
                    <div className='mainChefProfile__profile'>
                        <Avatar className='mainChefProfile__avatar' />
                        <div className='mainChefProfile__location'>
                            <img src={LocationIcon} />
                            <h5>Miami,</h5>
                            <h5>FL</h5>
                        </div>
                    </div>
                    <div className='mainChefProfile__name'>
                        <h4>Matt Wilson</h4>
                        <p>Executive Chef</p>
                        <p>French, Italian, Spanish, Caucasian</p>
                        <p>Come to address, Cook live, cook and...</p>
                    </div>
                    <div className='mainChefProfile__followStatus'>
                        <div className='mainChefProfile__followers'>
                            <img src={FollowIcon} alt='follow' />
                            <h5>25 Followers</h5>
                        </div>
                        <h5>Follow</h5>
                    </div>  
                </div>
                <div className='mainChefProfile__rating'>
                    <h5>56/4.5</h5>
                    <div className='mainChefProfile__stars'>
                        <img src={FullStarIcon} />
                        <img src={FullStarIcon} />
                        <img src={FullStarIcon} />
                        <img src={HalfStarIcon} />
                        <img src={EmptyStarIcon} />
                    </div>
                    <img src={HorizontalLine} />
                </div>
                <p>
                    Do you want to eat better?  Do want time back in your day?  
                    Chef Matt can prepare your meals in your very own home.  
                    Maybe you are too busy to cook, tired of take out food, have 
                    dietary restrictions, or you are recuperating.  Let Chef Matt 
                    give you time back in your busy life. 
                </p>
                <div className='mainChefProfile__picButtons'>
                    <Button>Photos</Button>
                    <Button>Posts</Button>
                    <Button>Info</Button>
                </div>
                <div className='mainChefProfile__allPhotos'>
                    {[...Array(9)].map(()=>(
                         <img src={CoverPhoto} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MainChefProfile
