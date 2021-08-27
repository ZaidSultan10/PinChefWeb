import axios from "axios";
export const createPost = async (obj) => {
  try {
    const { description, addLocation, imageUpload } = obj;
    const post = await axios.post("http://localhost:5000/api/post/", {
      media_link: imageUpload,
      description,
      location: addLocation,
    });

    if (post.status === 200)
      return { message: post.data.message, data: post.data.post, status: 200 };
  } catch (err) {
    return { err: err.response.data, status: err.response.status };
  }
};
