import React, { Component, useState } from "react";
import Link from "next/Link";
import { withTranslation } from "react-multi-lang";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCardList from "../products/ProductCardList/ProductCardList";

const AgricultureOthers = (props) => {
  const lang = useSelector((state) => state.lang);
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/getBooksItems`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            lang: lang,
            Cate_Id: 0,
            Cust_Id: 0,
            limit: 3,
            start: 0,
          }),
        }
      );

      const data = await res.json();
      setBooksList(data.data);
    };

    fetchBooks();
  }, []);
  const { BooksInfoList } = props;
  return (
    <>
      <div className="section-title">
        <h4 className="title">{props.t("Products.BooksAndInfo")}</h4>
      </div>
      <div className="row">
        <ProductCardList products={booksList} />
        {/* Product Start */}
        {/* {BooksInfoList.slice(0, 3).map((item, i) => (
          <div className="col-lg-4 col-xs-12" key={i}>
            <div className="andro_product andro_product-minimal andro_product-has-controls andro_product-has-buttons">
              <div className="andro_product-thumb">
                <img src={item.img} alt={item.title} className="img-rounded" />
              </div>
              <div className="andro_product-body">
                <h6 className="andro_product-title">
                  <Link href={"/product-single/" + item.id}> Names Goes here </Link>
                </h6>
              </div>
              <div className="andro_product-footer">
                <div className="andro_product-buttons" style={{ display: "block" }}>
                  <Link href={"/product-single/" + item.id} className="agri-btn-rounded primary">
                    {props.t("Products.ReadMore")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))} */}
      </div>

      <Link href="#" className="agri-btn-rounded-dark">
        {props.t("Products.ViewAll")}
      </Link>
    </>
  );
};

export default withTranslation(AgricultureOthers);
