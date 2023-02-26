import Link from "next/Link";
import React, { Component } from "react";
import { FaFacebookF, FaHandPointer, FaTwitter, FaYoutube } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import BrandLogo from "../../Reusable_Components/BrandLogo";
class Footer extends Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <footer className="footer">
        {/* Logo */}
        <div className="container">
          <div className="footer-top">
            <BrandLogo />
          </div>
        </div>
        {/* Middle Footer */}
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              {/* Information */}
              <div className="col-xl-3 col-lg-3 col-md-4  footer-widget">
                <h5 className="txt-primary">{this.props.t("Footer.Information")}</h5>
                <ul>
                  <li>
                    <Link href="/">{this.props.t("Footer.Home")}</Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">{this.props.t("Footer.Blog")}</Link>
                  </li>
                  <li>
                    <Link href="/about">{this.props.t("Footer.About")}</Link>
                  </li>
                  <li>
                    <Link href="/shop-v1">{this.props.t("Footer.Shop")}</Link>
                  </li>
                  <li>
                    <Link href="/contact">{this.props.t("Footer.Contact")}</Link>
                  </li>
                </ul>
              </div>

              {/* Tpop Categories */}
              <div className="col-xl-3 col-lg-3 col-md-4  footer-widget">
                <h5 className="txt-primary">{this.props.t("Footer.TopCategories")}</h5>
                {/* <ul>
                  <li>
                    <Link href="#">Food</Link>
                  </li>
                  <li>
                    <Link href="#">Baskets</Link>
                  </li>
                  <li>
                    <Link href="#">Supplements</Link>
                  </li>
                  <li>
                    <Link href="#">Keto</Link>
                  </li>
                  <li>
                    <Link href="#">Home Care</Link>
                  </li>
                </ul> */}
              </div>

              {/* Others */}
              <div className="col-xl-3 col-lg-3 col-md-4  footer-widget">
                <h5 className="txt-primary">{this.props.t("Footer.Others")}</h5>
                <ul>
                  {/* <li>
                    <Link href="/checkout">{this.props.t("Footer.Checkout")}</Link>
                  </li> */}
                  <li>
                    <Link href="/cart">{this.props.t("Footer.Cart")}</Link>
                  </li>
                  <li>
                    <Link href="/product-single">{this.props.t("Footer.Product")}</Link>
                  </li>
                  <li>
                    <Link href="/shop-v1">{this.props.t("Footer.Shop")}</Link>
                  </li>
                  {/* <li>
                    <Link href="/legal">Legal</Link>
                  </li> */}
                </ul>
              </div>

              {/* Social Media */}
              <div className="col-xl-3 col-lg-3 col-md-6  footer-widget">
                <h5 className="txt-primary">{this.props.t("Footer.SocialMedia")}</h5>
                <ul className="social-media">
                  <li>
                    <Link href="#" className="facebook">
                      <FaFacebookF />
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className="google">
                      <FaYoutube />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="twitter">
                      <FaTwitter />
                    </Link>
                  </li>
                </ul>

                {/* Signup button */}
                {/* <div className="footer-offer">
                  <p>{this.props.t("Footer.Signup")}</p>
                  <Link href="/register" className="andro_btn-custom btn-sm shadow-none">
                    {this.props.t("Footer.Signup")}
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <ul>
              <li>
                <Link href="#">{this.props.t("Footer.PrivacyPolicy")}</Link>
              </li>
              <li>
                <Link href="#">{this.props.t("Footer.RefundPolicy")}</Link>
              </li>
              <li>
                <Link href="#">{this.props.t("Footer.CookiePolicy")}</Link>
              </li>
              <li>
                <Link href="#">{this.props.t("Footer.Terms")}</Link>
              </li>
            </ul>

            <div className="footer-copyright">
              <p>
                Copyright © 2023 <Link href="#">RTS</Link> All Rights Reserved.
              </p>

              {/* Back to top */}
              <Link href="#" className="back-to-top" onClick={() => this.scrollToTop()}>
                <span>
                  <FaHandPointer />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default withTranslation(Footer);
