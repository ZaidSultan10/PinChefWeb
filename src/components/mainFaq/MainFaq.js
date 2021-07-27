import React, { useState } from 'react'
import './MainFaq.css'
import faqDatas from './mainFaqData'
import { Accordion } from '@material-ui/core'
import { AccordionSummary } from '@material-ui/core'
import { AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LeftIcon from '../../assets/svg/left-green-arrow.svg'
import FaqIcon from '../../assets/svg/Faq-icon.svg'

const MainFaq = () => {

    return (
        <div className='mainFaq'>
            <div className='mainFaq__header'>
                <img src={LeftIcon} />
                <div className='mainFaq__headerCenter'>
                    <img src={FaqIcon} />
                    <h4>FAQ</h4>
                </div>
            </div>
            {
                faqDatas.map((faqData) => (
                <div className='mainFaq__container'>
                    <div className='mainFaq__count'>
                        <h5>{faqData.id}</h5>
                    </div>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">{faqData.question}</AccordionSummary>
                        <AccordionDetails> {faqData.answer}</AccordionDetails>
                    </Accordion>
                </div>
                ))
            }
        </div>
    )
}

export default MainFaq
