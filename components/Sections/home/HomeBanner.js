import React, { Component } from "react";
import { withTranslation } from "react-multi-lang";
import ChatBanner from "./ChatBanner";
import HomeAdvertiseSlider from "./HomeAdvertiseSlider";
import SpecialOffers from "./SpecialOffers";
import AdvertiseTwo from "./AdvertiseTwo";
import AdvertiseOne from "./AdvertiseOne";

const HomeBanner = () => {
  return (
    <div className="col-12 section carousel_bg">
      <div className="home-banner">
        <HomeAdvertiseSlider />

        <div className="home-banner--content">
          <div className="container-fluid">
            <div className="row g-3">
              <ChatBanner />
              <AdvertiseOne />
              <AdvertiseTwo />
              <SpecialOffers />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(HomeBanner);
