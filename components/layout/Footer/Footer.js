import Link from "next/Link";
import React, { Component } from "react";
import { FaFacebookF, FaHandPointer, FaTwitter, FaYoutube } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import BackTopTopBtn from "../../Reusable_Components/BackToTopBtn";
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
        <div className="container pt-2">
          <div className="mb-4">
            <BrandLogo />
          </div>
        </div>
        {/* Middle Footer */}
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              {/* Information */}
              <div className="col-xl-3 col-lg-3 col-md-4  footer-widget">
                <p className="txt-primary h5 fw-bold">{this.props.t("Footer.Information")}</p>
                <ul>
                  <li>
                    <Link href="/" aria-label="Home">
                      {this.props.t("Footer.Home")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-grid" aria-label="Blog">
                      {this.props.t("Footer.Blog")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" aria-label="About">
                      {this.props.t("Footer.About")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop-v1" aria-label="Shop">
                      {this.props.t("Footer.Shop")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" aria-label="Contact">
                      {this.props.t("Footer.Contact")}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Tpop Categories */}
              <div className="col-xl-3 col-lg-3 col-md-4  footer-widget">
                <p className="txt-primary h5 fw-bold">{this.props.t("Footer.TopCategories")}</p>
              </div>

              {/* Others */}
              <div className="col-xl-3 col-lg-3 col-md-4  footer-widget">
                <p className="txt-primary h5 fw-bold">{this.props.t("Footer.Others")}</p>
                <ul>
                  <li>
                    <Link href="/cart" aria-label="Cart">
                      {this.props.t("Footer.Cart")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/product-single" aria-label="Product">
                      {this.props.t("Footer.Product")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop-v1" aria-label="Shop">
                      {this.props.t("Footer.Shop")}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="col-xl-3 col-lg-3 col-md-6  footer-widget">
                <p className="txt-primary h5 fw-bold">{this.props.t("Footer.SocialMedia")}</p>
                <ul className="social-media">
                  <li>
                    <Link href="#" className="facebook" aria-label="Facebook">
                      <FaFacebookF />
                    </Link>
                  </li>

                  <li>
                    <Link href="#" className="google" aria-label="Youtube">
                      <FaYoutube />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="twitter" aria-label="Twitter">
                      <FaTwitter />
                    </Link>
                  </li>
                </ul>
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
              <BackTopTopBtn />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default withTranslation(Footer);
