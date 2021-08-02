import React, { useState } from 'react'
import './MainCart.css'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import DeleteIcon from '../../assets/svg-for-user-profile/Delete.svg'
import { ChevronRight } from '@material-ui/icons'
import FoodImage from '../../assets/chef-images/chef-image1.jpg'
import CartIcon from '../../assets/svg/Cart.svg'
import Modal from 'react-modal'
import VisaIcon from '../../assets/svg/Visa-icon.svg'
import UnionPayIcon from '../../assets/svg/unionpay.svg'
import MasterCardIcon from '../../assets/svg/Mastercard-icon.svg'
import JcbIcon from '../../assets/svg/jcb-icon.svg'
import AmericanExpressIcon from '../../assets/svg/american-express-icon.svg'
import DiscoverIcon from '../../assets/svg/discover-icon.svg'
import { Button } from '@material-ui/core'
import InfoIcon from '../../assets/svg/info-icon-red.svg'
import PaypalIcon from '../../assets/svg/paypal.svg'
import ApplePayICon from '../../assets/svg/apple-pay.svg'
import './MainCardModal.css'


const MainCart = () => {

    const [isModalOpen,setIsModalOpen] = useState(false)
    const [isModalOpen1,setIsModalOpen1] = useState(false)


    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const openModal1 = () => {
        setIsModalOpen1(true)
    }

    const closeModal1 = () => {
        setIsModalOpen1(false)
    }

    return (
        <>
        <Modal isOpen={isModalOpen}
            onRequestClose={closeModal}
            
            className='deletecartmodal1'
            contentLabel="Notification Modal">
                <div className='my-cart-container'>
                    <div className='my-cart-top'>
                        <h5>EMPTY CART</h5>
                        
                    </div>
                    <div className='my-cart-center'>
                        <p>
                            Are you sure you want to
                            Delete all items in your
                            Cart?
                        </p>
                    </div>
                    <div className='my-cart-bottom'>
                        <Button onClick={closeModal} className='my-post-no'>Cancel</Button>
                        <Button  className='my-cart-allow'>Delete</Button>
                    </div>
                </div>
            </Modal> 
            <Modal isOpen={isModalOpen1}
            onRequestClose={closeModal1}
            
            className='payforcartmodal1'
            contentLabel="Notification Modal">
                <div className='mainChefPayments1 '>
                    <div className='mainChefPayments1__state'>
                        <h5>Online Payment total: $9.99</h5>
                    </div>
                    <div className='mainChefPayments1__paymentMethods'>
                        <img src={VisaIcon} />
                        <img src={MasterCardIcon} />
                        <img src={AmericanExpressIcon} />
                        <img src={DiscoverIcon} />
                        <img src={JcbIcon} />
                        <img src={UnionPayIcon} />
                    </div>
                    <div className='mainChefPayments1__cardInfoHeading'>
                        <h5>Card Information</h5>
                    </div>
                    <div className='mainChefPayments1__cardInfo'>
                        <input placeholder='Name on card' />
                        <input placeholder='4242 4242 4242 4242' type='number' />
                        <div className='year-cvc1'>
                            <input className='class-month1' placeholder='MM/YY' />
                            <input placeholder='CVC' className='class-cvc1' />
                        </div>
                    </div>
                    <div className='mainChefPayments__warning11'>
                        <img src={InfoIcon} />
                        <p>All Card payments are processed through Stripe</p>
                    </div>
                    <div className='mainChefPayments__warning21'>
                        <img src={InfoIcon} />
                        <p>By Paying you accept the <a href='#'>Payment Policy</a>
                        </p>
                    </div>
                    <div className='mainChefPayments__payButton1'>
                        <Button>PAY</Button>
                        <p>OR PAY WITH</p>
                    </div>
                    <div className='mainChefPayments__option21'>
                        <img src={PaypalIcon} />
                        <img src={ApplePayICon} />
                    </div>
                </div>    
            </Modal>   
        <div className='mainCart'>
            <div className='mainCartHeader'>
                <img className='mainCenterHeader__leftIcon' src={LeftIcon} />
                <h3>CART</h3>
                <img onClick={openModal} src={DeleteIcon} />
            </div>
            <div className='mainCartCenter'>
                <div className='mainCartCenter__image'>
                    <img src={FoodImage} />
                </div>
                <div className='mainCartCenter__info'>
                    <h3>TAKEOUT/AWAY</h3>
                    <h4>Spicy chicken Noodles</h4>
                    <h5>$23.80</h5>
                    <p>Pay on Delivery</p>
                </div>
                <div className='mainCartCenter__add'>
                    <ChevronRight className='mainCartCenter__rightbutton' />
                    <div className='mainCartCenter__counter'>
                        <p className='cartred'>-</p>
                        <h5>1</h5>
                        <p className='cartgreen'>+</p>
                    </div>
                </div>
            </div>
            <div className='mainCart__details'>
                <div className='mainCart__detailsContainer'>
                    <div className='mainCart__detailsLeft'>
                        <div className='mainCart__detailsCount'>
                            <img src={CartIcon} />
                            <h5>5</h5>
                        </div>
                        <div className='mainCart__detailsTotal'>
                            <h4>Order Total:</h4>
                            <h5>$85.00</h5>
                        </div>
                    </div>
                    <div className='mainCartDetailsCenter'>
                        <h5 className='mainCart__subtotal'>Items Subtotal:</h5>
                        <h5 className='mainCart__delivery'>Delivery:</h5>
                        <h5 className='mainCart__tax'>Tax:</h5>
                        <h5 className='mainCart__pod'>Pay on Delivery:</h5>
                        <h5 className='mainCart__pon'>Pay Online now:</h5>
                    </div>
                    <div className='mainCartDetailsRight'>
                        <h5 className='mainCart__sutotalValue'>$45.60</h5>
                        <h5 className='mainCart__deliveryValue'>$15.00</h5>
                        <h5 className='mainCart__taxValue'>$15.00</h5>
                        <h5 className='mainCart__podValue'>$15.60</h5>
                        <h5 className='mainCart__ponValue'>$15.60</h5>
                    </div>
                </div>
                <div className='mainCart__checkoutButton'>
                    <Button onClick={openModal1}>Complete Order</Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainCart
