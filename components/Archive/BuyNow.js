import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import AddToCart from "../Sections/products/AddToCart";

const BuyNow = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState(props.item);
  const [selectedUOM, setSelectedUOM] = useState("");
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

  useEffect(() => {
    const defaultUOMObject = item.uoms.filter((uom) => uom.UOM_Id_To == item.FAUOMID)[0];
    const defaultUOM = defaultUOMObject ? defaultUOMObject.UOMName : item.UOMName;
    setSelectedUOM(defaultUOM);
  }, []);

  const quantityChangeHandler = (e) => {
    const type = e.currentTarget.dataset.type;

    if (type == "minus") {
      if (quantity == 1) {
        return;
      }
      setQuantity((prev) => prev - 1);
    } else {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-12">
          <div className="qty-outter">
            <div className="qty">
              <span
                className="qty-subtract"
                data-type="plus"
                data-field
                onClick={quantityChangeHandler}
              >
                <FaArrowUp />
              </span>
              <input type="text" name="clicks" value={quantity} />
              <span
                className="qty-add"
                data-type="minus"
                data-field
                onClick={quantityChangeHandler}
              >
                <FaArrowDown />
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-xs-12">
          <select
            defaultValue={0}
            className="form-select me-3 uom_select"
            onChange={UOMchangeHandler}
          >
            <option value={0} disabled>
              {selectedUOM}
            </option>
            {item.uoms.map((unit, i) => (
              <option key={i} value={unit.UOM_Id_To}>
                {unit.UOMName}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="total">
        <div className="d-flex justify-content-between">
          <p>Unit Price:</p>
          <p>{item.Price}</p>
        </div>
        <div className="d-flex justify-content-between fw-bolder text-dark">
          <p>Total</p>
          <p>{item.Price * quantity}</p>
        </div>
      </div>

      <hr className="m-2" />
      <div className="row">
        <div className="col-lg-6 col-xs-12">
          <AddToCart style={"btn"} item={item} quantity={quantity}>
            Add To Cart
          </AddToCart>
        </div>

        <div className="col-lg-6 col-xs-12">
          <button onClick={buyNowHandler} className="btn">
            {props.t("Products.ShopNow")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(BuyNow);
