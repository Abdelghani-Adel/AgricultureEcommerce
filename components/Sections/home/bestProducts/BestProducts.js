import React, { Fragment } from "react";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductSlider from "../../../layout/Reusable/ProductSlider";

const BestProducts = () => {
  const products = useSelector((state) => state.products.bestProducts);

  return (
    <Fragment>
      {products.length > 0 && (
        <ProductSlider
          translateTitle={"Products.BestProducts"}
          products={products}
          slidesToShow={4}
        />
      )}
    </Fragment>
  );
};

export default withTranslation(BestProducts);
