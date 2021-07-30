import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ChefMasterClassFeedAllMyPost from '../../components/chefMasterClassFeedAllMyPost/ChefMasterClassFeedAllMyPost'

const CreateMasterclassMyPost = () => {
    return (
        <div>
            <Header searchProp={true} notificationProp={true} />
            <ChefMasterClassFeedAllMyPost />
            <Footer footerProp={true} />
        </div>
    )
}

export default CreateMasterclassMyPost
