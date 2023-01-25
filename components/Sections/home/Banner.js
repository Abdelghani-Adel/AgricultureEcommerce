import React, { Component } from "react";
import Link from "next/Link";
import Slider from "react-slick";
import { FaThLarge } from "react-icons/fa";
import Category from "./Category";
import InfoSlider from "./InfoSlider";
import { withTranslation } from "react-multi-lang";
import Chat_banner from "./chat_banner";
import ProductsSlider from "./ProductSlider";
import Other from "./Other";
const bannerslider = [
  {
    photo: "../img/products/2.png",
    couponcode: "ORGANIC991",
    title: "40% Sale",
    titlespan: "On Select Products",
    para: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit",
  },
  {
    photo: "../img/products/12.png",
    couponcode: "ORGANIC991",
    title: "40% Sale",
    titlespan: "On Select Products",
    para: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit",
  },
];

class Banner extends Component {
  render() {
    const sliderSettings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      dotsClass: "slick-dots d-flex",
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
    return (
      <div className="section carousel_bg">
        <div className="info_slider andro_banner banner-1">
          <InfoSlider />
        </div>

        <div className="container-fluid">
          <div className="dynamic_content">
            <div className="row">
              <Chat_banner />
              <ProductsSlider />
              <Other />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation(Banner);
