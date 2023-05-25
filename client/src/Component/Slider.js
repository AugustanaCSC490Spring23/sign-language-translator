import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar from "../assets/Viet-ava.png";
import trophy from "../assets/trophy.png";
import { Button, Image } from "react-bootstrap";
import { useRef } from "react";

const images = [trophy, trophy, trophy, avatar, avatar];

const imageStyle = {
  width: "9em",
  height: "9em",
  margin: "0.1em",
  borderRadius: "25%",
};

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
};

function ImageSlider() {
  const sliderRef = useRef(null);

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image} fluid style={imageStyle} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
