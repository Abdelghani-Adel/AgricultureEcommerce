import { Fragment } from "react";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";

const ProductInfoHeader = ({ item }) => {
  return (
    <Fragment>
      <h3 className="mt-3">{item.Item_Name}</h3>
      <ProductRating rating={item.rating} />
      <ProductPrice price={item.Price} />
    </Fragment>
  );
};

export default ProductInfoHeader;
