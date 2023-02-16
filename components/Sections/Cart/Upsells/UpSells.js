import React, { createRef, useRef } from "react";
import BestProducts from "../../home/bestProducts/BestProducts";
import UpSellsHeader from "./UpSellsHeader";
import UpSellsSlider from "./UpSellsSlider";

const UpSells = (props) => {
  const sliderRef = useRef(null);

  const next = () => sliderRef.slickNext();

  return (
    <div className="col-lg-6 andro_upsells">
      {/* <UpSellsHeader test={next} /> */}
      {/* <UpSellsSlider ref={sliderRef} /> */}
      <BestProducts />
    </div>
  );
};

export default UpSells;
