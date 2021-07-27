import React from 'react'
import './MainTermsUser.css'
import { Accordion } from '@material-ui/core'
import { AccordionSummary } from '@material-ui/core'
import { AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import mainTermsUserDatas from './mainTermsUserData'


const MainTermsUser = () => {
    return (
        <div className='mainTermsUser'>
            <div className='mainTermsUser__header'>
                <img src={LeftIcon} />
                <div className='mainTermsUser__headerCenter'>
                    
                    <h4>TERMS & CONDITIONS</h4>
                </div>
            </div>
            {
                mainTermsUserDatas.map((mainTermsUserData) => (
                <div className='mainTermsUser__container'>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='expandIcon'/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header">{mainTermsUserData.heading}</AccordionSummary>
                        <AccordionDetails> {mainTermsUserData.description}</AccordionDetails>
                    </Accordion>
                </div>
                ))
            }
        </div>
    )
}

export default MainTermsUser
