import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}
const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  dotsClass: "slick-dots d-flex",
  autoplay: true,
  nextArrow: <SampleNextArrow />,
};

export default function HomeAdvertiseSlider() {
  return (
    <Slider className="andro_banner-slider" {...settings}>
      <div>
        <div className="advertise">
          <img src="https://www.egyptyello.com/img/cats/agriculture.jpg" alt="" />
        </div>
      </div>
      <div>
        <div className="advertise">
          <img
            src="http://nppindia.in/wp-content/uploads/2020/03/agriculture-banner-1a-min-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <div className="advertise">
          <img
            src="https://www.gisp-group.com/wp-content/uploads/2016/10/Agriculture-Banner.jpg"
            alt=""
          />
        </div>
      </div>
    </Slider>
  );
}
