import axios from "axios";
export const createService = async (obj) => {
  try {
    const { description, serviceType, imageUpload, serviceDays, price } = obj;
    const post = await axios.post("/api/service/", {
      imageUpload,
      serviceType,
      description,
      price,
      serviceDays,
    });

    if (post.status === 200)
      return { message: post.data.message, data: post.data.post, status: 200 };
  } catch (err) {
    return { err: err.response.data, status: err.response.status };
  }
};
