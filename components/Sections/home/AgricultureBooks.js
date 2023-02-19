import Link from "next/Link";
import React, { Fragment, useEffect, useState } from "react";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";
import { fetchBooksItems } from "../../../services/productServices";
import ProductSlider from "../../layout/Reusable/ProductSlider";

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
      {booksList && booksList.length > 0 && (
        <ProductSlider
          products={booksList}
          translateTitle={"Products.BooksAndInfo"}
          slidesToShow={2}
        />
      )}

      {/* <Link href="#" className="agri-btn-rounded-dark">
        {props.t("Products.ViewAll")}
      </Link> */}
    </Fragment>
  );
};

export default withTranslation(AgricultureBooks);
