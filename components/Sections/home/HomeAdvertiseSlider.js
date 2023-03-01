import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  dotsClass: "slick-dots d-flex",
  // autoplay: true,
  variableWidth: true,
};

export default function HomeAdvertiseSlider() {
  return (
    <Slider className="advertise-slider d-none d-md-block" {...settings}>
      <div>
        <div className="advertise">
          <Image src="/img/agri_banner.png" alt="" fill />
        </div>
      </div>
      <div>
        <div className="advertise">
          <Image src="/img/slider.jpg" alt="" fill />
        </div>
      </div>
    </Slider>
  );
}
