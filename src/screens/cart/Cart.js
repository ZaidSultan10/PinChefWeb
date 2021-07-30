import React from 'react'
import FeedCart from '../../components/feedCart/FeedCart'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const Cart = () => {
    return (
        <div>
            <Header searchProp={true} />
            <FeedCart />
            <Footer />
        </div>
    )
}

export default Cart
