import React, { Component } from "react";
import Link from "next/Link";
import { FaChevronUp } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
class Footer extends Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <footer className={"andro_footer " + this.props.footer.style}>
        {/* Top Footer */}
        <div className="container">
          <div className="andro_footer-top">
            <Link href="/" className="andro_footer-logo">
              <img src="../img/logo.png" alt="logo" />
            </Link>
            {/* <div className="andro_footer-buttons">
                            <Link href="#"> <img src={"img/android.png"} alt="download it on the app store" /></Link>
                            <Link href="#"> <img src={"img/ios.png"} alt="download it on the app store" /></Link>
                        </div> */}
          </div>
        </div>
        {/* Middle Footer */}
        <div className="andro_footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                <h5 className="widget-title">{this.props.t("Footer.Information")}</h5>
                <ul>
                  <li>
                    {" "}
                    <Link href="/">Home</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="/blog-grid">Blog</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="/about">About Us</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="/shop-v1">Shop</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="/contact">Contact Us</Link>{" "}
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                <h5 className="widget-title">{this.props.t("Footer.TopCategories")}</h5>
                {/* <ul>
                                    <li> <Link href="#">Food</Link> </li>
                                    <li> <Link href="#">Baskets</Link> </li>
                                    <li> <Link href="#">Supplements</Link> </li>
                                    <li> <Link href="#">Keto</Link> </li>
                                    <li> <Link href="#">Home Care</Link> </li>
                                </ul> */}
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                <h5 className="widget-title">{this.props.t("Footer.Others")}</h5>
                <ul>
                  <li>
                    {" "}
                    <Link href="/checkout">Checkout</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="/cart">Cart</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="/product-single">Product</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="/shop-v1">Shop</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="/legal">Legal</Link>{" "}
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 footer-widget">
                <h5 className="widget-title">{this.props.t("Footer.SocialMedia")}</h5>
                <ul className="social-media">
                  <li>
                    {" "}
                    <Link href="#" className="facebook">
                      {" "}
                      <FaFacebookF />{" "}
                    </Link>{" "}
                  </li>

                  <li>
                    {" "}
                    <Link href="#" className="google">
                      {" "}
                      <FaYoutube />{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="#" className="twitter">
                      {" "}
                      <FaTwitter />{" "}
                    </Link>{" "}
                  </li>
                </ul>
                <div className="andro_footer-offer">
                  <p>{this.props.t("Footer.Signup")}</p>
                  <Link href="/register" className="andro_btn-custom btn-sm shadow-none">
                    {this.props.t("Footer.Signup")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="andro_footer-bottom">
          <div className="container">
            <ul>
              <li>
                {" "}
                <Link href="#">Privacy Policy</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="#">Refund Policy</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="#">Cookie Policy</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="#">Terms &amp; Conditions</Link>{" "}
              </li>
            </ul>
            <div className="andro_footer-copyright">
              <p>
                {" "}
                Copyright © 2023 <Link href="#">RTS</Link> All Rights Reserved.{" "}
              </p>
              <Link href="#" className="andro_back-to-top" onClick={() => this.scrollToTop()}>
                Back to top{" "}
                <span>
                  <FaChevronUp />
                </span>{" "}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default withTranslation(Footer);
