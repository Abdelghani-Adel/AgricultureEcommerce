import React from "react";
import { withTranslation } from "react-multi-lang";
import AdvertiseOne from "./AdvertiseOne";
import AdvertiseTwo from "./AdvertiseTwo";
import ChatBanner from "./ChatBanner";
import HomeAdvertiseSlider from "./HomeAdvertiseSlider";
import SpecialOffers from "./SpecialOffers";

const HomeBanner = () => {
  return (
    <div className="col-12 section carousel_bg" id="home_banner">
      <div className="home-banner">
        <HomeAdvertiseSlider />

        <div className="home-banner--content">
          <div className="container-fluid">
            <div className="row g-3">
              <ChatBanner />

              <div className="col-12 col-lg-6 col-xs-12">
                <AdvertiseOne />
              </div>

              <div className="col-6 col-lg-2 col-xs-12">
                <AdvertiseTwo />
              </div>

              <SpecialOffers />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(HomeBanner);
