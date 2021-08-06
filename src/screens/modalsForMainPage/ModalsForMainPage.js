import React, { useState } from 'react'
import Modal from 'react-modal'
import './ModalsForMain.css'

const ModalsForMainPage = () => {

    const [modalIsOpen,setModalIsOpen] = useState(false)
    const [modalIsOpen1,setModalIsOpen1] = useState(false)
    const [modalIsOpen2,setModalIsOpen2] = useState(false)

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

    const openModal12 =() => {
        setModalIsOpen2(true)
    }

    const closeModal2 = () => {
        setModalIsOpen2(false)
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
            <Modal isOpen={modalIsOpen2}
            onRequestClose={closeModal2}
            
            className='searchnotfoundmodal1'
            contentLabel="Notification Modal">
                <div className='my-post-container'>
                    <div className='my-post-top'>
                        <h5>EMPTY CART</h5>
                        
                    </div>
                    <div className='my-post-center'>
                        <p>
                            Are you sure you want to
                            Delete all items in your
                            Cart?
                        </p>
                    </div>
                    <div className='my-post-bottom'>
                        <Button  className='my-post-no'>Cancel</Button>
                        <Button  className='my-cart-allow'>Delete</Button>
                    </div>
                </div>
                
            </Modal>
            <Modal isOpen={modalIsOpen2}
            onRequestClose={closeModal2}
            
            className='searchnotfoundmodal1'
            contentLabel="Notification Modal">
                <div className='my-post-container'>
                    <div className='my-post-top'>
                        <h5>EMPTY CART</h5>
                        
                    </div>
                    <div className='my-post-center'>
                        <p>
                            Are you sure you want to
                            Delete all items in your
                            Cart?
                        </p>
                    </div>
                    <div className='my-post-bottom'>
                        <Button  className='my-post-no'>Cancel</Button>
                        <Button  className='my-cart-allow'>Delete</Button>
                    </div>
                </div>
                </Modal>

                {/* when chef accetps users order */}

                <Modal isOpen={modalIsOpen2}
            onRequestClose={closeModal2}
            
            className='searchnotfoundmodal1'
            contentLabel="Notification Modal">
                <div className='my-post-container'>
                    <div className='my-post-top'>
                        <h5>ORDER APPROVED</h5>
                        
                    </div>
                    <div className='my-post-center'>
                        <p>
                            ORder was approved
                            and accepted by chef. Please
                            pay now to complete your order
                        </p>
                    </div>
                    <div className='my-post-bottom'>
                        <Button  className='my-post-no'>Cancel</Button>
                        <Button  className='my-post-allow'>Pay</Button>
                    </div>
                </div>
                
            </Modal>

             {/* when chef cancels an order this pop appears on userend */}

            <Modal isOpen={modalIsOpen2}
            onRequestClose={closeModal2}
            
            className='searchnotfoundmodal1'
            contentLabel="Notification Modal">
                <div className='my-post-container'>
                    <div className='my-post-top'>
                        <h5>ORDER CANCELLED</h5>
                        
                    </div>
                    <div className='my-post-center'>
                        <p>
                            Unfortunately the chef ran out
                            of some of the ingredients 
                            and could not accept your order.
                            Thank you for understanding
                        </p>
                    </div>
                    <div className='my-post-bottom'>
                        <Button  className='my-post-allow'>OK</Button>
                    </div>
                </div>
                
            </Modal>

            {/* when the service and food is not available on repeating the order */}

            <Modal isOpen={modalIsOpen2}
            onRequestClose={closeModal2}
            
            className='searchnotfoundmodal1'
            contentLabel="Notification Modal">
                <div className='my-post-container'>
                    <div className='my-post-top'>
                        <h5>NOT AVAILABLE</h5>
                        
                    </div>
                    <div className='my-post-center'>
                        <p>
                            "The Food or Service is no longer
                            available"
                        </p>
                    </div>
                    <div className='my-post-bottom'>
                        <Button  className='my-post-allow'>OK</Button>
                    </div>
                </div>
                
            </Modal>
            
            {/* when user tries to add item of another chef */}
            <Modal isOpen={modalIsOpen2}
            onRequestClose={closeModal2}
            
            className='searchnotfoundmodal1'
            contentLabel="Notification Modal">
                <div className='my-post-container'>
                    <div className='my-post-top'>
                        <h5>CART</h5>
                        
                    </div>
                    <div className='my-post-center'>
                        <p>
                            "The Food or Service is no longer
                            available"
                        </p>
                    </div>
                    <div className='my-post-bottom'>
                    <Button  className='my-post-no'>Yes</Button>
                        <Button  className='my-post-allow'>No</Button>
                    </div>
                </div>
                
            </Modal> 

            {/* when masterclass payment gets approved */}

            <Modal isOpen={modalIsOpen}
            onRequestClose={closeModal}
            
            className='masterpaymentsentmodal1'
            contentLabel="Notification Modal">

                <div className='masterpayment-container'>
                    <div className='masterpayment-top'>
                        <h5></h5>
                        <h4 onClick={closeModal}>x</h4>
                    </div>
                    <div className='masterpayment-center'>
                        <img src={TickIcon} />
                    </div>
                    <div className='masterpayment-bottom'>
                        <h5>Payment was successfully
                            You can find the link to the
                            Masterclass in "My Purchases".
                            Thank you
                        </h5>
                    </div>
                </div>

        </Modal>

        {/* when any other payment except masterclass gets approved */}

        <Modal isOpen={modalIsOpen}
            onRequestClose={closeModal}
            
            className='masterpaymentsentmodal1'
            contentLabel="Notification Modal">

                <div className='masterpayment-container'>
                    <div className='masterpayment-top'>
                        <h5></h5>
                        <h4 onClick={closeModal}>x</h4>
                    </div>
                    <div className='masterpayment-center'>
                        <img src={TickIcon} alt='star' />
                    </div>
                    <div className='masterpayment-bottom'>
                        <h5>Payment was successful
                            Thank you
                        </h5>
                    </div>
                </div>

        </Modal>

        {/* when any other payment except masterclass gets rejected */}

        <Modal isOpen={modalIsOpen}
            onRequestClose={closeModal}
            
            className='masterpaymentsentmodal1'
            contentLabel="Notification Modal">

                <div className='masterpayment-container'>
                    <div className='masterpayment-top'>
                        <h5></h5>
                        <h4 onClick={closeModal}>x</h4>
                    </div>
                    <div className='masterpayment-center'>
                        <img src={RejectIcon} alt='star' />
                    </div>
                    <div className='masterpayment-bottom'>
                        <h5>Unfortunately payment was not
                            processed
                            Please try again
                        </h5>
                    </div>
                </div>

        </Modal>

        </>
    )
}

export default ModalsForMainPage
