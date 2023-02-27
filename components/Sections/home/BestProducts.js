import React from "react";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductSlider from "../../Reusable_Components/Sliders/ProductSlider";

const BestProducts = ({ order, cards_in_slide }) => {
  const products = useSelector((state) => state.products.bestProducts);

  return (
    <div className="col-12 section" style={{ order: `${order}` }}>
      {products && products.length > 0 && (
        <ProductSlider
          translateTitle={"Products.BestProducts"}
          products={products}
          slidesToShow={cards_in_slide}
        />
      )}
    </div>
  );
};

export default withTranslation(BestProducts);
