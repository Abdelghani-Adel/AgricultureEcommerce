import { useSession } from "next-auth/react";
import Link from "next/Link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartActions, editCart } from "../../../../redux/slices/cartSlice";
import AddToCart from "../AddToCart";
import { withTranslation } from "react-multi-lang";

const BuyNow = (props) => {
  const [item, setItem] = useState(props.item);
  const session = useSession();

  const dispatch = useDispatch();
  const router = useRouter();

  const buyNowHandler = () => {
    if (session.status != "authenticated") {
      router.push("/login");
      return;
    }

    dispatch(cartActions.hydrateTempCart(item));
    router.push("/checkout");
  };

  const UOMchangeHandler = (e) => {
    setItem({ ...item, FAUOMID: e.target.value });
  };

  return (
    <div className="andro_product-atc-form">
      <div>
        <div className="d-flex">
          <select defaultValue={0} className="form-select me-3" onChange={UOMchangeHandler}>
            <option value={0} disabled>
              {props.t("Products.SelectUom")}
            </option>
            {item.uoms.map((unit, i) => (
              <option key={i} value={unit.UOM_Id_To}>
                {unit.UOMName}
              </option>
            ))}
          </select>

          <AddToCart style={"btn me-2"} item={item}>
            Add To Cart
          </AddToCart>

          <button onClick={buyNowHandler} className="btn">
            BUY NOW
          </button>
        </div>
        {/* <div className="qty">
          <span className="qty-subtract" onClick={DecreaseItem} data-type="minus" data-field>
            <FaMinus />
          </span>
          <input type="text" name="clicks" value={clicks} onChange={handleChange} />
          <span className="qty-add" onClick={IncrementItem} data-type="plus" data-field>
            <FaPlus />
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default withTranslation(BuyNow);
