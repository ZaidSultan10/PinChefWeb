import axios from "axios";
const getUrl = async (img) => {
  let url = await axios("/api/s3url")
    .then((data) => data)
    .catch((err) => Promise.reject(err));
  // url = url.then((data) => data);
  return postImage(url.data, img);
};

const postImage = async (url, img) => {
  const result = await axios(url, {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: img,
  });
  return result.config.url.split("?")[0];
  // const imageUrl = url.split("?")[0];
};

export default getUrl;
