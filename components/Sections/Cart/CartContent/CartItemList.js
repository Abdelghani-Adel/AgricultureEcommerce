import { Fragment } from "react";
import CartItem from "./CartItem";

const CartItemList = (props) => {
  return (
    <Fragment>
      {props.cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </Fragment>
  );
};

export default CartItemList;
