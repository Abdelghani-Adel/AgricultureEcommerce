import React, { Component } from "react";
import Head from "next/head";
import Breadcrumbs from "../../components/layout/Reusable/Breadcrumbs";
import { withTranslation } from "react-multi-lang";
import Categories from "../../data/category.json";
import Link from "next/Link";
const pagelocation = "Categories";
class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { CategoryList } = this.props;
    return (
      <>
        <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
        <div className="section">
          <div className="container">
            <div className="row">
              {CategoryList && CategoryList.length > 0
                ? CategoryList.map((cat, index) => {
                    return (
                      <div className="col-lg-4 col-xs-12" key={index}>
                        <div className="card catg_card">
                          <img
                            className="card-img-top"
                            src={`assets/img/products/${index + 1}.png`}
                            alt="Card image cap"
                          />
                          <div className="card-body">
                            <h5 className="card-title">{cat.title}</h5>
                            <p className="card-text">
                              Some quick example text to build on the card title and make up the
                              bulk of the cards content.
                            </p>
                            <Link
                              href={"categories/" + cat.slug}
                              className="agri-btn-rounded primary"
                            >
                              {this.props.t("Products.ShopNow")}
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export const getStaticProps = async () => {
  return {
    props: {
      CategoryList: Categories,
    }, // will be passed to the page component as props
  };
};

export default withTranslation(Index);
