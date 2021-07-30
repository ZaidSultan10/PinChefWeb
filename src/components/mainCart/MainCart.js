import React from 'react'
import './MainCart.css'
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import DeleteIcon from '../../assets/svg-for-user-profile/Delete.svg'
import { ChevronRight } from '@material-ui/icons'
import FoodImage from '../../assets/chef-images/chef-image1.jpg'
import CartIcon from '../../assets/svg/Cart.svg'
import { Button } from '@material-ui/core'


const MainCart = () => {
    return (
        <div className='mainCart'>
            <div className='mainCartHeader'>
                <img className='mainCenterHeader__leftIcon' src={LeftIcon} />
                <h3>CART</h3>
                <img src={DeleteIcon} />
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
                    <Button>Complete Order</Button>
                </div>
            </div>
        </div>
    )
}

export default MainCart
