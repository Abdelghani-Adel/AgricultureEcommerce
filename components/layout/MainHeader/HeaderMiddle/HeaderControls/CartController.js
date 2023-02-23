import Link from "next/Link";
import { FaShoppingBasket } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { loaderActions } from "../../../../../redux/slices/loaderSlice";

const CartController = () => {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const showLoader = () => {
    dispatch(loaderActions.showLoader());
  };
  return (
    <Link href="/cart" title="Cart" onClick={showLoader}>
      <FaShoppingBasket />
      <div className="ms-2 fs-800 d-none d-md-block">
        <span>
          {cartState.items.length} {cartState.items.length > 1 ? "Items" : "Item"}
        </span>
        {/* <span>
          {cartState.totalPrice} {cartState.currency && cartState.currency.CurrBaseCode}
        </span> */}
      </div>
    </Link>
  );
};

export default CartController;
