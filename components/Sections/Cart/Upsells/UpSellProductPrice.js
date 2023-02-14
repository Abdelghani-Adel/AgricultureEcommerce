import { useSelector } from "react-redux";

const UpSellProductPrice = (props) => {
  const { item } = props;
  const cartState = useSelector((state) => state.cart);
  return (
    <div className="andro_product-price">
      {item.discount > 0 || item.discount !== "" ? (
        <span>
          {new Intl.NumberFormat().format(((item.price * (100 - item.discount)) / 100).toFixed(2))}{" "}
          {cartState.currency && cartState.currency.CurrBaseCode}
        </span>
      ) : (
        ""
      )}
      <span>
        {new Intl.NumberFormat().format(item.price.toFixed(2))}{" "}
        {cartState.currency && cartState.currency.CurrBaseCode}
      </span>
    </div>
  );
};

export default UpSellProductPrice;
