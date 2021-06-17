import "./carouselDiv.css";

const CarouselDiv = ({ carosalClass, img, title, text }) => {
  return (
    <div className={`carousel-div ${carosalClass}`}>
      <div className="carousel-div-img">
        <img src={img} alt={`${title}`} />
      </div>
      <div className="carousel-div-content">
        <strong>{text}</strong>
      </div>
    </div>
  );
};
export default CarouselDiv;
