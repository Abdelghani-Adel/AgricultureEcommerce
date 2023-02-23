import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const QuantityInput = ({ quantity, quantityHandler }) => {
  return (
    <div className="qty-outter">
      <div className="qty">
        <span className="qty-subtract" data-type="plus" data-field onClick={quantityHandler}>
          <FaArrowUp />
        </span>
        <input type="text" name="clicks" value={quantity} />
        <span className="qty-add" data-type="minus" data-field onClick={quantityHandler}>
          <FaArrowDown />
        </span>
      </div>
    </div>
  );
};

export default QuantityInput;
