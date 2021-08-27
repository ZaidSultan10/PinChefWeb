import axios from "axios";
export const createFood = async (obj) => {
  try {
    const {
      foodName,
      cuisines,
      imageUpload,
      dietType,
      description,
      calories,
      serviceType,
      price,
      deliveryFee,
      shippingFee,
    } = obj;
    const post = await axios.post("/api/food/", {
      imageUpload,
      foodName,
      cuisines,
      dietType,
      description,
      calories,
      serviceType,
      price,
      deliveryFee,
      shippingFee,
    });

    if (post.status === 200)
      return { message: post.data.message, data: post.data.post, status: 200 };
  } catch (err) {
    return { err: err.response.data, status: err.response.status };
  }
};
