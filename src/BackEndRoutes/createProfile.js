import axios from "axios";
export const createProfile = async (obj) => {
  try {
    let Profile;
    if (obj.userType === "user") {
      const { name, phone, image, username } = obj;
      Profile = await axios.post("/api/profile/user", {
        name: name,
        mobile: phone,
        profile_image: image,
        user_id: username,
      });
    } else {
      //  const { name, phone, image, username } = obj;
      //  Profile = await axios.post("/api/profile/chef", {
      //    name: name,
      //    mobile: phone,
      //    profile_image: image,
      //    user_id: username,
      //  });
    }
    if (Profile.status === 200) return { data: Profile.data, status: 200 };
  } catch (err) {
    return { err: err.response.data, status: err.response.status };
  }
};
