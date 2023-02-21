import React, { Component, Fragment } from "react";
import AgricultureBooks from "./AgricultureBooks";
import BestProducts from "./bestProducts/BestProducts";
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
                {/* <iframe
                  width="200"
                  height="200"
                  src="https://youtu.be/Mz1fql7kr7g"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe> */}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomeContent;
