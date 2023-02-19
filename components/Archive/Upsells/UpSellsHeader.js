import React from "react";

const UpSellsHeader = (props) => {
  return (
    <div className="section-title flex-title">
      <h4 className="title">Upsells</h4>
      <div className="andro_arrows">
        <i
          className="fa fa-arrow-left slick-arrow slider-prev"
          //   onClick={this.previous}
        />
        <i className="fa fa-arrow-right slick-arrow slider-next" onClick={props.test} />
      </div>
    </div>
  );
};

export default UpSellsHeader;
