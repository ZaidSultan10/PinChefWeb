import "./UserOnBoarding.css";
import Header from "../../components/header/Header";
import Carousel from "react-elastic-carousel";
import Users from "./UserData";
import CarouselDiv from "../../components/carouselDiv/carouselDiv";
import Chefs from "./ChefData";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
const UserOnBoarding = ({ currentUser }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2, itemsToScroll: 2 },
    { width: 780, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1024, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 4 },
  ];
  let history = useHistory();
  return (
    <div className="UserOnboarding-Page">
      <Header />
      <div className="UserOnboarding-Body">
        <Carousel
          className="UserOnboarding-Carousel"
          breakPoints={breakPoints}
          showArrows={false}
          itemsToShow={4}
          enableMouseSwipe={true}
          enableAutoPlay={true}
          initialActiveIndex={0}
          focusOnSelect={true}
          pagination={true}
          autoPlaySpeed={10000}
          easing="cubic-bezier(1,.15,.55,1.54)"
        >
          {Users.map(({ title, text, classNames, image }) => {
            return (
              <CarouselDiv
                key={title}
                carosalClass={classNames}
                img={image}
                title={title}
                text={text}
              />
            );
          })}
          {Chefs.map(({ title, text, classNames, image }) => {
            return (
              <CarouselDiv
                key={title}
                carosalClass={classNames}
                img={image}
                title={title}
                text={text}
              />
            );
          })}
        </Carousel>
        <div className="UserOnboarding-NavigationBtn">
          <button
            type="button"
            onClick={() => {
              if (currentUser && currentUser.status === "active") {
                history.push("/homepage");
              } else if (currentUser && currentUser.status === "pending") {
                history.push("/verification");
              } else {
                history.push("/sigin");
              }
            }}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(UserOnBoarding);
