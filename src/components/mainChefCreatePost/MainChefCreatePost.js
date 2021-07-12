import React from 'react'
import './MainChefCreatePost.css'
import AddIcon from '../../assets/svg/Add-image-video.svg'
import AddLocationIcon from '../../assets/svg/Location-post.svg'
import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';



const MainChefCreatePost = () => {
    return (
        <div className='mainChefCreatePost'>
            <div className='mainChefCreatePost__container'>
                <div className='mainChefCreatePost__heading'>
                    <h5>Create Post</h5>
                    <CloseIcon className='post-close-icon' />
                </div>
                <div className='mainChefCreatePost__addImage'>
                    <img src={AddIcon} />
                </div>
                <div className='mainChefCreatePost__addDesc'>
                    <textarea rows='10' placeholder='Enter you description' />
                </div>
                <div className='mainChefCreatePost__addLocation'>
                    <img src={AddLocationIcon} />
                    <input />
                </div>
                <div className='mainChefCreatePost__buttons'>
                    <Button className='mainChefCreatePost__cancel'>Cancel</Button>
                    <Button className='mainChefCreatePost__post'>Post</Button>
                </div>
            </div>
        </div>
    )
}

export default MainChefCreatePost
