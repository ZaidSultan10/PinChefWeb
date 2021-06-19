import React from 'react'
import './SamplePage.css'

const SamplePage = () => {
    return (
        <div className='samplepage'>
            <div className='samplepage__container'>
                <div className='samplepage__left'>
                    <p> i am keft sidebar </p>
                </div>
                <div className='samplepage__center'>
                    <p> i am center area </p>
                </div>
                <div className='samplepage__right'>
                    <p> i am right sidebar </p>
                </div>
            </div>
        </div>
    )
}

export default SamplePage
