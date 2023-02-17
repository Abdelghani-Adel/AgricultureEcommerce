import React, { Fragment } from "react";
import { withTranslation } from "react-multi-lang";
import AdditionalInfo from "./AdditionalInfo";
import BuyNow from "./BuyNow";
import ProductCarousel from "./ProductCarousel";
import ProductDetails from "./ProductDetails";

const ProductSingle = (props) => {
  const item = props.ItemDetails;

  return (
    <Fragment>
      <>
        <div className="section">
          <div className="container">
            <div className="row">
              {/* Product Thumbnail */}
              <div className="col-md-5">
                <ProductCarousel item={item} />
              </div>

              {/* Product Details */}
              <div className="col-md-7">
                <div className="andro_product-single-content">
                  <ProductDetails item={item} />
                  <BuyNow item={item} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section pt-0">
          <div className="container">
            <div className="andro_product-additional-info">
              <AdditionalInfo item={item} />
            </div>
          </div>
        </div>
      </>
    </Fragment>
  );
};

export default withTranslation(ProductSingle);
