import React from 'react'
import './MainChefCreateService.css'
import AddImageIcon from '../../assets/svg/Add-image-video.svg'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';



const MainChefCreateService = () => {

    const history=useHistory()

    return (
        <div className='mainChefCreateService'>
            <div className='mainChefCreateService__container'>
                <div className='mainChefCreateService__heading'>
                    <h5>Create Service</h5>
                    <CloseIcon onClick={() => {
                        history.push('/chef/feed/service/my-posts')
                    }} className='post-close-icon' />
                </div>
                <div className='mainChefCreateService__addImage'>
                    <img src={AddImageIcon} />
                </div>
                <div className='mainChefCreateService__cuisine'>
                    <h5>Service Type</h5>
                    <select id='service__type__option'>
                        <option>Delivery</option>
                        <option>Take away</option>
                        <option>Shipping</option>
                    </select>
                </div>
                
                <div className='mainChefCreateService__ingredients'>
                    <h5>Description about Serivce</h5>
                    <textarea rows='7' placeholder='Write all the ingredients' />
                </div>
                <div className='mainChefCreateService__days'>
                    <h5>Service Days and Hours<span>*</span></h5>
                    <select id='service__type__option'>
                        <option>Monday</option>
                        <option>tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                    </select>
                </div>
                <div className='mainChefCreateService__name'>
                    <h5>Price</h5>
                    <input placeholder='Price..' />
                </div>
                <div className='mainChefCreateService__buttons'>
                    <Button onClick={() => {
                        history.push('/chef/feed/service/my-posts')
                    }} className='service-cancel-button'>Cancel</Button>
                    <Button className='service-post-button'>Post</Button>
                </div>
            </div>
        </div>
    )
}

export default MainChefCreateService
