import { Avatar } from "@material-ui/core";
import React, {useState} from "react";
import "./MainFeed.css";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import PostImage from "../../assets/backgroundImages/main-image.jpeg";
import HorizontalLine from '../../assets/svg/Horizontal-spliter-1.svg'
import CommentIcon from "../../assets/svg/Commentwithborder.svg";
import HeartIcon from '../../assets/svg/Heart_Outline.svg'
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import LocationIcon from "../../assets/svg/Location.svg";
import ShareItIcon from "../../assets/svg/Share-yellow.svg";
import Modal from 'react-modal'
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import TextTruncate from 'react-text-truncate'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
//import { ArrowRightAlt } from "@material-ui/icons";
import {ReactComponent as StickerIcon } from '../../assets/svg/Sticker_btn.svg'


const MainFeed = () => {

  const [modalIsOpen,setIsOpen]=useState(false)
  const [modalIsOpen1,setIsOpen1]=useState(false)
  const [modalIsOpen2,setIsOpen2]=useState(false)
  const [toggleTruncate,setToggleTruncate] = useState(false)


  const customStyles1={
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      borderRadius          : '16px',
      padding:'0px',
      margin:'0px',
      width : '55%',
      height:'35%',
      cursor:'pointer'
      
    }
  }

  const openModal = () => {
    setIsOpen(true)
}

const closeModal = () => {
  setIsOpen(false);
}
const openModal1 = () => {
  setIsOpen1(true)
}

const closeModal1 = () => {
setIsOpen1(false);
setIsOpen2(true)
}
const closeModal2 = () => {
  setIsOpen1(false);
  }

  const closeModal3 = () => {
    setIsOpen2(false)
    setIsOpen1(false);
    setIsOpen(false)
    }
    
    const history=useHistory()


  return (
    <>
    <Modal 
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    
    className='myModal1HomePage'
    contentLabel="Example Modal">
          <div className='modal-options'>
            <h5>Follow Chef</h5>
            <h5>Add To Favorites</h5>
            <h5 onClick={openModal1}>Report</h5>
          </div>
    </Modal>
    <Modal 
    isOpen={modalIsOpen1}
    onRequestClose={closeModal1}
    style={customStyles1}
    contentLabel="Example Modal">
          <div className='modal-options-report'>
            <div className='report-heading'>
                <h5>Report</h5>
            </div>
            <div className='report-options'>
              <h5>Choose reporting reason:</h5>
              <div className='report-option-1'>
                <input type="radio" id="spam" name="level" value="spam" />
                <label for="spam">SPAM</label>
              </div>
              <div className='report-option-2'>
                <input type="radio" id="inappropriate" name="level" value="inappropriate" />
                <label for="inappropriate">INAPPROPRIATE</label>
              </div>
            </div>
            <div className='report-buttons'>
                <Button onClick={closeModal2} className='report-dont'>Cancel</Button>
                <Button onClick={closeModal1} className='report-post'>Post</Button>
              </div>
          </div>
    </Modal>
    <Modal 
    isOpen={modalIsOpen2}
    onRequestClose={closeModal3}
    style={customStyles1}
    
    contentLabel="Example Modal">
          <div className='modal-options-report'>
            <div className='report-heading'>
                <h5>INAPPROPRIATE</h5>
            </div>
            <div className='report-message'>
                <p>Thank you for letting us know we will look into this and take 
                  required action </p>
            </div>
            <div className='report-buttons1'>
                <Button onClick={closeModal3} className='report-post1'>OK</Button>
            </div>
          </div>
    </Modal>
    <div className="mainFeed">
      {[...Array(6)].map(() => (
        <>
          <div className="mainFeed__header">
            <div className='avatar__container'>
              <Avatar className="avatar" onClick={() => {
                history.push('/user/chef/profile')
              }} />
            </div>
          <div className="mainFeed__userName">
            <h3 onClick={() => {
                history.push('/user/chef/profile')
              }} >Matt Wilson</h3>
            <MoreHorizOutlinedIcon onClick={openModal} className="moreHoriz" />
          </div>
        </div>
        <div className="mainFeed__location">
          <div className="mainFeed__container__location">
            <img src={LocationIcon} className="icon" alt="Location" />
            <p className="location__city">Miami,</p>
            <p className="location__country">FL</p>
          </div>
          <div className="mainFeed__time">
            <QueryBuilderIcon className="time" />
            <p>45 min ago</p>
          </div>
        </div>
        <div className='post__image__container'>
          <img className="post__image" src={PostImage} alt="post" />
        </div>
        <div className="mainFeed__actions">
          <div className="mainFeed__actions__left">
            <div className="like">
              <img src={HeartIcon} className="heart__icon" alt='star' />
              <p>135</p>
            </div>
            <div className="comment">
              <img onClick={() => {
                history.push('/user/comments')
              }} src={CommentIcon} alt="comment" />
              <p>120</p>
            </div>
          </div>
          <div className="mainFeed__actions__right">
            <div className="share">
              <img src={ShareItIcon} className="share__icon" alt="Share" />
            </div>
          </div>
        </div>
        <div className="mainFeed__paragraph">
        {
          !toggleTruncate ? (
            <TextTruncate
            line={3}
            element='p'
            truncateText='...'
            text='It was a great night as we were catering for a wedding. Thank you to
            all the staff that helped to make this event as wonderful as possible.
            Special thanks to the host
            It was a great night as we were catering for a weddingggggggggg. Thank you to
            all the staff that helped to make this event as wonderful as possible.
            Special thanks to the host'
            textTruncateChild ={<span className='spn-2'><KeyboardArrowDownIcon className='spn1' onClick={() => setToggleTruncate(true)} /></span>}
            
          />
          ) : (
            <p>
              It was a great night as we were catering for a wedding. Thank you to
            all the staff that helped to make this event as wonderful as possible.
            Special thanks to the host
            It was a great night as we were catering for a wedding. Thank you to
            all the staff that helped to make this event as wonderful as possible.
            Special thanks to the host <span className='spn-2'><ExpandLessIcon className='spn1' onClick={() => setToggleTruncate(false)} /></span>
            </p>
          )
        }
          
        </div>
        <div className='mainFeed__commentsection'>
            <input placeholder='Comment' />
            <p>Send</p>
            <StickerIcon className='mainFeed__commentsection__stickers' />
        </div>
        <div className='bottom__line'>
              <img src={HorizontalLine} alt='line' />
        </div>
      </>  
      ))}
      
    </div>
    </>
  );
};

export default MainFeed;
