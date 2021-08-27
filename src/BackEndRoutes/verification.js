import axios from "axios";
export const verifyUser = async (id, confirmationCode) => {
  try {
    const message = await axios.post(
      `http://localhost:5000/api/user/confirm/${id}/${confirmationCode}`
    );
    if (message.status === 200) return { data: message.data, status: 200 };
  } catch (err) {
    return { err: err.response.data, status: err.response.status };
  }
};
export const getVerificationCode = async (id) => {
  try {
    const message = await axios.post(
      `http://localhost:5000/api/user/${id}/confirmationCode`
    );
    if (message.status === 200) return { data: message.data, status: 200 };
  } catch (err) {
    return { err: err.response.data, status: err.response.status };
  }
};
