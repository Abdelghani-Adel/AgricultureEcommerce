import { useSession } from "next-auth/react";
import Link from "next/Link";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { editCart } from "../../../../redux/slices/cartSlice";
import AddToCart from "../AddToCart";

const BuyNow = (props) => {
  const { item } = props;
  console.log(item);
  const [clicks, setClicks] = useState(1);
  const dispatch = useDispatch();
  const session = useSession();

  const IncrementItem = () => {
    setClicks(clicks + 1);
  };
  const DecreaseItem = () => {
    clicks < 1 ? setClicks(0) : setClicks(clicks - 1);
  };
  const handleChange = (event) => {
    setClicks(event.target.value);
  };
  return (
    <div className="andro_product-atc-form">
      <div className="qty-outter">
        <AddToCart style={"andro_btn-custom mb-3"} item={item}>
          Add To Cart
        </AddToCart>

        <div className="qty-outter">
          <Link href={"/checkout"} className="andro_btn-custom">
            BUY NOW
          </Link>
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

export default BuyNow;
