import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Pic1 from "../../../public/img/agri_banner.png";
import Pic2 from "../../../public/img/slider.jpg";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  dotsClass: "slick-dots d-flex",
  autoplay: true,
  variableWidth: true,
};

export default function HomeAdvertiseSlider() {
  return (
    <Slider className="advertise-slider d-none d-md-block" {...settings}>
      <div>
        <div className="advertise position-relative">
          <Image src={Pic1} alt="Advertise" priority sizes="(min-width: 768px) 100vw, 100vw" />
        </div>
      </div>
      <div>
        <div className="advertise position-relative">
          <Image src={Pic2} alt="Advertise" sizes="(min-width: 768px) 100vw, 100vw" />
        </div>
      </div>
    </Slider>
  );
}
