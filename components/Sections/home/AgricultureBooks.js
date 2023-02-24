import React, { Fragment, useEffect, useState } from "react";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";
import { fetchBooksItems } from "../../../services/productServices";
import ProductSlider from "../../Reusable_Components/Sliders/ProductSlider";

const AgricultureBooks = ({ cards_in_slide, order }) => {
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
          slidesToShow={cards_in_slide}
        />
      )}
    </Fragment>
  );
};

export default withTranslation(AgricultureBooks);
