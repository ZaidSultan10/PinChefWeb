import React, { useState } from 'react'
import Modal from 'react-modal'
import './ModalsForMain.css'

const ModalsForMainPage = () => {

    const [modalIsOpen,setModalIsOpen] = useState(false)
    const [modalIsOpen1,setModalIsOpen1] = useState(false)


    const openModal =() => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }
    const openModal1 =() => {
        setModalIsOpen(true)
    }

    const closeModal1 = () => {
        setModalIsOpen(false)
    }

    return (

        <>
           <Modal isOpen={modalIsOpen}
            onRequestClose={closeModal}
            
            className='mypostmodal1'
            contentLabel="Notification Modal">
                <div className='my-post-container'>
                    <div className='my-post-top'>
                        <h5>ARE YOU SURE?</h5>
                        
                    </div>
                    <div className='my-post-center'>
                        <p>
                            You are about to delete your
                            post,this cannot be undone.
                        </p>
                    </div>
                    <div className='my-post-bottom'>
                        <Button  className='my-post-no'>Cancel</Button>
                        <Button  className='my-post-allow'>Delete</Button>
                    </div>
                </div>
            </Modal>
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
                        <Button  className='my-post-no'>Stay</Button>
                        <Button  className='my-post-allow'>Leave</Button>
                    </div>
                </div>
            </Modal> 
        </>
    )
}

export default ModalsForMainPage
