import Link from "next/Link";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const BuyNow = (props) => {
  const { item } = props;
  const [clicks, setClicks] = useState(1);

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
    <form className="andro_product-atc-form">
      <div className="qty-outter">
        <Link href={"/product-single/" + item.id} className="andro_btn-custom">
          Buy Now
        </Link>
        <div className="qty">
          <span className="qty-subtract" onClick={DecreaseItem} data-type="minus" data-field>
            <FaMinus />
          </span>
          <input type="text" name="clicks" value={clicks} onChange={handleChange} />
          <span className="qty-add" onClick={IncrementItem} data-type="plus" data-field>
            <FaPlus />
          </span>
        </div>
      </div>
    </form>
  );
};

export default BuyNow;
