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
      Profile = await axios.post("/api/profile/chef", {
        firstName: obj.firstName,
        lastName: obj.lastName,
        user_id: obj.nickName,
        gender: obj.gender,
        dateOfBirth: new Date(`${obj.dobDate} ${obj.dobMonth} ${obj.dobYear}`),
        languages: obj.language,
        shortAdIntro: obj.shortAd,
        position: obj.position,
        fullBackgroundInfo: obj.backgroundInfo,
        serviceHour: obj.interested,
        location: obj.address,
        services: obj.provideService,
        locationYouGiveServiceTo: obj.serviceDelivery,
        paymentMethod: obj.acceptPayment,
        minimumPurchaseServiceTotalAmount: obj.minimumPurchase,
        servicePriceRangeMin: obj.min,
        servicePriceRangeMax: obj.max,
        hourlyRate: obj.hourlyRate,
        mobile: obj.phone,
        cuisineSpecialties: obj.addCuisines,
        profile_image: obj.imgg,
      });
    }
    if (Profile.status === 200) return { data: Profile.data.user, status: 200 };
  } catch (err) {
    return { err: err.response.data, status: err.response.status };
  }
};
