import React, { Fragment, useEffect, useRef } from "react";
import { withTranslation } from "react-multi-lang";
import AdditionalInfo from "../../../Archive/AdditionalInfo";
import InformationTabs from "./InfoTabs/InformationTabs";
import ProductCarousel from "./ProductCarousel";
import ProductInfo from "./ProductInfo/ProductInfo";

const ProductSingle = (props) => {
  const item = props.ItemDetails;
  const parentRef = useRef();

  const handleScroll = () => {
    const position = window.pageYOffset;

    const childDimentions = parentRef.current.getBoundingClientRect();

    console.log(window.innerHeight - childDimentions.y - childDimentions.height);

    // console.log("dd");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <>
        <div className="section" ref={parentRef}>
          <div className="container">
            <div className="row">
              {/* Product Thumbnail */}
              <div className="col-md-8">
                <ProductCarousel item={item} />
                <InformationTabs item={item} />
              </div>

              <div className="col-md-4">
                <ProductInfo item={item} />
              </div>
            </div>
          </div>
        </div>

        <div className="section pt-0">
          <div className="container">
            <div className="andro_product-additional-info"></div>
          </div>
        </div>
      </>
    </Fragment>
  );
};

export default withTranslation(ProductSingle);
