import React from "react";
import UpSellsHeader from "./UpSellsHeader";
import Slider from "react-slick";
import UpSellsProducts from "./UpSellsProducts";

const UpSells = (props) => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
  };

  return (
    <div className="col-lg-6 andro_upsells">
      <UpSellsHeader />
      <Slider
        className="andro_upsells-slider"
        // ref={(c) => (this.slider = c)}
        {...settings}
      >
        {/* Product Start */}
        <UpSellsProducts />
      </Slider>
    </div>
  );
};

export default UpSells;
