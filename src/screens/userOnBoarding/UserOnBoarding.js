import "./UserOnBoarding.css";
import Header from "../../components/header/Header";
import Carousel from "react-elastic-carousel";
import Users from "./UserData";
import CarouselDiv from "../../components/carouselDiv/carouselDiv";
import Chefs from "./ChefData";

const UserOnBoarding = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1024, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 2 },
  ];
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
        >
          {Users.map(({ title, text, classNames, image }) => {
            return (
              <CarouselDiv
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
                carosalClass={classNames}
                img={image}
                title={title}
                text={text}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
export default UserOnBoarding;
