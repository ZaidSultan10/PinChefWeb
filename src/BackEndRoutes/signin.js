import axios from "axios";
const AuthSignIN = async ({ email, password, userType }) => {
  try {
    const user = await axios.post("http://localhost:5000/api/auth", {
      email,
      password,
      userType,
    });
    console.log(user);
    if (user && user.status === 200)
      return { data: user.data.user, status: 200 };
  } catch (err) {
    return { err: err.response.data, status: err.response.status };
  }
};
export default AuthSignIN;
