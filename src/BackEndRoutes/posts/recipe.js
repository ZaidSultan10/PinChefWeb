import axios from "axios";
export const createRecipe = async (obj) => {
  try {
    const {
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
    } = obj;
    const post = await axios.post("/api/recipe/", {
      //   media,
      foodName,
      cuisineType: cuisines,
      dietType,
      numberOfServings: numberOfServing,
      prepTime,
      cookTime,
      totalTime: prepTime + cookTime,
      calories,
      ingredients,
      instructions,
      requiredTools,
      difficultyLevel,
    });

    if (post.status === 200)
      return { message: post.data.message, data: post.data.post, status: 200 };
  } catch (err) {
    return { err: err.response.data, status: err.response.status };
  }
};
