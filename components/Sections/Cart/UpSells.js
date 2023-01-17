import React from "react";
import UpSellsHeader from "./UpSellsHeader";
import UpSellsProductsSlider from "./UpSellsProductsSlider";

const UpSells = (props) => {
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    // autoplay: true,
  };

  return (
    <div className="col-lg-6 andro_upsells">
      <UpSellsHeader />
      <UpSellsProductsSlider />
    </div>
  );
};

export default UpSells;
