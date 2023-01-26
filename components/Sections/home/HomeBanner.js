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
import Home_Offer from "./Home_Offer";
class HomeBanner extends Component {
  render() {
    return (
      <div className="section carousel_bg">
        <div className="home-banner">
          <HomeAdvertiseSlider />

          <div className="home-banner--content">
            <div className="container-fluid">
              <div className="row">
                <Chat_banner />
                <ProductsSlider />
                <Other />
                <Home_Offer/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation(HomeBanner);
