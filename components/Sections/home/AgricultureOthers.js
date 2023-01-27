import React, { Component } from "react";
import Link from "next/Link";
import { withTranslation } from "react-multi-lang";

class AgricultureOthers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalshow: false,
    };
    this.modalShow = this.modalShow.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }
  // Modal
  modalShow() {
    this.setState({ modalshow: true });
  }
  modalClose() {
    this.setState({ modalshow: false });
  }
  render() {
    const { BooksInfoList } = this.props;
    return (
      <>
        <div className="section-title">
          <h4 className="title">{this.props.t("Products.BooksAndInfo")}</h4>
        </div>
        <div className="row">
          {/* Product Start */}
          {BooksInfoList.slice(0, 3).map((item, i) => (
            <div className="col-lg-4 col-xs-12" key={i}>
              <div className="andro_product andro_product-minimal andro_product-has-controls andro_product-has-buttons">
                <div className="andro_product-thumb">
                  <img src={item.img} alt={item.title} className="img-rounded" />
                </div>
                <div className="andro_product-body">
                  <h6 className="andro_product-title">
                    <Link href={"/product-single/" + item.id}> Names Goes here </Link>
                  </h6>
                </div>
                <div className="andro_product-footer">
                  <div className="andro_product-buttons">
                    <Link href={"/product-single/" + item.id} className="agri-btn-rounded primary">
                      {this.props.t("Products.ReadMore")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href="#" className="agri-btn-rounded-dark">
          {this.props.t("Products.ViewAll")}
        </Link>
      </>
    );
  }
}

export default withTranslation(AgricultureOthers);
