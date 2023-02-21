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
                <div className="frame-wrapper-2">
                  <iframe
                    className="iframe_2"
                    src="https://www.youtube-nocookie.com/embed/Mz1fql7kr7g?enablejsapi=1"
                    title="YouTube video player"
                  ></iframe>
                </div>
                <div className="text-end">
                  <h4 className="mt-3 mb-1">طريقة رش المبيدات بمزارعنا</h4>
                  <p className="iframe_desc">
                    مبيدات الآفات هي مواد أو خليط من المواد يُقصد منها الوقاية، تدمير، محاربة وصد،
                    أو التلطيف من حدة أثر آفةٍ ما. ومن ثم، فقد يكون مبيد الآفات مادةً كيميائيةً،
                    عنصر أو عامل حيوي بيولوجي (مثل الفيروس أو البكتريا)، مضاد للميكروبات، مطهر أو
                    مبيد للجراثيم أو حتى أداة تُستخدم ضد أي آفةٍ كانت.
                  </p>
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
