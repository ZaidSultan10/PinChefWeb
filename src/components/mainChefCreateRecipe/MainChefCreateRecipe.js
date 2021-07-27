import React from 'react'
import './MainChefCreateRecipe.css'
import AddImageIcon from '../../assets/svg/Add-image-video.svg'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';



const MainChefCreateRecipe = () => {

    const history=useHistory()

    return (
        <div className='mainChefCreateRecipe'>
            <div className='mainChefCreateRecipe__container'>
                <div className='mainChefCreateRecipe__heading'>
                    <h5>Create Recipe</h5>
                    <CloseIcon onClick={() => {
                        history.push('/chef/feed/recipe/my-posts')
                    }} className='post-close-icon' />
                </div>
                <div className='mainChefCreateRecipe__addImage'>
                    <img src={AddImageIcon} />
                </div>
                <div className='mainChefCreateRecipe__name'>
                    <h5>Food Name<span>*</span></h5>
                    <input placeholder='Enter Food Title' />
                </div>
                <div className='mainChefCreateRecipe__cuisine'>
                    <h5>Cuisine Type<span>*</span></h5>
                    <select id='cuisine__type__option'>
                        <option>European</option>
                        <option>Turkish</option>
                        <option>Russian</option>
                        <option>Arabic</option>
                        <option>Indian</option>
                    </select>
                </div>
                <div className='mainChefCreateRecipe__diet'>
                    <h5>Diet Type<span>*</span></h5>
                    <select id='diet__type__option'>
                        <option>Vegan</option>
                        <option>Vegetarian</option>
                        <option>Halal</option>
                        <option>Kashar</option>
                        <option>Meat</option>
                    </select>
                </div>
                <div className='mainChefCreateRecipe__serving'>
                    <h5>Number of Servings<span>*</span></h5>
                    <input placeholder='2' />
                </div>
                <div className='mainChefCreateRecipe__time'>
                    <h5>Prep Time<span>*</span></h5>
                    <input placeholder='10 min' />
                </div>
                <div className='mainChefCreateRecipe__cook'>
                    <h5>Cook Time<span>*</span></h5>
                    <input placeholder='40 min' />
                </div>
                <div className='mainChefCreateRecipe__calory'>
                    <h5>Calories</h5>
                    <input placeholder='363' />
                </div>
                <div className='mainChefCreateRecipe__ingredients'>
                    <h5>Ingredients<span>*</span></h5>
                    <textarea rows='7' placeholder='Write all the ingredients' />
                </div>
                <div className='mainChefCreateRecipe__instruction'>
                    <h5>Instructions<span>*</span></h5>
                    <textarea rows='7' placeholder='Write cooking instructions' />
                </div>
                <div className='mainChefCreateRecipe__tools'>
                    <h5>Required tools<span className='optional'>(optional)</span></h5>
                    <textarea rows='7' placeholder='Write tools needed to cook this' />
                </div>
                <div className='mainChefCreateReipe__level'>
                  <h5>Difficulty Level<span>*</span></h5>
                  <div className='input__options'>
                      <div className='input__easy'>
                          <input type="radio" id="easy" name="level" value="easy" />
                          <label for="easy">Easy</label>
                      </div>
                      <div className='input__medium'>
                          <input type="radio" id="medium" name="level" value="medium"/>
                          <label for="medium">Medium</label>
                      </div>
                      <div className='input__hard'>
                          <input type="radio" id="hard" name="level" value="hard"/>
                          <label for="hard">Hard</label>
                      </div>
                  </div>
                  
                </div>
                <div className='mainChefCreateRecipe__buttons'>
                    <Button onClick={() => {
                        history.push('/chef/feed/recipe/my-posts')
                    }} className='the-cancel-button'>Cancel</Button>
                    <Button className='the-post-button'>Post</Button>
                </div>
            </div>
        </div>
    )
}

export default MainChefCreateRecipe
