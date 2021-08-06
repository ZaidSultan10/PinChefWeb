import React, { useState } from 'react'
import './MainChefCreatePost.css'
import AddIcon from '../../assets/svg/Add-image-video.svg'
import AddLocationIcon from '../../assets/svg/Location-post.svg'
import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom'
import Modal from 'react-modal'



const MainChefCreatePost = () => {


    const history=useHistory()

    const [modalIsOpen1,setModalIsOpen1] = useState(false)

    const openModal1 =() => {
        setModalIsOpen1(true)
    }

    const closeModal1 = () => {
        setModalIsOpen1(false)
    }

    return (
        <>
        <Modal isOpen={modalIsOpen1}
            onRequestClose={closeModal1}
            
            className='mypostmodal1'
            contentLabel="Notification Modal">
                <div className='my-post-container'>
                    <div className='my-post-top'>
                        <h5>ARE YOU SURE?</h5>
                        
                    </div>
                    <div className='my-post-center'>
                        <p>
                            The data you entered
                            will not be saved, are you sure?
                        </p>
                    </div>
                    <div className='my-post-bottom'>
                        <Button onClick={closeModal1} className='my-post-recipe-stay'>Stay</Button>
                        <Button onClick={() => {
                        history.push('/chef/feed/my-posts')
                    }}  className='my-post-recipe-leave'>Leave</Button>
                    </div>
                </div>
            </Modal>
        <div className='mainChefCreatePost'>
            <div className='mainChefCreatePost__container'>
                <div className='mainChefCreatePost__heading'>
                    <h5>Create Post</h5>
                    <CloseIcon onClick={openModal1} className='post-close-icon' />
                </div>
                <div className='mainChefCreatePost__addImage'>
                    <img src={AddIcon} alt='star' />
                </div>
                <div className='mainChefCreatePost__addDesc'>
                    <textarea rows='10' placeholder='Enter you description' />
                </div>
                <div className='mainChefCreatePost__addLocation'>
                    <img src={AddLocationIcon} alt='star' />
                    <input />
                </div>
                <div className='mainChefCreatePost__buttons'>
                    <Button onClick={openModal1} className='mainChefCreatePost__cancel'>Cancel</Button>
                    <Button className='mainChefCreatePost__post'>Post</Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainChefCreatePost
