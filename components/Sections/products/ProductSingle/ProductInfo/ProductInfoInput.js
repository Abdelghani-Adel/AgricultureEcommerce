import { Fragment } from "react";
import ProductInfoTotals from "./ProductInfoTotals";
import QuantityInput from "./QuantityInput";
import UnitOfMeasure from "./Uom";

const ProductInfoInput = (props) => {
  return (
    <Fragment>
      <div className="d-flex justify-content-around g-4">
        <QuantityInput quantityHandler={props.quantityHandler} quantity={props.quantity} />
        <UnitOfMeasure item={props.item} UOMchangeHandler={props.UOMchangeHandler} />
        <ProductInfoTotals quantity={props.quantity} price={props.item.Price} />
      </div>
      <div></div>
    </Fragment>
  );
};

export default ProductInfoInput;
