import { FaArrowDown, FaArrowUp, FaMinus, FaPlus } from "react-icons/fa";

const QuantityInput = ({ quantity, quantityHandler }) => {
  return (
    <div className="qty-outter">
      <div className="qty">
        <span className="qty-subtract" data-type="minus" data-field onClick={quantityHandler}>
          <FaMinus />
        </span>
        <input type="text" name="clicks" value={quantity} />
        <span className="qty-add" data-type="plus" data-field onClick={quantityHandler}>
          <FaPlus />
        </span>
      </div>
    </div>
  );
};

export default QuantityInput;
