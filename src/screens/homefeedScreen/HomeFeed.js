<<<<<<< HEAD
import React from 'react'
import Feed from '../../components/feed/Feed'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './HomeFeed.css'

const HomeFeed = () => {
    return (
        <div className='homefeed'>
            <Header />
            <Feed />
            <div className='homeFeed__footer'>
                <Footer />
            </div>
        </div>
    )
}
=======
import React from "react";
import Feed from "../../components/feed/Feed";
import Header from "../../components/header/Header";
import "./HomeFeed.css";

const HomeFeed = () => {
  return (
    <div className="homefeed">
      <Header searchProp={true} />
      <Feed />
    </div>
  );
};
>>>>>>> 64ca1d1e87acc7cb87b5490431a39c73b643efdb

export default HomeFeed;
