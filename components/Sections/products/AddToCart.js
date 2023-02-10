import { useSession } from "next-auth/react";
import Link from "next/Link";
import { useRouter } from "next/router";
import { Fragment, useCallback, useEffect, useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import { useDispatch } from "react-redux";
import { editCart } from "../../../redux/slices/cartSlice";

const AddToCart = (props) => {
  const session = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const [measureUnits, setMeasureUnits] = useState(["Kilo", "Litre"]);
  const [item, setItem] = useState(props.item);

  const UOMchangeHandler = (e) => {
    setItem({ ...item, UOMName: e.target.value });
  };

  const addToCartHandler = useCallback((e) => {
    e.preventDefault();
    if (session.status != "authenticated") {
      router.push("/login");
      return;
    }
    const payload = {
      action: "plus",
      item: item,
    };

    dispatch(editCart(payload));
  });

  useEffect(() => {
    const fetchMeasureUnits = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/getItemUOMs`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Item_Id: item.Item_Id,
            lang: "ar",
          }),
        }
      );

      const UOMs = await res.json();
      setMeasureUnits(UOMs);
      console.log(UOMs);
    };

    fetchMeasureUnits();
  }, []);
  return (
    <Fragment>
      {measureUnits.length > 0 && (
        <div className="d-flex align-items-center col-5">
          {props.uom && (
            <select className="form-select me-3" onChange={UOMchangeHandler}>
              {measureUnits.map((unit, i) => (
                <option key={i} value={unit.UOMName}>
                  {unit.UOMName}
                </option>
              ))}
            </select>
          )}
          <Link
            href="/"
            className={props.style}
            title={props.t("Products.AddToCart")}
            onClick={addToCartHandler}
          >
            {props.children ? props.children : <FaShoppingBasket />}
          </Link>
        </div>
      )}

      {measureUnits.length < 1 && (
        <Link
          href="/"
          className={props.style}
          title={props.t("Products.AddToCart")}
          onClick={addToCartHandler}
        >
          {props.children ? props.children : <FaShoppingBasket />}
        </Link>
      )}
    </Fragment>
  );
};

export default withTranslation(AddToCart);
