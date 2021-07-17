import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ChefCommentArea from '../../components/chefCommentArea/ChefCommentArea'


const UserCommentScreen = () => {
    return (
        <div className='userCommentScreen'>
            <Header searchProp={true} />
            <ChefCommentArea />
            <Footer />

        </div>
    )
}

export default UserCommentScreen
