import React, { Component, Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { fetchBestProducts } from "../../../../services/productServices";
import ProductSlider from "../../../layout/Reusable/ProductSlider";

const BestProducts = () => {
  const [products, setProducts] = useState([]);
  const lang = useSelector((state) => state.lang);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetchBestProducts(lang);
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <Fragment>
      {products && products.length > 0 && (
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
