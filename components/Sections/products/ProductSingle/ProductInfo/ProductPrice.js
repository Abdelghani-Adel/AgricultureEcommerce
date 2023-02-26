import { useSelector } from "react-redux";

const ProductPrice = ({ price }) => {
  const cartState = useSelector((state) => state.cart);
  return (
    <h4 className="txt-primary">
      {price} {cartState.currency && cartState.currency.CurrBaseCode}
    </h4>
  );
};

export default ProductPrice;
