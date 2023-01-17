import React, { Fragment } from "react";
import Link from "next/link";
import shop from "../../../data/shop.json";
import Rating from "../../../helper/Rating";
import Slider from "react-slick";
import { withTranslation } from "react-multi-lang";

const UpSellsProductsSlider = (props) => {
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
  };

  return (
    <Slider className="andro_upsells-slider" {...sliderSettings}>
      {shop.map((item, i) => (
        <div
          key={i}
          className="andro_product andro_product-list andro_product-has-controls andro_product-has-buttons d-block d-sm-flex"
        >
          <div className="andro_product-thumb">
            <Link href={"/product-single/" + item.id}>
              <img src={"img/products/1.png"} alt={item.title} />
            </Link>
          </div>
          <div className="andro_product-body">
            <div className="andro_rating-wrapper">
              <div className="andro_rating">{Rating(item.rating)}</div>
              <span>{item.rating} Stars</span>
            </div>
            <h5 className="andro_product-title">
              {" "}
              <Link href={"/product-single/" + item.id}> {item.title} </Link>{" "}
            </h5>
            <div className="andro_product-price">
              {item.discount > 0 || item.discount !== "" ? (
                <span>
                  {new Intl.NumberFormat().format(
                    ((item.price * (100 - item.discount)) / 100).toFixed(2)
                  )}
                  $
                </span>
              ) : (
                ""
              )}
              <span>{new Intl.NumberFormat().format(item.price.toFixed(2))}$</span>
            </div>
            <p>{item.shortdesc}</p>
          </div>
          <div className="andro_product-footer">
            <div className="andro_product-buttons">
              <Link href={"/product-single/" + item.id} className="andro_btn-custom primary">
                {props.t("Products.AddToCart")}
              </Link>
              <Link
                href="#"
                className="andro_btn-custom light"
                // onClick={this.modalShow}
              >
                Quick View
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default withTranslation(UpSellsProductsSlider);
