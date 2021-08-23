import React, { useState } from 'react'
import './MainChefProfileArea.css'
import ProfileAvatar from '../../assets/svg/Profile-image.svg'
import { Button } from '@material-ui/core'
import InfoIcon from '../../assets/svg/info-icon-red.svg'
import { useHistory } from 'react-router-dom'
import {ReactComponent as GoodJobIcon} from '../../assets/svg-for-user-profile/Good-job-icon.svg'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Slider } from '@material-ui/core'
import {ReactComponent as ChefInfoIcon} from '../../assets/svg-for-user-profile/Chef-info.svg'
import {ReactComponent as PersonalInfoIcon} from '../../assets/svg-for-user-profile/Personal-info.svg'
import {ReactComponent as ServiceIcon} from '../../assets/svg-for-user-profile/Service.svg'


const MainChefProfileArea = () => {

    const history=useHistory()

    const [heading,setHeading] = useState('Tell us about yourself')
    const [value,setValue] = useState()
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nickName, setNickName] = useState("");
    const [gender, setGender] = useState("");
    const [language, setLanguage] = useState("");


    const handleChange = (event) => {
        switch (event.target.name) {
        case "firstName":
            setFirstName(event.target.value);
            break;
        case "lastName":
            setLastName(event.target.value);
            break;
        case "nickName":
            setNickName(event.target.value);
            break;
        case "gender":
            setGender(event.target.value);
            break;
        case "language":
            setLanguage(event.target.value);
            break;
        default:
            break;
        }
    };
    const handleSubmit = (event) => {
        
         console.log(event);
    };

    const interests = [
        {
            job:'Full time Job'
        },
        {
            job:'Part time Job'
        },
        {
            job:'Temporary'
        },
        {
            job:'Freelance'
        },
        {
            job:'Internship'
        },
        {
            job:'Use as Social Media'
        }
    ]


    return (
        <div className='mainChefProfileArea'>
            <div className='mainChefProfileArea__heading'>
                    <h5>{heading}</h5>       
            </div>
            
            {
                heading === 'Tell us about yourself' ? (
                <> 
                    <div className='mainChefProfileArea__slider'>
                        <Slider value={[0,25]} />
                        <ChefInfoIcon className='profile-chef-info' />
                        <PersonalInfoIcon className='profile-personal-info' />
                        <ServiceIcon className='profile-service-info' />
                    </div>   
                    <div className='mainChefProfileArea__top'>
                        <img src={ProfileAvatar} alt='star' /> 
                    </div>
                    <div className='mainChefProfileArea__namearea'>
                        <div className ='mainChefProfileArea__topLeft'>
                            <h5>Name<span>*</span></h5>
                            <input name='firstName' onChange={handleChange} placeholder='Name' />
                        </div>
                        <div className ='mainChefProfileArea__topRight'>
                            <h5>Last Name<span>*</span></h5>
                            <input name='lastName' onChange={handleChange} placeholder='Last Name' />
                        </div>
                    </div>
                    <div className='mainChefProfileArea__nickname'>
                        <div className='mainChefProfileArea__user'>
                            <h5>User ID-Nickname<span>*</span></h5>
                            <input name='nickName' onChange={handleChange} placeholder='ex:JohnDoe67' />
                        </div>
                        <div className='mainChefProfileArea__gender'>
                            <h5>Gender<span>*</span></h5>
                            <input name='gender' onChange={handleChange} placeholder='Male, Female etc..' />
                        </div>
                    </div>
                    <div className='mainChefProfileArea__dob'>
                        <h5>Date Of Birth<span>*</span></h5>
                        <div className='mainChefProfileArea__dobinput'>
                            <div className='mainChefProfileArea__date'>
                                
                                <select id='date__type__option'>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                </select>
                            </div>
                            <div className='mainChefProfileArea__month'>
                            
                                <select id='date__type__option'>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                </select>
                            </div>
                            <div className='mainChefProfileArea__year'>
                            
                                <select id='date__type__option'>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='mainChefProfileArea__phoneNumber'>
                        <div className='mainChefProfileArea__phone'>
                            <h5>Phone Number<span>*</span></h5>
                            <PhoneInput placeholder='XXX XXX XXXX'
                            value={value}
                            onChange={setValue} />
                        </div>
                        <div className='mainChefProfileArea__thumbsUp'>
                            <GoodJobIcon className='good__job__hand' />
                        </div>
                    </div>
                    <div className='mainChefProfileArea__language'>
                        <h5>Language<span>*</span></h5>
                        <input name='language' onChange={handleChange} placeholder='ex. English, Spanish etc..' />
                    </div>
                    <div className='mainChefProfileArea__ad'>
                        <h5>Short Ad Intro<span>*</span></h5>
                        <textarea rows='7' placeholder='Short intro about you to attract food lovers' />
                    </div>
                    <Button className='Next__1' onClick={() => setHeading('Tell about your Profession')}>Next</Button>
                </>    
                ): heading === 'Tell about your Profession' ? (
                   <> 
                   <div className='mainChefProfileArea__slider'>
                        <Slider value={[0,50]}   />
                        <ChefInfoIcon className='profile-chef-info' />
                        <PersonalInfoIcon className='profile-personal-info' />
                        <ServiceIcon className='profile-service-info' />
                    </div>
                    <div className='mainChefProfileArea__position'>
                        <h5>Position<span>*</span></h5>
                        <input placeholder='ex. Head chef, Home chef etc..' />
                    </div>
                    <div className='mainChefProfileArea__cuisine'>
                        <h5>Cuisine Specialist<span>*</span></h5>
                        <select id='diet__type__option'>
                                <option>Vegan</option>
                                <option>Vegetarian</option>
                                <option>Halal</option>
                                <option>Kashar</option>
                                <option>Meat</option>
                        </select>
                    </div>
                
                    <div className='mainChefProfileArea__info'>
                        <h5>Full Background info<span>*</span></h5>
                        <textarea rows='7' placeholder='Full background info you would like to share' />
                    </div>
                    
                    <div className='mainChefProfileArea__hours'>
                        <h5>What are you interest in?<span>*</span></h5>
                        <div className='input__options__interests'>
                        {
                            interests.map((interest) => (
                            <div className='input__interest'>
                               
                                <input type="radio" id="selected" name="level" value="selected" />
                                <label for="selected">{interest.job}</label> 
                                   
                            </div>
                            ))
                        }
                        </div>
                    </div>
                    <div className='next-prev-button'>
                        <Button onClick={() => setHeading('Tell us about yourself')} className='button-back1'>Back</Button>
                        <Button onClick={() => setHeading('Tell about your Services')} className='button-next2'>Next</Button>
                    </div>
                    </>
                ):(

                <> 
                    <div className='mainChefProfileArea__slider'>
                        <Slider value={[0,100]} />
                        <ChefInfoIcon className='profile-chef-info' />
                        <PersonalInfoIcon className='profile-personal-info' />
                        <ServiceIcon className='profile-service-info' />
                    </div>
                    <div className='mainChefProfileArea__location'>
                        <h5>Address/Location<span>*</span></h5>
                        <input placeholder='Country, City, State' />
                    </div>   
                    <div className='mainChefProfileArea__serve'>
                    <h5>Providing Services<span>*</span></h5>
                        <div className='mainChefProfileArea__types'>
                            <div className='input__easy__serve'>
                                <input type="radio" id="cook" name="level" value="cook" />
                                <label for="cook">Cook and Deliver</label>
                            </div>
                            <div className='input__easy__serve'>
                                <input type="radio" id="ship" name="level" value="ship" />
                                <label for="ship">Cook and Ship</label>
                            </div>
                            <div className='input__easy__serve'>
                                <input type="radio" id="pick" name="level" value="pick" />
                                <label for="pick">Cook and pick up/Takeaway</label>
                            </div>
                            <div className='input__easy__serve'>
                                <input type="radio" id="go" name="level" value="go" />
                                <label for="go">Go to guest address and cook</label>
                            </div>
                            <div className='input__easy__serve'>
                                <input type="radio" id="host" name="level" value="host" />
                                <label for="host">Host guests and cook</label>
                            </div>
                            <div className='input__easy__serve'>
                                <input type="radio" id="live" name="level" value="live" />
                                <label for="live">Cook live with chef</label>
                            </div>
                        </div>
                    </div>
                    <div className ='mainChefProfileArea__areas'>
                        <h5>Service Deliveries</h5>
                        <input placeholder='Areas' />
                    </div>
                    <div className='message__heading'>
                        <h5>Accepting Payment Methods</h5>
                    </div>
                    <div className='mainChefProfileArea__message'>
                        <img src={InfoIcon} alt='star' />
                        <p>Online options selected now will have to be
                            connected to your own payment account later in
                            settings for you to be able to recieve from customers.
                        </p>
                    </div>
                    <div className='mainChefProfileArea__payment'>
                            <div className='input__easy__serve'>
                                <input type="radio" id="stripe" name="level" value="stripe" />
                                <label for="stripe">Stripe</label>
                            </div>
                            <div className='input__easy__serve'>
                                <input type="radio" id="paypal" name="level" value="paypal" />
                                <label for="paypal">Paypal</label>
                            </div>
                            <div className='input__easy__serve'>
                                <input type="radio" id="cod" name="level" value="cod" />
                                <label for="cod">Cash on delivery</label>
                            </div>
                            <div className='input__easy__serve'>
                                <input type="radio" id="card" name="level" value="card" />
                                <label for="card">Credit card on delivery</label>
                            </div>
                    </div>
                    <div className='mainChefProfileArea__min'>
                        <h5>Minimum Purchase Services total amount<span>*</span></h5>
                        <div className='sampleTestDiv'>
                            <div className='headingsss'>
                                <h5>$</h5>
                            </div>
                            <div className='inputThePrice'>
                                <input type='number' placeholder='Enter Price' />
                            </div>
                        </div>
                    </div>
                    <div className='mainChefProfileArea__range'>
                        <h5>Service Price Range<span>*</span></h5>
                        <div className='sampleTestDiv1'>
                            <div className='headingsss1'>
                                <h5>$</h5>
                            </div>
                            <div className='inputThePrice1'>
                                <input type='number' placeholder='Min' />
                            </div>
                            <div className='inputThePrice2'>
                                <input type='number' placeholder='Max' />
                            </div>
                        </div>
                    </div>
                    <div className='mainChefProfileArea__hourly'>
                        <h5>Hourly Rate<span>*</span></h5>
                        <div className='sampleTestDiv'>
                            <div className='headingsss'>
                                <h5>$</h5>
                            </div>
                            <div className='inputThePrice'>
                                <input type='number' placeholder='Enter Price' />
                            </div>
                        </div>
                    </div>
                    
                    <div className='mainChefProfileArea__button'>
                        
                        <Button onClick={() => setHeading('Tell about your Profession')} className='button-back2'>Back</Button>
                        <Button onClick={() =>{
                            history.push('/chef/home/feed')
                        }} className='button-next3'>Finish</Button>
                    
                    </div>
                </>
                )
            }
            
        </div>
    )
}

export default MainChefProfileArea
