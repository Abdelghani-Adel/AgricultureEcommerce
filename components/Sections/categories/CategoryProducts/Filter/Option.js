import { useState } from "react";

const Option = (props) => {
  const { option } = props;
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(50);

  const PriceFromHandler = (e) => {
    const insertedVal = e.target.value;
    setPriceFrom(insertedVal);
  };
  const PriceToHandler = (e) => {
    setPriceTo(e.target.value);
  };

  return (
    <div>
      {option.input_type == "range" && (
        <div className="container">
          <div className="row">
            <div className="col">
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">From</span>
                </div>
                <input
                  type="number"
                  min={option.range_from}
                  max={option.range_to}
                  class="form-control"
                  value={priceFrom}
                  onChange={PriceFromHandler}
                />
              </div>

              <input
                type="range"
                min={option.range_from}
                max={option.range_to}
                value={priceFrom}
                onChange={PriceFromHandler}
                className="me-2 col"
              />
            </div>
            <div className="col">
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">To</span>
                </div>
                <input
                  type="number"
                  min={option.range_from}
                  max={option.range_to}
                  class="form-control"
                  onChange={PriceToHandler}
                  value={priceTo}
                />
              </div>

              <input
                type="range"
                min={option.range_from}
                max={option.range_to}
                value={priceTo}
                onChange={PriceToHandler}
              />
            </div>
          </div>
        </div>
      )}
      {option.input_type != "range" && (
        <>
          <input type={option.input_type} className="form-check-input me-2" />
          <label class="form-check-label">{option.optionTitle}</label>
        </>
      )}
    </div>
  );
};

export default Option;
