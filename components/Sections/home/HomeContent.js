import React, { Component, Fragment } from "react";
import AgricultureBooks from "./AgricultureBooks";
import BestProducts from "./BestProducts/BestProducts";
import Cta from "./Cta";
import HomeBanner from "./HomeBanner";

class HomeContent extends Component {
  render() {
    return (
      <Fragment>
        <HomeBanner />
        <BestProducts ProductList={this.props.ProductList} />

        <div className="section pt-0">
          <Cta />
        </div>

        <div className="section pt-0 andro_fresh-arrivals">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-xs-12">
                <AgricultureBooks BooksInfoList={this.props.BooksInfoList} />
              </div>

              <div className="col-lg-4 col-md-4 col-xs-12">
                <div style={{ width: "100%" }}>
                  <img
                    src="img/videoFull.png"
                    alt="agriculture_video"
                    className="img-fluid h-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomeContent;
