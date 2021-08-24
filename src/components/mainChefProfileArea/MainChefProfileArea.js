import React, { useState } from 'react'
import './MainChefProfileArea.css'
import ProfileAvatar from '../../assets/svg/Profile-image.svg'
import { Button } from '@material-ui/core'
import InfoIcon from '../../assets/svg/info-icon-red.svg'
//import { useHistory } from 'react-router-dom'
import {ReactComponent as GoodJobIcon} from '../../assets/svg-for-user-profile/Good-job-icon.svg'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Slider } from '@material-ui/core'
import {ReactComponent as ChefInfoIcon} from '../../assets/svg-for-user-profile/Chef-info.svg'
import {ReactComponent as PersonalInfoIcon} from '../../assets/svg-for-user-profile/Personal-info.svg'
import {ReactComponent as ServiceIcon} from '../../assets/svg-for-user-profile/Service.svg'
import {cuisineList, dateOfBirth, monthOfBirth, positionsList} from './mainChefProfileAreaData'



const MainChefProfileArea = () => {

    //const history=useHistory()

    const [heading,setHeading] = useState('Tell us about yourself')
    const [value,setValue] = useState('')
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nickName, setNickName] = useState("");
    const [gender, setGender] = useState("");
    const [language, setLanguage] = useState("");
    const [shortAd, setShortAd] = useState("")
    const [position,setPosition] = useState("")
    const [backgroundInfo,setBackgroundInfo] = useState("")
    const [interested,setInterested] = useState("")
    const [address,setAddress] = useState("")
    const [provideService,setProvideService] = useState("")
    const [serviceDelivery,setServiceDelivery] = useState("")
    const [acceptPayment,setAcceptPayment] = useState("")
    const [minimumPurchase,setMinimumPurchase] = useState("")
    const [min,setMin] = useState("")
    const [max,setMax] = useState("")
    const [hourlyRate,setHourlyRate] = useState("")
    const [dobDate,setDobDate] = useState("")
    const [dobMonth,setDobMonth] = useState("")
    const [dobYear,setDobYear] = useState("")
    const [addCuisines , setAddCuisines] = useState("")


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
        case "shortAd":
            setShortAd(event.target.value);
            break;
        case "position":
            setPosition(event.target.value);
            break;
        case "backgroundInfo":
            setBackgroundInfo(event.target.value);
            break;
        case "interested":
            setInterested(event.target.value);
            break;
        case "address":
            setAddress(event.target.value);
            break;
        case "provideServices":
            setProvideService(event.target.value);
            break;
        case "serviceDelivery":
            setServiceDelivery(event.target.value);
            break;
        case "acceptPayment":
            setAcceptPayment(event.target.value);
            break;
        case "minimumPurchase":
            setMinimumPurchase(event.target.value);
            break;
        case "min":
            setMin(event.target.value);
            break;
        case "max":
            setMax(event.target.value);
            break;
        case "hourlyRate":
            setHourlyRate(event.target.value);
            break;
        case "dobDate":
            setDobDate(event.target.value);
            break;
        case "dobMonth":
            setDobMonth(event.target.value);
            break;
        case "dobYear":
            setDobYear(event.target.value);
            break;
        case "phoneNumber":
            setValue(event.target.value);
            break;
        case "cuisines":
            setAddCuisines(event.target.value);
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
                            <input required name='firstName' value={firstName} onChange={handleChange} placeholder='Name' />
                        </div>
                        <div className ='mainChefProfileArea__topRight'>
                            <h5>Last Name<span>*</span></h5>
                            <input required name='lastName' value={lastName} onChange={handleChange} placeholder='Last Name' />
                        </div>
                    </div>
                    <div className='mainChefProfileArea__nickname'>
                        <div className='mainChefProfileArea__user'>
                            <h5>User ID-Nickname<span>*</span></h5>
                            <input required name='nickName' value={nickName} onChange={handleChange} placeholder='ex:JohnDoe67' />
                        </div>
                        <div className='mainChefProfileArea__gender'>
                            <h5>Gender<span>*</span></h5>
                            <input required name='gender' value={gender} onChange={handleChange} placeholder='Male, Female etc..' />
                        </div>
                    </div>
                    <div className='mainChefProfileArea__dob'>
                        <h5>Date Of Birth<span>*</span></h5>
                        <div className='mainChefProfileArea__dobinput'>
                            <div className='mainChefProfileArea__date'>
                                
                                <select required name='dobDate' value={dobDate} onChange={handleChange} id='date__type__option'>
                                    {
                                        dateOfBirth.map((date) => (
                                            <option>{date.days}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className='mainChefProfileArea__month'>
                            
                                <select required name='dobMonth' value={dobMonth} onChange={handleChange} id='date__type__option'>
                                    {
                                        monthOfBirth.map((month) => (
                                            <option>{month.month}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className='mainChefProfileArea__year'>
                                <input required minLength={4} maxLength={4} name='dobYear' value={dobYear} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className='mainChefProfileArea__phoneNumber'>
                        <div className='mainChefProfileArea__phone'>
                            <h5>Phone Number<span>*</span></h5>
                            <PhoneInput placeholder='XXX XXX XXXX'
                            value={value}
                            name='phoneNumber'
                            onChange={handleChange} required />
                        </div>
                        <div className='mainChefProfileArea__thumbsUp'>
                            <GoodJobIcon className='good__job__hand' />
                        </div>
                    </div>
                    <div className='mainChefProfileArea__language'>
                        <h5>Language<span>*</span></h5>
                        <input required name='language' value={language} onChange={handleChange} placeholder='ex. English, Spanish etc..' />
                    </div>
                    <div className='mainChefProfileArea__ad'>
                        <h5>Short Ad Intro<span>*</span></h5>
                        <textarea required rows='7' name='shortAd' value={shortAd} onChange={handleChange} placeholder='Short intro about you to attract food lovers' />
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
                        <select name='position' value={position} onChange={handleChange} >
                            {
                                positionsList.map((position) => (
                                    <option>{position.position}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='mainChefProfileArea__cuisine'>
                        <h5>Cuisine Specialist<span>*</span></h5>
                        <select required name='cuisines' value={addCuisines} onChange={handleChange} id='diet__type__option'>
                                {
                                    cuisineList.map((cuisine) => (
                                        <option>{cuisine.cuisine}</option>
                                    ))
                                }
                        </select>
                    </div>
                
                    <div className='mainChefProfileArea__info'>
                        <h5>Full Background info<span>*</span></h5>
                        <textarea required rows='7' name='backgroundInfo' value={backgroundInfo} onChange={handleChange} placeholder='Full background info you would like to share' />
                    </div>
                    
                    <div className='mainChefProfileArea__hours'>
                        <h5>What are you interest in?<span>*</span></h5>
                        <div className='input__options__interests'>
                        {
                            interests.map((interest) => (
                            <div className='input__interest'>
                               
                                <input type="radio" id="selected" name="interested" value={interested} onChange={handleChange} />
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
                        <input required name='address' value={address} onChange={handleChange} placeholder='Country, City, State' />
                    </div>   
                    <div className='mainChefProfileArea__serve'>
                    <h5>Providing Services<span>*</span></h5>
                        <div className='mainChefProfileArea__types'>
                            <div className='input__easy__serve'>
                                <input type="radio" id="cook" name="provideServices" value={provideService} onChange={handleChange} />
                                <label for="cook">Cook and Deliver</label>
                            </div>
                            <div className='input__easy__serve'>
                                <input type="radio" id="ship" name="provideServices" value={provideService} onChange={handleChange} />
                                <label for="ship">Cook and Ship</label>
                            </div>
                            <div className='input__easy__serve'>
                                <input type="radio" id="pick" name="provideServices" value={provideService} onChange={handleChange} />
                                <label for="pick">Cook and pick up/Takeaway</label>
                            </div>
                            <div className='input__easy__serve'>
                                <input type="radio" id="go" name="provideServices" value={provideService} onChange={handleChange} />
                                <label for="go">Go to guest address and cook</label>
                            </div>
                            <div className='input__easy__serve'>
                                <input type="radio" id="host" name="provideServices" value={provideService} onChange={handleChange} />
                                <label for="host">Host guests and cook</label>
                            </div>
                            <div className='input__easy__serve'>
                                <input type="radio" id="live" name="provideServices" value={provideService} onChange={handleChange} />
                                <label for="live">Cook live with chef</label>
                            </div>
                        </div>
                    </div>
                    <div className ='mainChefProfileArea__areas'>
                        <h5>Service Deliveries</h5>
                        <input required name='serviceDelivery' value={serviceDelivery} onChange={handleChange} placeholder='Areas' />
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
                                <input type="radio" id="stripe" name="acceptPayment" value={acceptPayment} onChange={handleChange} />
                                <label for="stripe">Stripe</label>
                            </div>
                            <div className='input__easy__serve'>
                                <input type="radio" id="paypal" name="acceptPayment" value={acceptPayment} onChange={handleChange} />
                                <label for="paypal">Paypal</label>
                            </div>
                            <div className='input__easy__serve'>
                                <input type="radio" id="cod" name="acceptPayment" value={acceptPayment} onChange={handleChange} />
                                <label for="cod">Cash on delivery</label>
                            </div>
                            <div className='input__easy__serve'>
                                <input type="radio" id="card" name="acceptPayment" value={acceptPayment} onChange={handleChange} />
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
                                <input required type='number' name='minimumPurchase' value={minimumPurchase} onChange={handleChange} placeholder='Enter Price' />
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
                                <input required type='number' name='min' value={min} onChange={handleChange} placeholder='Min' />
                            </div>
                            <div className='inputThePrice2'>
                                <input required type='number' name='max' value={max} onChange={handleChange} placeholder='Max' />
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
                                <input required type='number' name='hourlyRate' value={hourlyRate} onChange={handleChange} placeholder='Enter Price' />
                            </div>
                        </div>
                    </div>
                    
                    <div className='mainChefProfileArea__button'>
                        
                        <Button onClick={() => setHeading('Tell about your Profession')} className='button-back2'>Back</Button>
                        <Button onClick={ handleSubmit /*() =>{
                            history.push('/chef/home/feed')
                        }*/} className='button-next3'>Finish</Button>
                    
                    </div>
                </>
                )
            }
            
        </div>
    )
}

export default MainChefProfileArea
