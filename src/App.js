import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomeFeed from "./screens/homefeedScreen/HomeFeed";
import UserOnBoarding from "./screens/userOnBoarding/UserOnBoarding";
import HomeRecipe from "./screens/homeRecipeScreen/HomeRecipe";
import HomeFeedMasterclass from "./screens/homeFeedMasterclass/HomeFeedMasterclass";
import UserAllChef from "./screens/userAllChefsScreen/UserAllChef";
import UserFollowedChef from "./screens/userFollowedChef/UserFollowedChef";
import UserShopFood from "./screens/userShopFood/UserShopFood";
import UserShopService from "./screens/userShopService/UserShopService";
import StarHomeFeed from "./screens/starHomeFeed/StarHomeFeed";
import StarFeedRecipe from "./screens/starFeedRecipe/StarFeedRecipe";
import StarFoodService from "./screens/starFoodService/StarFoodService";
import UserMyPurchases from "./screens/userMyPurchases/UserMyPurchases";
import Settings from "./screens/settings/Settings";
import ChefProfile from "./screens/chefProfile/ChefProfile";
import UserChatScreen from "./screens/userChatScreen/UserChatScreen";
import ChefFeedAll from "./screens/chefFeedAll/ChefFeedAll";
import ChefCreatePost from "./screens/chefCreatePost/ChefCreatePost";
import ChefFeedRecipe from "./screens/chefFeedRecipe/ChefFeedRecipe";
import ChefCreateRecipe from "./screens/chefCreateRecipe/ChefCreateRecipe";
import ChefCreateFood from "./screens/chefCreateFood/ChefCreateFood";
import ChefCreateFoodPost from "./screens/chefCreateFoodPost/ChefCreateFoodPost";
import ChefFeedService from "./screens/chefFeedService/ChefFeedService";
import ChefCreateService from "./screens/chefCreateService/ChefCreateService";
import ChefFeedMasterclass from "./screens/chefFeedMasterclass/ChefFeedMasterclass";
import ChefCreateMasterclass from "./screens/chefCreateMasterclass/ChefCreateMasterclass";
import ChefSettings from "./screens/chefSettings/ChefSettings";
import ChefMainProfile from "./screens/chefMainProfile/ChefMainProfile";
import ChefAccountSubscription from "./screens/chefAccountSubscription/ChefAccountSubscription";
import ChefMasterclassCheckout from "./screens/chefMasterclassCheckout/ChefMasterclassCheckout";
import ServiceCookLiveCheckout from "./screens/serviceCookLiveCheckout/ServiceCookLiveCheckout";
import ChefCookGuest from "./screens/chefCookGuest/ChefCookGuest";
import ChefCookOnLocation from "./screens/chefCookOnLocation/ChefCookOnLocation";
import ChefCookTakeout from "./screens/chefCookTakeout/ChefCookTakeout";
import ChefCookShip from "./screens/chefCookShip/ChefCookShip";
import ChefCookDelivery from "./screens/chefCookDelivery/ChefCookDelivery";
import UserOtp from "./screens/userOtp/UserOtp";
import UserForgotPassword from "./screens/userForgotPassword/UserForgotPassword";
import UserResetPassword from "./screens/userResetPassword/UserResetPassword";
import UserProfileSet from "./screens/userProfileSet/UserProfileSet";
import UserCommentScreen from "./screens/userCommentScreen/UserCommentScreen";
import CallScreen from "./screens/callScreen/CallScreen";
import UserRecipeDetails from "./screens/userRecipeDetails/UserRecipeDetails";
import RateReviewForm from "./screens/rateReviewForm/RateReviewForm";
import RateScreen from "./screens/rateScreen/RateScreen";
import SettingsProfile from "./screens/settingsProfile/SettingsProfile";
import MyChatScreen from "./screens/myChatsScreen/MyChatScreen";
import OrderDetails from "./screens/orderDetails/OrderDetails";
import OrderHistory from "./screens/orderHistory/OrderHistory";
import OrderNotifications from "./screens/orderNotifications/OrderNotifications";
import ContactUs from "./screens/contatcUs/ContactUs";
import ChefPayments from "./screens/chefPayments/ChefPayments";
import ChefPaymentMethods from "./screens/chefPaymentMethods/ChefPaymentMethods";
import FoodEmergencyHelp from "./screens/foodEmergencyHelp/FoodEmergencyHelp";
import FoodEmergencyOrder from "./screens/foodEmergencyOrder/FoodEmergencyOrder";
import FoodCheckoutTakeaway from "./screens/foodCheckoutTakeaway/FoodCheckoutTakeaway";
import CreateChefFeedMYPosts from "./screens/createChefFeedMyPosts/CreateChefFeedMYPosts";
import CreateFoodMyPost from "./screens/createFoodMyPost/CreateFoodMyPost";
import OrderHistoryServices from "./screens/orderHistoryServices/OrderHistoryServices";
import ChefOrderHistoryMyPurchases from "./screens/chefOrderHistoryMyPurchases/ChefOrderHistoryMyPurchases";
import OrderHistoryMasterclass from "./screens/orderHistoryMasterclass/OrderHistoryMasterclass";
import ChefRateArea from "./screens/chefRateArea/ChefRateArea";
import ChefRateReviewSaved from "./screens/chefRateReviewSaved/ChefRateReviewSaved";
import PaymentPolicy from "./screens/paymentPolicy/PaymentPolicy";
import ChefRateReviewSavedRecipe from "./screens/chefRateReviewSavedRecipe/ChefRateReviewSavedRecipe";
import ChefRateReviewFoodService from "./screens/chefRateReviewFoodService/ChefRateReviewFoodService";
import ChefRateReviewSavedChefs from "./screens/chefRateReviewSavedChefs/ChefRateReviewSavedChefs";
import ChefSideAllChefs from "./screens/chefSideAllChefs/ChefSideAllChefs";
import CreateRecipeMyPost from "./screens/createRecipeMyPost/CreateRecipeMyPost";
import CreateServiceMyPost from "./screens/createServiceMyPost/CreateServiceMyPost";
import CreateMasterclassMyPost from "./screens/CreateMasterclassMyPost/CreateMasterclassMyPost";
import Faq from "./screens/faq/Faq";
import ChefFaq from "./screens/chefFaq/ChefFaq";
import TermsUser from "./screens/termsUser/TermsUser";
import TermsChef from "./screens/termsChef/TermsChef";
import ChefProfileUser from "./screens/chefProfileUser/ChefProfileUser";
import UserFollowedChefs from "./screens/userFollowedChefs/UserFollowedChefs";
import SettingsProfileUser from "./screens/settingsProfileUser/SettingsProfileUser";
import ChefProfileDetails from "./screens/chefProfileDetails/ChefProfileDetails";
import Notifications from "./screens/notifications/Notifications";
import NotificationsUser from "./screens/notificationsUser/NotificationsUser";
import Cart from "./screens/cart/Cart";
import CallHistory from "./screens/callHistory/CallHistory";
import { connect } from "react-redux";
import SignIn from "./screens/signin/signin";
import SignUp from "./screens/signup/signup";
import Sneakbar from "./components/sneakbarComponent/Sneakbar";
// This is for test (We will remove it later)
import { io } from "socket.io-client";
function App({ currentUser }) {
  useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((txt) => console.log(txt))
      .catch((err) => console.log(err));
    io("ws://localhost:5000");
  });

  return (
    <div className="App">
      <Sneakbar />
      <Router>
        <Switch>
          <Route path="/" exact component={UserOnBoarding} />
          <Route
            path="/signin"
            exact
            render={() =>
              currentUser ? <Redirect to="/verification" /> : <SignIn />
            }
          />
          <Route
            path="/signup"
            exact
            render={() =>
              currentUser ? <Redirect to="/verification" /> : <SignUp />
            }
          />
          <Route
            path="/verification"
            exact
            render={() =>
              currentUser && currentUser.status === "pending" ? (
                <UserOtp />
              ) : currentUser && currentUser.status === "active" ? (
                <Redirect to="/home" />
              ) : (
                <Redirect to="/signup" />
              )
            }
          />
          {currentUser && currentUser.status === "active" ? (
            <Route path="/home" exact component={HomeFeed} />
          ) : currentUser && currentUser.status === "pending" ? (
            <Redirect to="/verification" />
          ) : (
            <Redirect to="/signup" />
          )}
          {/* <Route path="/home" exact component={HomeFeed} /> */}
          <Route path="/home/recipe" exact component={HomeRecipe} />
          <Route
            path="/home/masterclass"
            exact
            component={HomeFeedMasterclass}
          />
          <Route path="/user/all-chef" exact component={UserAllChef} />
          <Route
            path="/user/followed-chef"
            exact
            component={UserFollowedChefs}
          />
          <Route path="/chef/all-chef" exact component={ChefSideAllChefs} />
          <Route
            path="/chef/followed-chef"
            exact
            component={UserFollowedChef}
          />
          <Route path="/shop/food" exact component={UserShopFood} />
          <Route path="/shop/service" exact component={UserShopService} />
          <Route path="/star/feed" exact component={StarHomeFeed} />
          <Route path="/star/recipe" exact component={StarFeedRecipe} />
          <Route path="/star/food-service" exact component={StarFoodService} />
          <Route path="/star/my-purchases" exact component={UserMyPurchases} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/chef/profile" exact component={ChefProfile} />
          <Route path="/user/chef/profile" exact component={ChefProfileUser} />
          <Route path="/chat/newchat" exact component={UserChatScreen} />
          <Route path="/chef/home/feed" exact component={ChefFeedAll} />
          <Route
            path="/chef/home/create-post"
            exact
            component={ChefCreatePost}
          />
          <Route path="/chef/home/recipe" exact component={ChefFeedRecipe} />
          <Route
            path="/chef/home/create-recipe"
            exact
            component={ChefCreateRecipe}
          />
          <Route path="/chef/home/food" exact component={ChefCreateFood} />
          <Route
            path="/chef/home/create-food"
            exact
            component={ChefCreateFoodPost}
          />
          <Route path="/chef/home/service" exact component={ChefFeedService} />
          <Route
            path="/chef/home/create-service"
            exact
            component={ChefCreateService}
          />
          <Route
            path="/chef/home/masterclass"
            exact
            component={ChefFeedMasterclass}
          />
          <Route
            path="/chef/home/create-masterclass"
            exact
            component={ChefCreateMasterclass}
          />
          <Route path="/chef/settings" exact component={ChefSettings} />
          <Route
            path="/chef/create-profile"
            exact
            component={ChefMainProfile}
          />
          <Route
            path="/chef/profile-details"
            exact
            component={ChefProfileDetails}
          />
          <Route
            path="/chef/settings/subscription"
            exact
            component={ChefAccountSubscription}
          />
          <Route
            path="/chef/masterclass/checkout"
            exact
            component={ChefMasterclassCheckout}
          />
          <Route
            path="/chef/service/live"
            exact
            component={ServiceCookLiveCheckout}
          />
          <Route path="/chef/service/guest" exact component={ChefCookGuest} />
          <Route
            path="/chef/service/location"
            exact
            component={ChefCookOnLocation}
          />
          <Route
            path="/chef/service/takeout"
            exact
            component={ChefCookTakeout}
          />
          <Route path="/chef/service/shipping" exact component={ChefCookShip} />
          <Route
            path="/chef/service/delivery"
            exact
            component={ChefCookDelivery}
          />

          <Route
            path="/user/forgot-password"
            exact
            component={UserForgotPassword}
          />
          <Route
            path="/user/reset-password"
            exact
            component={UserResetPassword}
          />
          <Route path="/user/set-profile" exact component={UserProfileSet} />
          <Route path="/user/comments" exact component={UserCommentScreen} />
          <Route path="/call" exact component={CallScreen} />
          <Route
            path="/user/recipe/details"
            exact
            component={UserRecipeDetails}
          />
          <Route path="/review/form" exact component={RateReviewForm} />
          <Route path="/rate" exact component={RateScreen} />
          <Route path="/chef/rate" exact component={ChefRateArea} />
          <Route
            path="/chef/review/saved"
            exact
            component={ChefRateReviewSaved}
          />
          <Route
            path="/chef/review/saved/recipe"
            exact
            component={ChefRateReviewSavedRecipe}
          />
          <Route
            path="/chef/review/saved/food-service"
            exact
            component={ChefRateReviewFoodService}
          />
          <Route
            path="/chef/review/saved/chefs"
            exact
            component={ChefRateReviewSavedChefs}
          />
          <Route
            path="/chef/settings/profile"
            exact
            component={SettingsProfile}
          />
          <Route
            path="/user/settings/profile"
            exact
            component={SettingsProfileUser}
          />
          <Route path="/chef/chats" exact component={MyChatScreen} />
          <Route path="/chef/order-details" exact component={OrderDetails} />
          <Route path="/chef/order-history" exact component={OrderHistory} />
          <Route
            path="/chef/order-history/services"
            exact
            component={OrderHistoryServices}
          />
          <Route
            path="/chef/order-history/e-masterclass"
            exact
            component={OrderHistoryMasterclass}
          />
          <Route
            path="/chef/order-history/my-purchases"
            exact
            component={ChefOrderHistoryMyPurchases}
          />
          <Route
            path="/chef/order-notifications"
            exact
            component={OrderNotifications}
          />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/payments" exact component={ChefPayments} />
          <Route path="/payment/methods" exact component={ChefPaymentMethods} />
          <Route
            path="/food-emergency/help"
            exact
            component={FoodEmergencyHelp}
          />
          <Route
            path="/food-emergency/order"
            exact
            component={FoodEmergencyOrder}
          />
          <Route
            path="/food/checkout/takeaway"
            exact
            component={FoodCheckoutTakeaway}
          />
          <Route
            path="/chef/home/my-posts"
            exact
            component={CreateChefFeedMYPosts}
          />
          <Route
            path="/chef/food/my-posts"
            exact
            component={CreateFoodMyPost}
          />
          <Route
            path="/chef/recipe/my-posts"
            exact
            component={CreateRecipeMyPost}
          />
          <Route
            path="/chef/service/my-posts"
            exact
            component={CreateServiceMyPost}
          />
          <Route
            path="/chef/masterclass/my-posts"
            exact
            component={CreateMasterclassMyPost}
          />
          <Route path="/payment-policy" exact component={PaymentPolicy} />
          {/* currentUser ? <Redirect to="/verification" /> : <ChefSignUp /> */}

          <Route path="/user/faq" exact component={Faq} />
          <Route path="/chef/faq" exact component={ChefFaq} />
          <Route path="/user/terms" exact component={TermsUser} />
          <Route path="/chef/terms" exact component={TermsChef} />
          <Route path="/chef/notifications" exact component={Notifications} />
          <Route
            path="/user/notifications"
            exact
            component={NotificationsUser}
          />
          <Route path="/cart" exact component={Cart} />
          <Route path="/call/history" exact component={CallHistory} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(App);
