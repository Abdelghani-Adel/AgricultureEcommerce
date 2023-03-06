import { useSession } from "next-auth/react";
import React, { useCallback, useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCartItemInCookie,
  deleteCartItemInCookie,
  increaseCartItemInCookie,
} from "../../../../helper/Cookies/CarCookies";
import { cartActions, deleteItem, editCart } from "../../../../redux/slices/cartSlice";
import Image from "next/image";

const CartItem = (props) => {
  const { item } = props;
  const session = useSession();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const [itemChecked, setItemChecked] = useState(false);

  useEffect(() => {
    // get the array of checkedItems to see if this item is checked
    const checkedItemsArray = cartState.checkedCartItems;
    const itemIsChecked = checkedItemsArray.findIndex(
      (checkedItem) => checkedItem.Item_Id == item.Item_Id
    );

    // if the item exist in the array of checkedItems, update the state
    if (itemIsChecked != -1) {
      setItemChecked(true);
    }
  }, []);

  const increaseItem = useCallback(() => {
    // If the user increase the item while he is not logged in
    if (session.status != "authenticated") {
      increaseCartItemInCookie(item);
      return;
    }

    // Prepare the payload to be sent to the reduxThunk if the user is logged in
    const payload = {
      action: "plus",
      item: item,
    };
    dispatch(editCart(payload));
  });

  const decreaseItem = useCallback(() => {
    // If the user decrease the item while he is not logged in
    if (session.status != "authenticated") {
      decreaseCartItemInCookie(item);
      return;
    }

    // If the user decreases the item with Qty = 1, show notification

    // Prepare the payload to be sent to the reduxThunk if the user is logged in
    const payload = {
      action: "minus",
      item: item,
    };
    dispatch(editCart(payload));
  });

  const deleteItemHandler = useCallback(() => {
    // If the user delete from the cart while he is not logged in
    if (session.status != "authenticated") {
      deleteCartItemInCookie(item);
      return;
    }

    // If the user delete from the cart while he is logged in
    dispatch(deleteItem(item));
  });

  const checkItemHandler = useCallback((e) => {
    if (e.target.checked) {
      setItemChecked(true);
      dispatch(cartActions.checkCartItem(item));
    } else {
      setItemChecked(false);
      dispatch(cartActions.unCheckCartItem(item));
    }
  });

  return (
    <tr>
      <td>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            onChange={checkItemHandler}
            checked={itemChecked}
          />
          {/* <label className="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label> */}
        </div>
      </td>
      <td className="remove">
        <button
          type="button"
          className="close-btn close-danger remove-from-cart"
          onClick={deleteItemHandler}
          aria-label="Remove"
        >
          <span />
          <span />
        </button>
      </td>
      <td data-title="Product">
        <div className="andro_cart-product-wrapper">
          {item.Item_Image && (
            <div className="position-relative">
              <Image
                className="category_icon"
                src={`${item.Item_Image}`}
                alt="Cart Item"
                width={50}
                height={100}
              />
            </div>
          )}
          <div className="andro_cart-product-body">
            <h6>{item.Item_Name}</h6>
            {/* <p>
              {item.Qty} {item.UOM_Name}
            </p> */}
          </div>
        </div>
      </td>
      <td data-title="Price">
        <strong>
          {new Intl.NumberFormat().format(item.UnitPrice.toFixed(2))}{" "}
          {cartState.currency && cartState.currency.CurrBaseCode}
        </strong>
      </td>
      <td className="quantity" data-title="Quantity">
        <div className="d-flex justify-content-between align-items-center">
          <span>{item.Qty}</span>
          <span className="d-flex flex-column">
            <button
              className="btn btn-success bg_primary m-1"
              onClick={increaseItem}
              aria-label="Increase"
            >
              <FaAngleUp />
            </button>
            <button
              className="btn btn-success bg_primary m-1"
              onClick={decreaseItem}
              aria-label="Decrease"
            >
              <FaAngleDown />
            </button>
          </span>
        </div>
      </td>
      <td data-title="Total">
        <strong>
          {new Intl.NumberFormat().format((item.Qty * item.UnitPrice).toFixed(2))}{" "}
          {cartState.currency && cartState.currency.CurrBaseCode}
        </strong>
      </td>
    </tr>
  );
};

export default withTranslation(CartItem);
