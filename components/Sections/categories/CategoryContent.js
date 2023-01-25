import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import ReactPaginate from "react-paginate";
import Loader from "../../layout/Reusable/Loader";
import CategoryItemList from "./CategoryItemList";
import FilterPrice from "./FilterPrice";
import FilterState from "./FilterState";
import ProductCount from "./ProductCount";
import SearchCategory from "./SearchCategory";

const CategoryContent = (props) => {
  const items = props.Items;
  // const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [loading, setLoading] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(Math.ceil(items.length / itemsPerPage));
  const [endOffset, setEndOffset] = useState(itemOffset + itemsPerPage);
  const [currentItems, setCurrentItems] = useState(items.slice(itemOffset, endOffset));

  const changePageHandler = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    const newEndOffset = newOffset + itemsPerPage;

    setLoading(true);
    setItemOffset((event.selected * itemsPerPage) % items.length);
    setCurrentItems(items.slice(newOffset, newEndOffset));
    setLoading(false);
  };

  return (
    <div className="section pagination-content">
      <div className="andro_section-fw">
        <div className="row">
          <div className="col-lg-9 col-xs-12">
            <ProductCount Items={items} itemsPerPage={itemsPerPage} />

            <div className="row">
              {loading === false ? <CategoryItemList currentItems={currentItems} /> : <Loader />}
            </div>
          </div>

          <div className="col-lg-3 col-xs-12">
            <div className="sidebar">
              <SearchCategory />
              <FilterState />
              <FilterPrice />
            </div>
          </div>

          <div className="col-lg-9 col-xs-12">
            <ReactPaginate
              breakLabel="..."
              nextLabel={<FaAngleRight />}
              onPageChange={changePageHandler}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel={<FaAngleLeft />}
              renderOnZeroPageCount={null}
              className="pagination"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(CategoryContent);
