import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import FeedAllChefs from '../../components/feedAllChefs/FeedAllChefs'


import './UserAllChef.css'

const UserAllChef = () => {
    return (
        <div className='userAllChef'>
            <Header />
            <FeedAllChefs allChefProp={true} />
            <Footer />
        </div>
    )
}

export default UserAllChef
