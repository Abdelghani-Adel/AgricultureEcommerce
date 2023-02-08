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
  const [products, setProducts] = useState(props.products.data);
  const [productsTotal, setproductsTotal] = useState(props.products.total);
  console.log("rerendered");
  console.log(props.products);

  // const productsTotal = props.products.total;
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [loading, setLoading] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(Math.ceil(products!=null ? products.length : 0 / itemsPerPage));
  const [endOffset, setEndOffset] = useState(itemOffset + itemsPerPage);
  const [currentItems, setCurrentItems] = useState(products !=null ? products.slice(itemOffset, endOffset) : []);

  const [currentStart, setCurrentStart] = useState(0);

  const changePageHandler = (event) => {
    // const basePath = router.asPath.substring(0, router.asPath.indexOf("?"));
    const basePath = router.asPath;

    // router.push(`${basePath}&start=${itemOffset}`);

    console.log(itemOffset);
    console.log(endOffset);

    console.log(basePath);
    const newOffset = (event.selected * itemsPerPage) % products.length;
    const newEndOffset = newOffset + itemsPerPage;

    setLoading(true);
    setCurrentStart();
    setItemOffset((event.selected * itemsPerPage) % products.length);
    setCurrentItems(products.slice(newOffset, newEndOffset));
    setLoading(false);
  };
   

  
  return (
    <div className="section pagination-content">
      <div className="andro_section-fw">
        <div className="row">
          <div className="col-lg-9 col-xs-12">
            <ProductCount Items={products} itemsPerPage={currentItems.length} total={productsTotal} />

            <div className="row">
              {loading === false ? (
                <ProductCardList products={currentItems} slug={props.slug} />
              ) : (
                <Loader />
              )}
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
