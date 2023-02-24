import { useState } from "react";
import DoubleRangeSlider from "./DoubleRange";

const Option = (props) => {
  const { option } = props;
  const [priceFrom, setPriceFrom] = useState(50);
  const [priceTo, setPriceTo] = useState(50);
  const [gap, setGap] = useState(30);

  // const progress = document && document.querySelector(".range-slider .progress");

  const PriceFromHandler = (e) => {
    const insertedVal = e.target.value;
    setPriceFrom(insertedVal);
  };
  const PriceToHandler = (e) => {
    setPriceTo(e.target.value);
  };

  const changeHandler = (e) => {
    const type = e.currentTarget.dataset.type;
    if (priceTo - priceFrom < gap) {
      if (type == "min") {
        setPriceFrom(priceTo - gap);
      } else {
        setPriceTo(priceFrom + gap);
      }
    } else {
      if (type == "min") {
        progress.style.left = (e.target.value / 1000) * 100 + "%";
        progress.style.right = (priceTo / 1000) * 100 + "%";
      } else {
        progress.style.left = (priceFrom / 1000) * 100 + "%";
        progress.style.right = (e.target.value / 1000) * 100 + "%";
      }
    }
  };

  return (
    <div className="c_slider">
      {option.input_type != "range" && (
        <>
          <input type={option.input_type} className="form-check-input me-2" />
          <label className="form-check-label">{option.optionTitle}</label>
        </>
      )}
    </div>
  );
};

export default Option;
