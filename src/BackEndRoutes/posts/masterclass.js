import axios from "axios";
export const createMasterclass = async (obj) => {
  try {
    const {
      imageUpload,
      masterclassTitle,
      cuisine,
      dietType,
      description,
      ingredients,
      classVideoType,
      startDate,
      startTime,
      classDuration,
      masterclassLocation,
      ticketNumber,
      ticketPrice,
      getNotify,
    } = obj;
    const post = await axios.post("/api/masterclass/", {
      media: imageUpload,
      title: masterclassTitle,
      cuisine: cuisine,
      dietary: dietType,
      description: description,
      ingredients: ingredients,
      classVideoType: classVideoType,
      start_date: startDate,
      start_time: startTime,
      class_duration: classDuration,
      location: masterclassLocation,
      ticket_group_number: ticketNumber,
      price: ticketPrice,
      notification: getNotify,
    });

    if (post.status === 200)
      return { message: post.data.message, data: post.data.post, status: 200 };
  } catch (err) {
    return { err: err.response.data, status: err.response.status };
  }
};
