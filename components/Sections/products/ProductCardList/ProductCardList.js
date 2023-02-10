import { Fragment } from "react";
import ProductCard from "./ProductCard/ProductCard";

const ProductCardList = (props) => {
  const { products } = props;
  return (
    <Fragment>
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductCard key={index} product={product} style={"col-md-4 col-sm-6 col-xs-12"} />
        ))
      ) : (
        <h1 className="text-center m-4">No Products Found !</h1>
      )}
    </Fragment>
  );
};

export default ProductCardList;
