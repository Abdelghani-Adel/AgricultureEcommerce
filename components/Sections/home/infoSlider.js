import React from "react";
import Slider from "react-slick";
const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  dotsClass: "slick-dots d-flex",
  autoplay: true,
};

export default function InfoSlider() {
  return (
    <Slider className="andro_banner-slider" {...settings}>
      <div
        style={{
          backgroundImage: `url(../public/img/slider_01.jpg)`,
          backgroundImage: `url(https://plasticseurope.org/wp-content/uploads/2021/10/5.6._aaheader.png)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <h3>1</h3>
        <img src="https://plasticseurope.org/wp-content/uploads/2021/10/5.6._aaheader.png" />
      </div>
      <div
        style={{
          backgroundImage: `url(../public/img/slider_02.jpg)`,
          // backgroundImage: `url(${externalImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <h3>2</h3>
        {/* <img src="../img/slider_02.jpg"/> */}
      </div>
    </Slider>
  );
}
