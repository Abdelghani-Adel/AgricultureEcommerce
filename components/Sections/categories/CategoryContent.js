import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import ReactPaginate from "react-paginate";
import Loader from "../../layout/Reusable/Loader";
import CategoryItemList from "./CategoryItemList";
import ProductCount from "./ProductCount";

const CategoryContent = (props) => {
  const [items, setItems] = useState(props.Items);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [loading, setLoading] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(Math.ceil(items.length / itemsPerPage));
  const [endOffset, setEndOffset] = useState(itemOffset + itemsPerPage);
  const [currentItems, setCurrentItems] = useState(items.slice(itemOffset, endOffset));

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    const newEndOffset = newOffset + itemsPerPage;

    setLoading(true);
    setItemOffset((event.selected * itemsPerPage) % items.length);
    setCurrentItems(items.slice(newOffset, newEndOffset));
    setLoading(false);
  };

  const handlePriceChange = (e) => {};

  return (
    <div className="section pagination-content">
      <div className="andro_section-fw">
        <div className="row">
          <div className="col-lg-9 col-xs-12">
            <ProductCount Items={items} />

            <div className="row">
              {loading === false ? <CategoryItemList currentItems={currentItems} /> : <Loader />}
            </div>

            {/* Pagination Start */}
            <ReactPaginate
              breakLabel="..."
              nextLabel={<FaAngleRight />}
              onPageChange={handlePageClick}
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
};

export default withTranslation(CategoryContent);
