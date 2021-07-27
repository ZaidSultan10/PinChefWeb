import React from 'react'
import './MainFaqChef.css'
import { Accordion } from '@material-ui/core'
import { AccordionSummary } from '@material-ui/core'
import { AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import FaqIcon from '../../assets/svg/Faq-icon.svg'
import faqChefDatas from './mainFaqChefData'

const MainFaqChef = () => {
    return (
        <div className='mainFaqChef'>
            <div className='mainFaqChef__header'>
                <img src={LeftIcon} />
                <div className='mainFaqChef__headerCenter'>
                    <img src={FaqIcon} />
                    <h4>FAQ</h4>
                </div>
            </div>
            {
                faqChefDatas.map((faqChefData) => (
                <div className='mainFaqChef__container'>
                    <div className='mainFaqChef__count'>
                        <h5>{faqChefData.id}</h5>
                    </div>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">{faqChefData.question}</AccordionSummary>
                        <AccordionDetails> {faqChefData.answer}</AccordionDetails>
                    </Accordion>
                </div>
                ))
            }
        </div>
    )
}

export default MainFaqChef
