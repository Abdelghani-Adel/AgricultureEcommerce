import React, { Component } from "react";
import Link from "next/Link";
import Slider from "react-slick";
import { withTranslation } from "react-multi-lang";
import { FaArrowRight, FaArrowLeft, FaStar, FaRegEye, FaShoppingBasket } from "react-icons/fa";

const settings = {
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
class BestProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalshow: false,
    };
  }
  next = () => {
    this.slider.slickNext();
  };
  previous = () => {
    this.slider.slickPrev();
  };
  // Modal
  modalShow = () => {
    this.setState({ modalshow: true });
  };
  modalClose = () => {
    this.setState({ modalshow: false });
  };
  Rating = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<FaStar key={i} />);
    }
    if (rating && rating > 0) {
      for (let i = 0; i <= rating - 1; i++) {
        stars[i] = <FaStar className="active" key={i} />;
      }
    }
    return stars;
  };
  render() {
    return (
      <div className="section pt-0 andro_fresh-arrivals">
        <div className="container">
          <div className="section-title flex-title">
            <h4 className="title">{this.props.t("Products.BestProducts")}</h4>
            <div className="andro_arrows">
              <div className="slick-arrow slider-prev">
                <FaArrowLeft onClick={this.previous} />
              </div>
              <div className="slick-arrow slider-prev">
                <FaArrowRight onClick={this.next} />
              </div>
            </div>
          </div>
          <Slider
            className="andro_fresh-arrivals-slider"
            ref={(c) => (this.slider = c)}
            {...settings}
          >
            {/* Product Start */}
            {this.props.ProductList && this.props.ProductList.length > 0
              ? this.props.ProductList.map((item, i) => (
                  <div
                    key={i}
                    className="andro_product andro_product-has-controls andro_product-has-buttons"
                  >
                    {item.featured === true ? (
                      <div className="andro_product-badge andro_badge-featured">
                        <FaStar />
                        <span>{this.props.t("Products.Featured")}</span>
                      </div>
                    ) : (
                      ""
                    )}
                    {item.discount > 0 || item.discount !== "" ? (
                      <div className="andro_product-badge andro_badge-sale">
                        {item.discount}% Off
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="andro_product-thumb">
                      <Link href={"/products" + item.slug}>
                        <img src={item.img} alt={item.title} />
                      </Link>
                    </div>
                    <div className="andro_product-body">
                      <div className="category_badge">
                        <span className="badge badge-secondary ">{item.CategoryName}</span>
                      </div>

                      <h5 className="andro_product-title">
                        <Link href={"/products/" + item.slug}> {item.title} </Link>
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
                      <div className="andro_rating-wrapper">
                        <div className="andro_rating">{this.Rating(item.rating)}</div>
                        <span>
                          {item.rating}
                          {this.props.t("Products.Stars")}
                        </span>
                      </div>
                    </div>
                    <div className="andro_product-footer">
                      <div className="andro_product-buttons">
                        <Link href={"/products/" + item.slug} className="andro_btn-custom primary">
                          <FaShoppingBasket />
                          {/* {this.props.t("Products.AddToCart")} */}
                        </Link>
                        <Link href={"/products/" + item.slug} className="andro_btn-custom light">
                          {/* {this.props.t("Products.ViewDetails")} */}
                          <FaRegEye />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              : null}
            {/* Product End */}
          </Slider>
        </div>

        {/* <div className="modal fade" id="detailsModal"  role="dialog" aria-labelledby="detailsModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                      
                        <div className="modal-body">
                        <div className="close-btn close-dark close" data-dismiss="modal" aria-label="Close">
                            <span />
                            <span />
                        </div>
                        <Quickview />
                        </div>
                        
                        </div>
                    </div>
                    </div> */}
        {/* <Modal show={this.state.modalshow} className="andro_quick-view-modal p-0" onHide={this.modalClose} aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
                    <Modal.Body>
                        <div className="close-btn close-dark close" onClick={this.modalClose}>
                            <span />
                            <span />
                        </div>
                        <Quickview />
                    </Modal.Body>
                </Modal> */}
      </div>
    );
  }
}

export default withTranslation(BestProducts);
