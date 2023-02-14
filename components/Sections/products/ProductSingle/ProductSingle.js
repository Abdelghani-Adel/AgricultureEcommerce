import React, { Fragment } from "react";
// import Relatedproduct from '../../layouts/Relatedproduct';
// import blogcategory from '../../../data/blogcategory.json';
// import blogtags from "../../../data/blogtags.json";
import { useState } from "react";
import { withTranslation } from "react-multi-lang";
import AdditionalInfo from "./AdditionalInfo";
import BuyNow from "./BuyNow";
import ProductCarousel from "./ProductCarousel";
import ProductDetails from "./ProductDetails";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import { OverlayTrigger, Tooltip, Tab, Nav } from "react-bootstrap";

const ProductSingle = (props) => {
  const { ItemDetails } = props;
  const [item, setItem] = useState(ItemDetails);
  console.log(item);

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
