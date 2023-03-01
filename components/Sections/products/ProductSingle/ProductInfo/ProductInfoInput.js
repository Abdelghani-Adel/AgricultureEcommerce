import { Fragment, useEffect, useState } from "react";
import { withTranslation } from "react-multi-lang";
import ProductGifts from "./ProductGifts";
import QuantityInput from "./QuantityInput";
import UnitOfMeasure from "./Uom";

const offers = [
  {
    Range: "من 10 لتر إلي 100 لتر",
    From: 10,
    To: 50,
    Free: 50,
    Product: "product",
    UOM: "Litre",
  },
  {
    Range: "من 101 جالون الي 500 جالون",
    From: 101,
    To: 500,
    Free: 100,
    Product: "product",
    UOM: "Litre",
  },
  {
    Range: "من 501 حبة الي 1000 حبة",
    From: 501,
    To: 1000,
    Free: 200,
    Product: "product",
    UOM: "Litre",
  },
];

const ProductInfoInput = (props) => {
  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(props.item);
  const [freeProducts, setFreeProducts] = useState(0);

  useEffect(() => {
    setItem(props.item);
  }, [props.item]);

  useEffect(() => {
    setQuantity(props.quantity);

    if (item.gifts && item.gifts.length > 0) {
      item.gifts.forEach((gift) => {
        if (props.quantity >= gift.From && props.quantity <= gift.To) {
          setFreeProducts(gift.Free);
        }
      });
    }
  }, [props.quantity]);

  return (
    <div className="productInfoInput">
      <div className="row mb-2">
        <div className="col-6 col-lg-4 col-xl-3">
          <QuantityInput quantityHandler={props.quantityHandler} quantity={quantity} />
        </div>
        <div className="col-6 col-lg-4 col-xl-3">
          <UnitOfMeasure item={item} UOMchangeHandler={props.UOMchangeHandler} />
        </div>
        <div className="col-6 col-lg-4 col-xl-3">
          <h6 className="txt-primary mt-2 mb-2">{props.t("Products.FreeProducts")} : {freeProducts}</h6>
        </div>
        <div className="col-6 col-lg-4 col-xl-3">
          <h5 className="mt-2 mb-2 fw-bold">{props.t("Cart.Total")} : {props.quantity * item.Price}</h5>
        </div>
      </div>
      {item.gifts && item.gifts.length > 0 && <ProductGifts {...props} gifts={item.gifts} />}
    </div>
  );
};

export default  withTranslation(ProductInfoInput);
