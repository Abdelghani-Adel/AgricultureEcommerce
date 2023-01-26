import React, { Component } from "react";
import Link from "next/Link";
import Slider from "react-slick";
import { FaThLarge } from "react-icons/fa";
import Category from "./Category";
import HomeAdvertiseSlider from "./HomeAdvertiseSlider";
import { withTranslation } from "react-multi-lang";
import Chat_banner from "./chat_banner";
import ProductsSlider from "./ProductSlider";
import Other from "./Other";

class HomeBanner extends Component {
  render() {
    return (
      <div className="section carousel_bg">
        <div className="home-banner">
          <div>
            <HomeAdvertiseSlider />
          </div>

          <div className="home-banner--content">
            <div className="container">
              <div className="row">
                <Chat_banner />
                <ProductsSlider />
                <Other />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation(HomeBanner);
