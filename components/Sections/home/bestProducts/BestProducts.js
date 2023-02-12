import React, { Component } from "react";
import Link from "next/Link";
import Slider from "react-slick";
import { withTranslation } from "react-multi-lang";
import { FaArrowRight, FaArrowLeft, FaStar, FaRegEye, FaShoppingBasket } from "react-icons/fa";
import Best_Product from "./Best_Product";
import ProductCard from "../../products/ProductCardList/ProductCard/ProductCard";

const settings = {
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
class BestProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalshow: false,
      products: [],
    };
  }

  componentDidMount() {
    const getProducts = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/getItemMainByBestProducts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ lang: "ar", Cate_Id: 0, limit: 10, start: 0 }),
        }
      );

      const data = await res.json();
      const products = data.data;

      this.setState({ ...this.state, products: products });
    };

    getProducts();
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
            {this.state.products && this.state.products.length > 0
              ? this.state.products.map((product, i) => <ProductCard product={product} key={i} />)
              : null}
            {/* Product End */}
          </Slider>
        </div>
      </div>
    );
  }
}

export default withTranslation(BestProducts);
