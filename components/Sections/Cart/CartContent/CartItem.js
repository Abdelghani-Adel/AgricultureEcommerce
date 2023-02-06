import React, { useCallback } from "react";
import Link from "next/Link";
import { withTranslation } from "react-multi-lang";
import { useDispatch } from "react-redux";
import { deleteItem, editCart } from "../../../../redux/slices/cartSlice";
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from "react-icons/fa";

const CartItem = (props) => {
  const { item } = props;
  const dispatch = useDispatch();

  const increaseItem = useCallback((e) => {
    const payload = {
      action: "plus",
      item: item,
    };
    dispatch(editCart(payload));
  });

  const decreaseItem = useCallback(() => {
    const payload = {
      action: "minus",
      item: item,
    };

    dispatch(editCart(payload));
  });

  const deleteItemHandler = useCallback((e) => {
    dispatch(deleteItem(item));
    return;
  });
  return (
    <tr>
      <td className="remove">
        <button
          type="button"
          className="close-btn close-danger remove-from-cart"
          onClick={deleteItemHandler}
        >
          <span />
          <span />
        </button>
      </td>
      <td data-title="Product">
        <div className="andro_cart-product-wrapper">
          <img src={item.img} alt={item.Item_Name} />
          <div className="andro_cart-product-body">
            <h6>
              <Link href="#">{item.Item_Name}</Link>
            </h6>
            <p>
              {item.Qty} {item.UOM_Name}
            </p>
          </div>
        </div>
      </td>
      <td data-title="Price">
        <strong>{new Intl.NumberFormat().format(item.UnitPrice.toFixed(2))}$</strong>
      </td>
      <td className="quantity" data-title="Quantity">
        <div className="d-flex justify-content-between align-items-center">
          <span>{item.Qty}</span>
          <span className="d-flex flex-column">
            <button className="btn btn-success m-1" onClick={increaseItem}>
              <FaAngleUp />
            </button>
            <button className="btn btn-success m-1" onClick={decreaseItem}>
              <FaAngleDown />
            </button>
          </span>
        </div>
      </td>
      <td data-title="Total">
        <strong>{new Intl.NumberFormat().format((item.Qty * item.UnitPrice).toFixed(2))}$</strong>
      </td>
    </tr>
  );
};

export default withTranslation(CartItem);
