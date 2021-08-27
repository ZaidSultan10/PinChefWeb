import {
  CREATE_FOOD_FAILED,
  CREATE_FOOD_START,
  CREATE_FOOD_SUCCESS,
  CREATE_MASTERCLASS_FAILED,
  CREATE_MASTERCLASS_START,
  CREATE_MASTERCLASS_SUCCESS,
  CREATE_POST_FAILED,
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  CREATE_RECIPE_FAILED,
  CREATE_RECIPE_START,
  CREATE_RECIPE_SUCCESS,
  CREATE_SERVICE_FAILED,
  CREATE_SERVICE_START,
  CREATE_SERVICE_SUCCESS,
} from "./PostType";

//Create Post
export const createPostStart = (post) => ({
  type: CREATE_POST_START,
  payload: post,
});

export const createPostSuccess = (post) => ({
  type: CREATE_POST_SUCCESS,
  payload: post,
});

export const createPostFailed = (err) => ({
  type: CREATE_POST_FAILED,
  payload: err,
});

// Create Food
export const createFoodStart = (post) => ({
  type: CREATE_FOOD_START,
  payload: post,
});

export const createFoodSuccess = (post) => ({
  type: CREATE_FOOD_SUCCESS,
  payload: post,
});

export const createFoodFailed = (err) => ({
  type: CREATE_FOOD_FAILED,
  payload: err,
});

// Create Recipe

export const createRecipeStart = (post) => ({
  type: CREATE_RECIPE_START,
  payload: post,
});

export const createRecipeSuccess = (post) => ({
  type: CREATE_RECIPE_SUCCESS,
  payload: post,
});

export const createRecipeFailed = (err) => ({
  type: CREATE_RECIPE_FAILED,
  payload: err,
});

// Create Service

export const createServiceStart = (post) => ({
  type: CREATE_SERVICE_START,
  payload: post,
});

export const createServiceSuccess = (post) => ({
  type: CREATE_SERVICE_SUCCESS,
  payload: post,
});

export const createServiceFailed = (err) => ({
  type: CREATE_SERVICE_FAILED,
  payload: err,
});

// Create MasterClass

export const createMasterclassStart = (post) => ({
  type: CREATE_MASTERCLASS_START,
  payload: post,
});

export const createMasterclassSuccess = (post) => ({
  type: CREATE_MASTERCLASS_SUCCESS,
  payload: post,
});

export const createMasterclassFailed = (err) => ({
  type: CREATE_MASTERCLASS_FAILED,
  payload: err,
});
