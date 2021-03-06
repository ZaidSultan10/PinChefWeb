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
import MainShopFood from '../mainShopFood/MainShopFood'
import { useHistory } from 'react-router-dom'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import AllChefsIcon from '../../assets/svg/All-Chefs.svg'
import CallIcon from '../../assets/svg/Call-chef-vip-only.svg'
import ShareIcon from '../../assets/svg/Share-chef-profile-icon.svg'
import ChatIcon from '../../assets/svg/Chat.svg'
import Modal from 'react-modal'
import FaceBookIcon from '../../assets/svg-for-user-profile/001-facebook.svg'
import WhatsappIcon from '../../assets/svg-for-user-profile/003-whatsapp.svg'
import SkypeIcon from '../../assets/svg-for-user-profile/006-skype.svg'
import MessengerIcon from '../../assets/svg-for-user-profile/Facebook-Messenger-cut-in-circle-shadow.svg'
import LinkedinIcon from '../../assets/svg-for-user-profile/010-linkedin.svg'
import InstagramIcon from '../../assets/svg-for-user-profile/011-instagram.svg'
import TwitterIcon from '../../assets/svg-for-user-profile/013-twitter.svg'
import EmailIcon from '../../assets/svg-for-user-profile/Emal.svg'
import LinkIcon from '../../assets/svg-for-user-profile/copy-link.svg'



const MainChefProfile = ({chefProfileProp}) => {

    const [menuState,setMenuState] = useState(1)
    const [isModalOpen,setisModalOpen] = useState(false)

    const openModal = () => {
        setisModalOpen(true)
    }

    const closeModal = () => {
        setisModalOpen(false)
    }

    const history=useHistory()

    const allChefChefsSideRoute = () =>{
        history.push('/chef/all-chef')
    }

    const shareIcons = [{
        icon:FaceBookIcon
      },{
        icon:WhatsappIcon
      },{
        icon:SkypeIcon
      },{
        icon:MessengerIcon
      },{
        icon:LinkedinIcon
      },{
        icon:InstagramIcon
      },{
        icon:TwitterIcon
      },{
        icon:EmailIcon
      }]

    return (
        <>
        <Modal isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="sharefriendsModal1"
        contentLabel="Notification Modal">
          <div className='share-modal-options'>
              <div className='share-modal-options-header'>
                  <h6>TELL ABOUT US</h6>
              </div>
              <div className='share-modal-options_icons'>
                  {shareIcons.map((shareIcon) => (
                      
                          <img src={shareIcon.icon} alt='icons' />
                      
                  ))}
              </div>
              <div className='share-modal-options-email'>
                  <div className='email-left-icon'>
                      <img src={LinkIcon} alt='icon' />
                  </div>
                  <div className='email-right-input'>
                      <p>Enter email :</p>
                      <input />
                  </div>    
              </div>
              <div className='share-modal-options-buttons'>
                  <Button onClick={closeModal} className='share-cancel'>Cancel</Button>
                  <Button className='share-share'>Share</Button>
              </div>
          </div>
      </Modal>
        <div className='mainChefProfile'>
            <div className='mainChefProfile__container'>
                <div className='mainChefProfile__topArea'>
                    <div className='mainChefProfile__topLeftArea'>
                        {
                            chefProfileProp && (
                                <img src={LeftIcon} alt='star' />
                            )
                        }
                        <h5>Profile</h5>
                    </div>
                    {
                        chefProfileProp ?(
                                <div></div>
                        ):(
                            <div onClick={allChefChefsSideRoute} className='mainChefProfile__topCenterArea'>
                                <img src={AllChefsIcon} alt='star' />
                                <h5>All Chefs</h5>
                            </div>
                        )
                    }
                    
                    <div className='mainChefProfile__topRightArea'>
                        
                        {
                            chefProfileProp ? (
                                <>
                                    <img onClick={() => {
                                        history.push('/chef/call')
                                    }} src={CallIcon} alt='star' />
                                    <img onClick={() => {
                                        history.push('/chat/newchat')
                                    }} src={ChatIcon} alt='star' />
                                    <img onClick={openModal} src={ShareIcon} alt='star' />
                                </>
                            ):(
                                <>
                                    <img onClick={() => {
                                        history.push('/call/history')
                                    }} src={CallIcon} alt='star' />
                                    <img onClick={() => {
                                        history.push('/chef/chats')
                                    }} src={ChatIcon} alt='star' />
                                    <img onClick={openModal} src={ShareIcon} alt='star' />
                                </>
                            )
                        }
                        
                    </div>
                </div>
                <div className='mainChefProfile__cover'>
                   <img src={CoverPhoto} className='coverPhoto' alt='cover' />
                </div>
                <div className='mainChefProfile__chefHeader'>
                    <div className='mainChefProfile__profile'>
                        <Avatar className='mainChefProfile__avatar' />
                        <div className='mainChefProfile__location'>
                            <img src={LocationIcon} alt='star' />
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
                                chefProfileProp ? (
                                    <>
                                    <img src={FollowIcon} alt='follow' />
                                    <h5 >25 Followers</h5>                       
                                    </>               
                                ):(
                                    <h5 className='k'>25 Followers</h5>
                                )
                            }
                            
                            
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
                        <img src={FullStarIcon} alt='star' />
                        <img src={FullStarIcon} alt='star' />
                        <img src={FullStarIcon} alt='star' />
                        <img src={HalfStarIcon} alt='star' />
                        <img src={EmptyStarIcon} alt='star' />
                    </div>
                    <img src={HorizontalLine} alt='star' />
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
                    menuState===1 ? (
                        <>
                            <div className='mainChefProfile__allPhotos'>
                                <MainShopFood />
                            </div>
                        </>
                    ):menuState===2 ? (
                        <>
                            <div className='mainChefProfile__allPhotos1'>
                                {[...Array(9)].map(() =>(
                                    <img src={CoverPhoto} alt='star' />
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
        </>
    )
}

export default MainChefProfile

