import React from "react";
import cart from "../../../data/cart.json";
import CartItem from "./CartItem";

const CartItemList = () => {
  return (
    <div className="section">
      <div className="container">
        <table className="andro_responsive-table">
          <thead>
            <tr>
              <th className="remove-item" />
              <th>Product</th>
              <th>Price</th>
              <th>Qunantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, i) => (
              <CartItem key={Math.random()} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItemList;
