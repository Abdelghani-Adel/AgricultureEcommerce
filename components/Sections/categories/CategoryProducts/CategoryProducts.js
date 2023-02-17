import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import ReactPaginate from "react-paginate";
import Loader from "../../../layout/Reusable/Loader";
import ProductCardList from "../../products/ProductCardList/ProductCardList";
import FilterPrice from "./FilterPrice";
import FilterState from "./FilterState";
import ProductCount from "./ProductCount";
import SearchCategory from "./SearchCategory";

const CategoryProducts = (props) => {
  const [products, setProducts] = useState([]);
  const [productsTotal, setproductsTotal] = useState();

  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(6);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState();

  // const [currentStart, setCurrentStart] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const products = props.products.data;
    const total = props.products.total;
    const pageCount = products ? Math.ceil(products.length / itemsPerPage) : 0;
    const currentItems = products ? products.slice(itemOffset, endOffset) : [];

    setProducts(products);
    setproductsTotal(total);
    setCurrentItems(currentItems);
    setPageCount(pageCount);
  }, [props]);

  const changePageHandler = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    const newEndOffset = newOffset + itemsPerPage;

    setItemOffset((event.selected * itemsPerPage) % products.length);
    setCurrentItems(products.slice(newOffset, newEndOffset));
  };

  return (
    <div className="section pagination-content">
      <div className="andro_section-fw">
        <div className="row">
          <div className="col-lg-9 col-xs-12">
            <ProductCount
              Items={products}
              itemsPerPage={currentItems.length}
              total={productsTotal}
            />

            <div className="row">
              <ProductCardList products={currentItems} slug={props.slug} />
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

export default withTranslation(CategoryProducts);
