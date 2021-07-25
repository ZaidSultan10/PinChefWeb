import React, { useState } from 'react'
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
import DownIcon from '../../assets/svg/Down-button-green.svg'
import MainShopFood from '../mainShopFood/MainShopFood'
import { useHistory } from 'react-router-dom'



const MainChefProfile = ({chefProfileProp}) => {

    const [menuState,setMenuState] = useState(1)

    const history=useHistory()

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
                            {
                                chefProfileProp && (
                                    <img src={FollowIcon} alt='follow' />                       
                                )
                            }
                            
                            <h5>25 Followers</h5>
                        </div>
                        {
                            chefProfileProp &&(
                                <h5>Follow</h5>
                            )
                        }
                        
                    </div>  
                </div>
                <div onClick={() => {
                    history.push('/rate/area')
                }} className='mainChefProfile__rating'>
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
                    <Button onClick={() => {setMenuState(1)}}>Menu</Button>
                    <Button onClick={() => {setMenuState(2)}}>Posts</Button>
                    <Button onClick={() => {setMenuState(3)}}>Info</Button>
                </div>
                {
                    menuState==1 ? (
                        <>
                            <div className='mainChefProfile__allPhotos'>
                                <MainShopFood />
                            </div>
                        </>
                    ):menuState==2 ? (
                        <>
                            <div className='mainChefProfile__allPhotos1'>
                                {[...Array(9)].map(() =>(
                                    <img src={CoverPhoto} />
                                ))}
                            </div>
                        </>
                    ):(
                        <>
                           <div className='mainChefProfile__allInfo'>
                                <p><span>PERSONAL_SUMMARY:</span>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy</p>
                                <div className='mainChefProfile__dob'>
                                    <h5>D.O.B:</h5>
                                    <p>24-October-1998</p>
                                </div>
                                <div className='mainChefProfile__allGender'>
                                    <h5>Gender:</h5>
                                    <p>Male</p>
                                </div>
                            </div>
                         </>
                     )
                }
                        
                    
            </div>
        </div>
    )
}

export default MainChefProfile

{/* 
{
                                [...Array(9)].map(() => (
                                    <>
                                        <div className='mainChefProfile__allNotifications'>
                                            <div className='mainChefProfile__notifyAvatar'>
                                                <Avatar className='notify-avatar' />
                                            </div>
                                            <div className='mainChefProfile__notifyUser'>
                                                <h5>Matt Wilson</h5>
                                                <p>13 October,2020-1:24 PM</p>
                                            </div>
                                            <div className='mainChefProfile__notifyDetail'>
                                                <h5>New Food Order</h5>
                                                <img src={DownIcon} />
                                            </div>
                                        </div>
                                        <div className='notify-line'>
                                                <img src={HorizontalLine} />
                                        </div>
*/}