import axios from "axios";
export const verifyUser = async (id) => {
  const message = await axios.post(`/api/user/confirm/${id}/:confirmationCode`);
  if (message.status === 200) return { data: message.data, status: 200 };
  // let error:
  return { err: "Something went wrong", status: 400 };
};
export const getVerificationCode = async (id) => {
  const message = await axios.post(`/api/user/${id}/ConfirmationCode`);
  if (message.status === 200) return { data: message.data, status: 200 };
  // let error:
  return { err: "Something went wrong", status: 400 };
};
