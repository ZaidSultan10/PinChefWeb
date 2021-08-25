import React, { useState } from 'react'
import './MainChefCreateRecipe.css'
import AddImageIcon from '../../assets/svg/Add-image-video.svg'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal'
import './MainChefCreateRecipeModal.css'
import { cuisinesList, dietsList } from './mainChefCreateRecipeData';



const MainChefCreateRecipe = () => {

    const [modalIsOpen1,setModalIsOpen1] = useState(false)
    const [foodName, setFoodName] = useState("");
    const [numberOfServing, setNumberOfServing] = useState("");
    const [prepTime,setPrepTime] = useState("")
    const [cookTime, setCookTime] = useState("");
    const [calories, setCalories] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [requiredTools, setRequiredTools] = useState("")
    const [difficultyLevel, setDifficultyLevel] = useState("");
    const [cuisines , setCuisines] = useState("")
    const [dietType, setDietType] = useState("")
    const [imageUpload, setImageUpload ] = useState("")


    
    const handleChange = (event) => {
        switch (event.target.name) {
        case "foodName":
            setFoodName(event.target.value);
            break;
        case "numberOfServing":
            setNumberOfServing(event.target.value);
            break;
        case "prepTime":
            setPrepTime(event.target.value);
            break;
        case "cookTime":
            setCookTime(event.target.value);
            break;
        case "calories":
            setCalories(event.target.value);
            break;
        case "ingredients":
            setIngredients(event.target.value);
            break;
        case "instructions":
            setInstructions(event.target.value);
            break;
        case "requiredTools":
            setRequiredTools(event.target.value);
            break;
        case "difficultyLevel":
            setDifficultyLevel(event.target.value);
            break;
        case "cuisines":
            setCuisines(event.target.value);
            break;
        case "dietType":
            setDietType(event.target.value);
            break;
        case "imageUpload":
            setImageUpload(event.target.value);
            break;
        default:
            break;
        }
    };
    const handleSubmit = (event) => {
        const obj = {
            foodName,
            numberOfServing,
            prepTime,
            cookTime,
            calories,
            ingredients,
            instructions,
            requiredTools,
            difficultyLevel,
            cuisines,
            dietType,
            imageUpload
          };
        console.log(obj);
    };
    const openModal1 =() => {
        setModalIsOpen1(true)
    }

    const closeModal1 = () => {
        setModalIsOpen1(false)
    }

    const history=useHistory()

    return (
        <>
        <Modal isOpen={modalIsOpen1}
            onRequestClose={closeModal1}
            
            className='mypostmodal1'
            contentLabel="Notification Modal">
                <div className='my-post-container'>
                    <div className='my-post-top'>
                        <h5>ARE YOU SURE?</h5>
                        
                    </div>
                    <div className='my-post-center'>
                        <p>
                            The data you entered
                            will not be saved, are you sure?
                        </p>
                    </div>
                    <div className='my-post-bottom'>
                        <Button onClick={closeModal1} className='my-post-recipe-stay'>Stay</Button>
                        <Button onClick={() => {
                        history.push('/chef/feed/recipe/my-posts')
                    }}  className='my-post-recipe-leave'>Leave</Button>
                    </div>
                </div>
            </Modal>
        <div className='mainChefCreateRecipe'>
            <div className='mainChefCreateRecipe__container'>
                <div className='mainChefCreateRecipe__heading'>
                    <h5>Create Recipe</h5>
                    <CloseIcon onClick={openModal1}  className='post-close-icon' />
                </div>
                <div className='mainChefCreateRecipe__addImage'>
                    <input type='file' multiple required name='imageUpload' value={imageUpload} onChange={handleChange} />
                </div>
                <div className='mainChefCreateRecipe__name'>
                    <h5>Food Name<span>*</span></h5>
                    <input required name='foodName' value={foodName} onChange={handleChange} placeholder='Enter Food Title' />
                </div>
                <div className='mainChefCreateRecipe__cuisine'>
                    <h5>Cuisine Type<span>*</span></h5>
                    <select required name='cuisines' value={cuisines} onChange={handleChange} id='cuisine__type__option'>
                        {
                            cuisinesList.map((cuisine) => (
                                <option>{cuisine.cuisine}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='mainChefCreateRecipe__diet'>
                    <h5>Diet Type<span>*</span></h5>
                    <select required name='dietType' value={dietType} onChange={handleChange} id='diet__type__option'>
                        {
                            dietsList.map((diet) => (
                                <option>{diet.diet}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='mainChefCreateRecipe__serving'>
                    <h5>Number of Servings<span>*</span></h5>
                    <input required name='numberOfServing' value={numberOfServing} onChange={handleChange} placeholder='2' />
                </div>
                <div className='mainChefCreateRecipe__time'>
                    <h5>Prep Time<span>*</span></h5>
                    <input required name='prepTime' value={prepTime} onChange={handleChange} placeholder='10 min' />
                </div>
                <div className='mainChefCreateRecipe__cook'>
                    <h5>Cook Time<span>*</span></h5>
                    <input required name='cookTime' value={cookTime} onChange={handleChange} placeholder='40 min' />
                </div>
                <div className='mainChefCreateRecipe__calory'>
                    <h5>Calories</h5>
                    <input required name='calories' value={calories} onChange={handleChange} placeholder='363' />
                </div>
                <div className='mainChefCreateRecipe__ingredients'>
                    <h5>Ingredients<span>*</span></h5>
                    <textarea required name='ingredients' value={ingredients} onChange={handleChange} rows='7' placeholder='Write all the ingredients' />
                </div>
                <div className='mainChefCreateRecipe__instruction'>
                    <h5>Instructions<span>*</span></h5>
                    <textarea required name='instructions' value={instructions} onChange={handleChange} rows='7' placeholder='Write cooking instructions' />
                </div>
                <div className='mainChefCreateRecipe__tools'>
                    <h5>Required tools<span className='optional'>(optional)</span></h5>
                    <textarea name='requiredTools' value={requiredTools} onChange={handleChange} rows='7' placeholder='Write tools needed to cook this' />
                </div>
                <div className='mainChefCreateReipe__level'>
                  <h5>Difficulty Level<span>*</span></h5>
                  <div className='input__options'>
                      <div className='input__easy'>
                          <input type="radio" id="easy" name="difficultyLevel" value={difficultyLevel} onChange={handleChange} />
                          <label htmlFor="easy">Easy</label>
                      </div>
                      <div className='input__medium'>
                          <input type="radio" id="medium" name="difficultyLevel" value={difficultyLevel} onChange={handleChange}/>
                          <label htmlFor="medium">Medium</label>
                      </div>
                      <div className='input__hard'>
                          <input type="radio" id="hard" name="difficultyLevel" value={difficultyLevel} onChange={handleChange}/>
                          <label htmlFor="hard">Hard</label>
                      </div>
                  </div>
                  
                </div>
                <div className='mainChefCreateRecipe__buttons'>
                    <Button onClick={openModal1} className='the-cancel-button'>Cancel</Button>
                    <Button onClick={handleSubmit} className='the-post-button'>Post</Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainChefCreateRecipe
