import React, { Component } from "react";
import Link from "next/link";
import { Rating } from "../../../helper/helper";
import Loader from "../../layout/Reusable/Loader";
import {
  FaShoppingBasket,
  FaRegHeart,
  FaRegEye,
  FaCompressAlt,
  FaSort,
  FaStar,
} from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import dynamic from "next/dynamic";
// const IonRangeSlider = dynamic(() => import("react-ion-slider"), {
//   ssr: false,
// });
import ReactPaginate from "react-paginate";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Items: [],
      currentPage: 1,
      itemsPerPage: 6,
      loading: false,
      itemOffset: 0,
      pageCount: 0,
      endOffset: 0,
      currentItems: [],
    };
  }

  componentDidMount = () => {
    const { Items } = this.props;
    const { itemOffset, itemsPerPage } = this.state;
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = Items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(Items.length / itemsPerPage);
    this.setState({
      Items: Items,
      currentItems: currentItems,
      itemOffset: itemOffset,
      pageCount: pageCount,
    });
  };
  handlePageClick = (event) => {
    const { itemsPerPage, Items } = this.state;
    this.setState({
      loading: true,
    });
    const newOffset = (event.selected * itemsPerPage) % Items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    const endOffset = newOffset + itemsPerPage;
    console.log(`Loading items from ${newOffset} to ${endOffset}`);
    const currentItems = Items.slice(newOffset, endOffset);
    this.setState({
      currentItems: currentItems,
      itemOffset: newOffset,
      loading: false,
    });
  };
  handlePriceChange = (e) => {
    // console.log("eeeeeeeeeeeee ",e.to);
  };
  render() {
    const { Items, currentItems, currentPage, itemsPerPage, pageCount } = this.state;

    return (
      <div className="section pagination-content">
        <div className="andro_section-fw">
          <div className="row">
            <div className="col-lg-9 col-xs-12">
              {/* Product Count & Orderby Start */}
              <div className="andro_shop-global">
                <p>
                  Showing <b>{this.state.itemsPerPage}</b> of <b>{Items.length}</b> products{" "}
                </p>
                <form method="post">
                  <select className="form-control" name="orderby">
                    <option value="default">{this.props.t("Products.Sort")}</option>
                    <option value="latest">Latest release</option>
                    <option value="price-down">Price: High - Low</option>
                    <option value="price-up">Price: Low - High</option>
                    <option value="popularity">Popularity Sorting</option>
                  </select>
                </form>
              </div>
              <div className="row">
                {this.state.loading === false ? (
                  currentItems.map((item, i) => {
                    return (
                      <div key={i} className="col-md-4 col-sm-6 col-xs-12 masonry-item">
                        <div className="andro_product andro_product-has-controls">
                          {item.featured === true ? (
                            <div className="andro_product-badge andro_badge-featured">
                              <FaStar />
                              <span>Featured</span>
                            </div>
                          ) : (
                            ""
                          )}
                          {item.discount > 0 || item.discount !== "" ? (
                            <div className="andro_product-badge andro_badge-sale">
                              {item.discount}% Off{" "}
                            </div>
                          ) : (
                            ""
                          )}
                          <div className="andro_product-thumb">
                            <Link href={"/product-single/" + item.id}>
                              <img src={"../" + item.img} alt={item.title} />
                            </Link>
                          </div>
                          <div className="andro_product-body">
                            <h5 className="andro_product-title">
                              <Link href={"/product-single/" + item.id}> {item.title} </Link>{" "}
                            </h5>
                            <div className="andro_product-price">
                              {item.discount > 0 || item.discount !== "" ? (
                                <span>
                                  {new Intl.NumberFormat().format(
                                    ((item.price * (100 - item.discount)) / 100).toFixed(2)
                                  )}
                                  $
                                </span>
                              ) : (
                                ""
                              )}
                              <span>{new Intl.NumberFormat().format(item.price.toFixed(2))}$</span>
                            </div>
                            <p>{item.shortdesc}</p>
                            <div className="andro_rating-wrapper">
                              <div className="andro_rating">{Rating(item.rating)}</div>
                              <span>
                                {item.rating}
                                {this.props.t("Products.Stars")}
                              </span>
                            </div>
                          </div>
                          <div className="andro_product-footer">
                            <div className="andro_product-controls">
                              <Link
                                href={"/product-single/" + item.id}
                                data-toggle="tooltip"
                                data-placement="top"
                                title={this.props.t("Products.AddToCart")}
                              >
                                <FaShoppingBasket />
                              </Link>
                              <Link
                                href={"/products/" + `${item.slug}`}
                                onClick={this.modalShow}
                                data-toggle="tooltip"
                                data-placement="top"
                                title={this.props.t("Products.ViewDetails")}
                              >
                                <FaRegEye />
                              </Link>
                              <Link
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title={this.props.t("Products.Compare")}
                              >
                                <FaCompressAlt />
                              </Link>
                              <Link
                                href="#"
                                className="favorite"
                                data-toggle="tooltip"
                                data-placement="top"
                                title={this.props.t("Products.AddToWish")}
                              >
                                <FaRegHeart />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <Loader />
                )}
              </div>

              {/* Pagination Start */}
              <ReactPaginate
                breakLabel="..."
                nextLabel={<FaAngleRight />}
                onPageChange={this.handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<FaAngleLeft />}
                renderOnZeroPageCount={null}
                className="pagination"
              />
            </div>

            <div className="col-lg-3 col-xs-12">
              <div className="sidebar">
                {/* Search Start */}
                <div className="sidebar-widget widget-search">
                  <form method="post">
                    <div className="andro_search-adv-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Look for Fruits, Vegetables"
                        name="search"
                      />
                      <button type="submit" name="button">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
                {/* Search End */}

                {/* Filter: State Start */}
                <div className="sidebar-widget">
                  <h5 className="widget-title"> Brand </h5>
                  <ul className="sidebar-widget-list">
                    {/* {brand.map((item, i) => (
                                            <li key={i}>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id={"customCheck" + item.id} />
                                                    <label className="custom-control-label" htmlFor={"customCheck" + item.id}>{item.title}</label>
                                                </div>
                                            </li>
                                        ))} */}
                  </ul>
                </div>
                {/* Filter: State End */}

                {/* Filter: Price Start */}
                <div className="sidebar-widget">
                  <h5 className="widget-title"> Price </h5>
                  {/* <IonRangeSlider
                    type="double"
                    min={0}
                    max={500}
                    from={10}
                    to={100}
                    grid={true}
                    postfix=" $"
                    onChange={this.handlePriceChange}
                  /> */}
                </div>
                {/* Filter: Price End */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation(Content);
