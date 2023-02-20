import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchBestProducts } from "../../../../services/productServices";
import ProductSlider from "../../../layout/Reusable/ProductSlider";
import BestProducts from "../../home/bestProducts/BestProducts";

const UpSells = (props) => {
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
    <div className="col-lg-6 andro_upsells">
      {products && products.length > 0 && (
        <ProductSlider
          translateTitle={"Products.BestProducts"}
          products={products}
          slidesToShow={2}
        />
      )}
    </div>
  );
};

export default UpSells;
