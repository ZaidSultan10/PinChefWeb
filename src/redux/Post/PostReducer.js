import {
  CREATE_FOOD_FAILED,
  CREATE_FOOD_SUCCESS,
  CREATE_MASTERCLASS_FAILED,
  CREATE_MASTERCLASS_SUCCESS,
  CREATE_POST_FAILED,
  CREATE_POST_SUCCESS,
  CREATE_RECIPE_FAILED,
  CREATE_RECIPE_SUCCESS,
  CREATE_SERVICE_FAILED,
  CREATE_SERVICE_SUCCESS,
} from "./PostType";

const INITIAL_STATE = {
  posts: [],
  recipe: [],
  food: [],
  service: [],
  masterclass: [],
  error: null,
};

const ProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_POST_SUCCESS:
      return {
        posts: state.posts.append(),
      };
    case CREATE_FOOD_SUCCESS:
      return {
        food: state.food.append(),
      };
    case CREATE_RECIPE_SUCCESS:
      return {
        recipe: state.recipe.append(),
      };
    case CREATE_SERVICE_SUCCESS:
      return {
        service: state.service.append(),
      };
    case CREATE_MASTERCLASS_SUCCESS:
      return {
        masterclass: state.masterclass.append(),
      };
    case CREATE_FOOD_FAILED:
    case CREATE_MASTERCLASS_FAILED:
    case CREATE_POST_FAILED:
    case CREATE_RECIPE_FAILED:
    case CREATE_SERVICE_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default ProfileReducer;
