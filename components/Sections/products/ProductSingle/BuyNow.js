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
  const [clicks, setClicks] = useState(1);
  const [item, setItem] = useState(props.item);
  const [measureUnits, setMeasureUnits] = useState([]);
  const [buttonDisabled, setButtonsDisabled] = useState(true);

  const dispatch = useDispatch();
  const router = useRouter();

  const IncrementItem = () => {
    setClicks(clicks + 1);
  };
  const DecreaseItem = () => {
    clicks < 1 ? setClicks(0) : setClicks(clicks - 1);
  };
  const handleChange = (event) => {
    setClicks(event.target.value);
  };

  const buyNowHandler = () => {
    dispatch(cartActions.hydrateTempCart(item));
    router.push("/checkout");
  };

  const UOMchangeHandler = (e) => {
    setButtonsDisabled(false);
    setItem({ ...item, UOM_Id: e.target.value });
  };

  useEffect(() => {
    const fetchMeasureUnits = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/getItemUOMs`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Item_Id: item.Item_Id,
            // Item_Id: 129,
            lang: "ar",
          }),
        }
      );
      const UOMs = await res.json();
      setMeasureUnits(UOMs);
    };

    fetchMeasureUnits();
  }, []);

  return (
    <div className="andro_product-atc-form">
      <div>
        <div className="d-flex">
          {/* {props.uom && ( */}
          <select defaultValue={0} className="form-select me-3" onChange={UOMchangeHandler}>
            <option value={0} disabled>
              {props.t("Products.SelectUom")}
            </option>
            {measureUnits.length > 0 &&
              measureUnits.map((unit, i) => (
                <option key={i} value={unit.UOM_Id_To}>
                  {unit.UOMName}
                </option>
              ))}
          </select>

          <AddToCart uom={true} style={`btn me-2 ${buttonDisabled && "disabled"}`} item={item}>
            Add To Cart
          </AddToCart>

          <button onClick={buyNowHandler} className={`btn ${buttonDisabled && "disabled"}`}>
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
