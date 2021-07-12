import React from 'react'
import ChefCreateFeedPost from '../../components/chefCreatepost/ChefCreateFeedPost'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const ChefCreatePost = () => {
    return (
        <div className='chefCreatePost'>
            <Header searchProp={true} />
            <ChefCreateFeedPost />
            <Footer />
        </div>
    )
}

export default ChefCreatePost
