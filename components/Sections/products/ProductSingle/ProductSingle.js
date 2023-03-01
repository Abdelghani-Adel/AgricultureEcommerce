import React, { Fragment, useEffect, useRef, useState } from "react";
import { withTranslation } from "react-multi-lang";
import AdditionalInfo from "../../../Archive/AdditionalInfo";
import InformationTabs from "./InfoTabs/InformationTabs";
import ProductCarousel from "./ProductCarousel";
import ProductInfo from "./ProductInfo/ProductInfo";

const ProductSingle = ({ ItemDetails }) => {
  const [item, setItem] = useState(ItemDetails);
  const [position, setPosition] = useState({});
  const ref = useRef();

  const handleScroll = () => {
    setPosition(ref.current.getBoundingClientRect());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setItem(ItemDetails);
  }, [ItemDetails]);

  return (
    <div className="section" ref={ref}>
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-6">
            <ProductCarousel item={item} />
            <InformationTabs item={item} />
          </div>

          <div className="col-md-6">
            <ProductInfo item={item} parentPosition={position} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(ProductSingle);
