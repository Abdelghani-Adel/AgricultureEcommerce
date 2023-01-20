import React from "react";
import {
  FaShoppingBasket,
  FaRegHeart,
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaUserAlt,
  FaCommentAlt,
} from "react-icons/fa";
import SocialmediaLinks from "./SocialmediaLinks";
import CurrencyChange from "./CurrencyChange";

const HeaderTop = () => {
  return (
    <div className="andro_header-top">
      <div className="container">
        <div className="andro_header-top-inner">
          <SocialmediaLinks />
          <CurrencyChange />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
