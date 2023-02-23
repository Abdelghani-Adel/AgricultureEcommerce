import { useSelector } from "react-redux";

const ProductPrice = ({ price }) => {
  const cartState = useSelector((state) => state.cart);
  return (
    <div className="andro_product-price">
      {price} {cartState.currency && cartState.currency.CurrBaseCode}
    </div>
  );
};

export default ProductPrice;
