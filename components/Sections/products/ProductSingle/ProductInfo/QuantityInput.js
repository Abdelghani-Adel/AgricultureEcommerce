import { FaMinus, FaPlus } from "react-icons/fa";

const QuantityInput = ({ quantity, quantityHandler }) => {
  const inputChangeHandler = (e) => {
    quantityHandler(Number(e.target.value));
  };

  const buttonChangeHandler = (e) => {
    const type = e.currentTarget.dataset.type;
    if (type == "minus") {
      if (quantity == 1) {
        return;
      }
      quantityHandler(quantity - 1);
    } else {
      quantityHandler(quantity + 1);
    }
  };

  return (
    <div className="qty-outter me-3">
      <div className="qty">
        <span className="qty-subtract" data-type="minus" data-field onClick={buttonChangeHandler}>
          <FaMinus />
        </span>
        <input type="text" name="clicks" value={quantity} onChange={inputChangeHandler} />
        <span className="qty-add" data-type="plus" data-field onClick={buttonChangeHandler}>
          <FaPlus />
        </span>
      </div>
    </div>
  );
};

export default QuantityInput;
