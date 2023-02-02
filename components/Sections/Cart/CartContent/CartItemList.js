import { Fragment } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItemList = () => {
  const cartState = useSelector((state) => state.cart);
  return (
    <Fragment>
      {cartState.items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </Fragment>
  );
};

export default CartItemList;
