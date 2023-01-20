import React from "react";
import { withTranslation } from "react-multi-lang";
import Slider from "react-slick";
import shop from "../../../../data/shop.json";
import UpSellProductFooter from "./UpSellProductFooter";
import UpSellProductPrice from "./UpSellProductPrice";
import UpSellProductRating from "./UpSellProductRating";
import UpSellProductThumbnail from "./UpSellProductThumbnail";
import UpSellProductTitle from "./UpSellProductTitle";

const UpSellsSlider = React.forwardRef((props, ref) => {
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    initialSlide: 1,
  };

  const poductsWrapperSytle =
    "andro_product andro_product-list andro_product-has-controls andro_product-has-buttons d-block d-sm-flex";

  return (
    <Slider className="andro_upsells-slider" {...sliderSettings} ref={ref}>
      {shop.map((item) => (
        <div key={item.id} className={poductsWrapperSytle}>
          <UpSellProductThumbnail item={item} />

          <div className="andro_product-body">
            <UpSellProductRating rating={item.rating} />
            <UpSellProductTitle itemID={item.id} itemTitle={item.title} />
            <UpSellProductPrice item={item} />
            <p>{item.shortdesc}</p>
          </div>

          <UpSellProductFooter itemID={item.id} />
        </div>
      ))}
    </Slider>
  );
});

export default withTranslation(UpSellsSlider);
