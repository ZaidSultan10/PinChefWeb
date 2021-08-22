import axios from "axios";
const AuthSignIN = async ({ email, password, userType }) => {
  try {
    const user = await axios.post("/api/auth", {
      email,
      password,
      userType,
    });
    if (user && user.status === 200) return { data: user.data, status: 200 };
  } catch (err) {
    return { err: err.response.data, status: err.response.status };
  }
};
export default AuthSignIN;
