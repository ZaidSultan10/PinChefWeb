import React from 'react'
import GreenTic from '../../assets/svg/Green-tic.svg'
import HorizontalLine from '../../assets/svg/Horizontal-spliter-1.svg'
import CrownIcon from '../../assets/svg/Crown.svg'
import './MainChefSubscription.css'
import VerticalLine from '../../assets/svg/Vertical-spliter-A.svg'


const MainChefSubscription = () => {
    return (
        <div className='mainChefSubscription'>
            <div className='mainChefSubscription__top'>
                <h3>NO COMMISSIONS!!!</h3>
                <h5>No Hidden Fees!!!</h5>
            </div>
            <div className='mainChefSubscription__free'>
                <div className='mainChefSubscription__freeText'>
                    <h5>Free Forever</h5>
                </div>
                <div className='mainChefSubscription__freePrice'>
                    <h5>$0.00</h5>
                </div>
            </div>
            <div className='mainChefSubscription__freePerks'>
                <div className='mainChefSubscription__freePerk'>
                    <img src={GreenTic} />
                    <h5>Chef Posts</h5>
                </div>
                <div className='mainChefSubscription__freePerk'>
                    <img src={GreenTic} />
                    <h5>Create Recipes</h5>
                </div>
                <div className='mainChefSubscription__freePerk'>
                    <img src={GreenTic} />
                    <h5>Get Rated</h5>
                </div>
                <div className='mainChefSubscription__freePerk'>
                    <img src={GreenTic} />
                    <h5>Reply to customer review</h5>
                </div>
                <div className='mainChefSubscription__freePerk'>
                    <img src={GreenTic} />
                    <h5>Own an ID</h5>
                </div>
                <div className='mainChefSubscription__freePerk'>
                    <img src={GreenTic} />
                    <h5>Own a Chef Profile</h5>
                </div>
                <div className='mainChefSubscription__freePerk'>
                    <img src={GreenTic} />
                    <h5>Can recieve the highly rated chef badge</h5>
                </div>
                <div className='mainChefSubscription__freePerk'>
                    <img src={GreenTic} />
                    <h5>Can be followed by users</h5>
                </div>
                <div className='mainChefSubscription__freePerk'>
                    <img src={GreenTic} />
                    <h5>Upload Images/Videos</h5>
                </div>
            </div>
            <div className='mainChefSubscription__splitter'>
                <img src={HorizontalLine} />
            </div>
            <div className='mainChefSubscription__top'>
                <h3>NO COMMISSIONS!!!</h3>
                <h5>No Hidden Fees!!!</h5>
            </div>
            <div className className='mainChefSubscription__bottom'>
                <div className='mainChefSubscription__bottomLeft'>
                    <div className='mainChefSubscription__basic'>
                        <div className='mainChefSubscription__basicText'>
                            <h5>BASIC</h5>
                        </div>
                        <div className='mainChefSubscription__basicPrice'>
                            <h5>$9.99</h5>
                        </div>
                    </div>
                    <div className='mainChefSubscription__basicPerks'>
                        <div className='mainChefSubscription__basicPerk'>
                            <img src={GreenTic} />
                            <h5>Free Plan</h5>
                        </div>
                        <div className='mainChefSubscription__basicPerk'>
                            <img src={GreenTic} />
                            <h5>1 masterclass listings per month</h5>
                        </div>
                        <div className='mainChefSubscription__basicPerk'>
                            <img src={GreenTic} />
                            <h5>Food items for sale posts</h5>
                        </div>
                        <div className='mainChefSubscription__basicPerk'>
                            <img src={GreenTic} />
                            <h5>Chef Services for sale posts</h5>
                        </div>
                        <div className='mainChefSubscription__basicPerk'>
                            <img src={GreenTic} />
                            <h5>Chat</h5>
                        </div>
                        <div className='mainChefSubscription__basicPerk'>
                            <img src={GreenTic} />
                            <h5>Direct Payments</h5>
                        </div>
                    </div>
                    <div className='mainChefSubscription__basicButton'>
                        <div className='mainChefSubscription__basicMonthly'>
                            <h5>Monthly $9.99</h5>
                            <h4>SIGN UP</h4>
                        </div>
                        <div className='mainChefSubscription__basicYearly'>
                            <h5>Monthly $99.99</h5>
                            <h4>SIGN UP</h4>
                        </div>
                    </div>
                    <div className='mainChefSubscription__save'>
                        <h5>you save $20</h5>
                    </div>
                </div>
                <img src={VerticalLine} className='vertical-line' />
                <div className='mainChefSubscription__bottomRight'>
                    <div className='mainChefSubscription__vip'>
                        <div className='mainChefSubscription__vipText'>
                            <img src={CrownIcon} />
                            <h5>VIP</h5>
                        </div>
                        <div className='mainChefSubscription__vipPrice'>
                            <h5>$14.99</h5>
                        </div>
                    </div>
                    <div className='mainChefSubscription__vipPerks'>
                        <div className='mainChefSubscription__vipPerk'>
                            <img src={GreenTic} />
                            <h5>Free Plan</h5>
                        </div>
                        <div className='mainChefSubscription__vipPerk'>
                            <img src={GreenTic} />
                            <h5>Basic Plan</h5>
                        </div>
                        <div className='mainChefSubscription__vipPerk'>
                            <img src={GreenTic} />
                            <h5>Unlimited masterclass listings</h5>
                        </div>
                        <div className='mainChefSubscription__vipPerk'>
                            <img src={GreenTic} />
                            <h5>Be among the firsts on searches</h5>
                        </div>
                        <div className='mainChefSubscription__vipPerk'>
                            <img src={GreenTic} />
                            <h5>Voice/Video Calls</h5>
                        </div>
                        <div className='mainChefSubscription__vipPerk'>
                            <img src={GreenTic} />
                            <h5>Get the Vip (Crown) Badge</h5>
                        </div>
                        <div className='mainChefSubscription__vipPerk'>
                            <img src={GreenTic} />
                            <h5>Daily one time ad</h5>
                        </div>
                        <div className='mainChefSubscription__vipPerk'>
                            <img src={GreenTic} />
                            <h5>Add restaurant name</h5>
                        </div>
                    </div>
                    <div className='mainChefSubscription__vipButton'>
                        <div className='mainChefSubscription__vipMonthly'>
                            <h5>Monthly $14.99</h5>
                            <h4>SIGN UP</h4>
                        </div>
                        <div className='mainChefSubscription__vipYearly'>
                            <h5>Monthly $149.99</h5>
                            <h4>SIGN UP</h4>
                        </div>
                    </div>
                    <div className='mainChefSubscription__save'>
                        <h5>you save $30</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainChefSubscription
