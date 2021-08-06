import React from 'react'
import './MainChefProfileArea.css'
import ProfileAvatar from '../../assets/svg/Profile-image.svg'
import { Button } from '@material-ui/core'
import InfoIcon from '../../assets/svg/info-icon-red.svg'
import { useHistory } from 'react-router-dom'




const MainChefProfileArea = () => {

    const history=useHistory()

    return (
        <div className='mainChefProfileArea'>
            <div className='mainChefProfileArea__heading'>
                    <h5>Create Profile</h5>
                
            </div>
            <div className='mainChefProfileArea__top'>
                <img src={ProfileAvatar} alt='star' />
                <div className ='mainChefProfileArea__topLeft'>
                    <h5>Name and Last Name<span>*</span></h5>
                    <input placeholder='Enter name and Last name' />
                </div>     
            </div>
            <div className='mainChefProfileArea__user'>
                <h5>User ID-Nickname<span>*</span></h5>
                <input placeholder='ex:JohnDoe67' />
            </div>
            <div className='mainChefProfileArea__phone'>
                <h5>Phone Number<span>*</span></h5>
                <input type='number' placeholder='Number' />
            </div>
            <div className='mainChefProfileArea__date'>
                <h5>Date Of Birth<span>*</span></h5>
                <select id='date__type__option'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                </select>
            </div>
            <div className='mainChefProfileArea__gender'>
                <h5>Gender<span>*</span></h5>
                <input placeholder='Male, Female etc..' />
            </div>
            <div className='mainChefProfileArea__position'>
                <h5>Position<span>*</span></h5>
                <input placeholder='ex. Head chef, Home chef etc..' />
            </div>
            <div className='mainChefProfileArea__language'>
                <h5>Language<span>*</span></h5>
                <input placeholder='ex. English, Spanish etc..' />
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
            <div className='mainChefProfileArea__ad'>
                <h5>Short Ad Intro<span>*</span></h5>
                <textarea rows='7' placeholder='Short intro about you to attract food lovers' />
            </div>
            <div className='mainChefProfileArea__info'>
                <h5>Full Background info<span>*</span></h5>
                <textarea rows='7' placeholder='Full background info you would like to share' />
            </div>
            <div className='mainChefProfileArea__location'>
                <h5>Address/Location<span>*</span></h5>
                <input placeholder='Country, City, State' />
            </div>
            <div className='mainChefProfileArea__hours'>
                  <h5>Service Hours<span>*</span></h5>
                  <div className='input__options__service'>
                      <div className='input__selected'>
                          <input type="radio" id="selected" name="level" value="selected" />
                          <label for="selected">Selected Hours</label>
                      </div>
                      <div className='input__allTime'>
                          <input type="radio" id="all" name="level" value="all"/>
                          <label for="all">24/7 with booking</label>
                      </div>
                  </div>
            </div>
            <div className='mainChefProfileArea__serve'>
            <h5>Services<span>*</span></h5>
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
            <div className='mainChefProfileArea__message'>
                <img src={InfoIcon} alt='star' />
                <p>The message for acceptance</p>
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
            <div className='mainChefProfileArea__access'>
                <h5>Location you give services to<span>*</span></h5>
                <textarea rows='7' placeholder='Service areas you deliver to' />
            </div>
            <div className='mainChefProfileArea__button'>
                <Button onClick={() =>{
                    history.push('/chef/home/feed')
                }}>Save</Button>
            </div>
        </div>
    )
}

export default MainChefProfileArea
