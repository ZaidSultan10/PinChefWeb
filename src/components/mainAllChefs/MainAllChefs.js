import { Avatar } from '@material-ui/core'
import React from 'react'
import EmptyStar from '../../assets/svg/Empty-Star.svg'
import FullStar from '../../assets/svg/Full-star.svg'
import HalfEmptyStar from '../../assets/svg/Half-empty-star.svg'
import Followers from '../../assets/svg/Followers.svg'
import { ChevronRight } from '@material-ui/icons'
import LocationIcon from '../../assets/svg/Location.svg'
import HorizontalLine from '../../assets/svg/Horizontal-spliter-1.svg'
import Following from '../../assets/svg/following.svg'
import './MainAllChefs.css'
import { useHistory } from 'react-router-dom'

const MainAllChefs = ({followProp}) => {

    const history = useHistory()

    return (
        <div className='mainAllChef'>
            <div className='mainAllChef__container'>
                <div className='mainAllChef__left'>
                    <Avatar onClick={() => {
                            history.push('/user/chef/profile')
                        }} className='avatar' />
                    <div onClick={() => {
                        history.push('/rate/area')
                    }} className='rating'>
                        <img src={FullStar} className='star' />
                        <img src={FullStar} className='star' />
                        <img src={FullStar} className='star' />
                        <img src={HalfEmptyStar} className='star' />
                        <img src={EmptyStar} className='star' />
                    </div>
                    <h4>56/3.5</h4>
                </div>
                <div className='mainAllChef__right'>
                    <div className='mainAllchef__name'>
                        <h3>MAtt Wilson</h3>
                        <div className='mainAllchef__follow'>
                            <div className='mainAllchef__follower'>
                                {followProp ? (
                                    <>
                                        <img src={Followers} className='follow-icon' alt='followers' />
                                    </>
                                ):(
                                    <>
                                        <img src={Following} className='follow-icon' alt='followers' />
                                    </>
                                )}
                                
                                <h4>25 Followers</h4>
                            </div>
                            {followProp ? (
                                <>
                                    <h4 className='follow'>Follow</h4>
                                </>
                            ) : (
                                <>
                                    <h4 className='follow'>Unfollow</h4>
                                </>
                            )}
                        </div>
                    </div>
                    <div className='executiveChef'>
                        <p>Executive Chef</p>
                    </div>
                    <div className='cuisines'>
                        <p>French, Italian, Spanish, Caucasian</p>
                    </div>
                    <div className='paragraph'>
                        <p>Come Tto address, Cook live, and ...</p>
                        <ChevronRight onClick={() => {
                            history.push('/user/chef/profile')
                        }} className='right__icon' />
                    </div>
                    <div className='location'>
                        <img src={LocationIcon} className='location-icon' alt='location' />
                        <div className='area'>
                            <h4>Miami,</h4>
                            <h4 className='country'>FL</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom__line1'>
                <img src={HorizontalLine} alt='line' />
            </div>
        </div>
    )
}

export default MainAllChefs
