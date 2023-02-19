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

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-4">
          <select defaultValue={0} className="form-select me-3" onChange={UOMchangeHandler}>
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

        <div className="col-4">
          <AddToCart style={"btn"} item={item}>
            Add To Cart
          </AddToCart>
        </div>

        <div className="col-4">
          <button onClick={buyNowHandler} className="btn">
            {props.t("Products.ShopNow")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(BuyNow);
