import React, { Component } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import ReactPaginate from "react-paginate";
import Loader from "../../layout/Reusable/Loader";
import CategoryItemList from "./CategoryItemList";
import ProductCount from "./ProductCount";

class CategoryContent extends Component {
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
  handlePriceChange = (e) => {};
  render() {
    const { Items, currentItems, currentPage, itemsPerPage, pageCount } = this.state;

    return (
      <div className="section pagination-content">
        <div className="andro_section-fw">
          <div className="row">
            <div className="col-lg-9 col-xs-12">
              <ProductCount Items={Items} />

              <div className="row">
                {this.state.loading === false ? (
                  <CategoryItemList currentItems={currentItems} />
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

export default withTranslation(CategoryContent);
