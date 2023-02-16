import React, { Component, useState } from "react";
import Link from "next/Link";
import { withTranslation } from "react-multi-lang";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCardList from "../products/ProductCardList/ProductCardList";
import { fetchBooksItems } from "../../../services/productServices";
import { Fragment } from "react";

const AgricultureBooks = (props) => {
  const lang = useSelector((state) => state.lang);
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await fetchBooksItems(lang);
      setBooksList(books);
    };

    fetchBooks();
  }, []);
  return (
    <Fragment>
      <div className="section-title">
        <h4 className="title">{props.t("Products.BooksAndInfo")}</h4>
      </div>
      <div className="row">
        <ProductCardList products={booksList} />
      </div>

      <Link href="#" className="agri-btn-rounded-dark">
        {props.t("Products.ViewAll")}
      </Link>
    </Fragment>
  );
};

export default withTranslation(AgricultureBooks);
