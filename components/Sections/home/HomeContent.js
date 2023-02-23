import React from "react";
import BestProducts from "./BestProducts";
import BooksSection from "./BooksSection";
import Cta from "./Cta";
import HomeBanner from "./HomeBanner";

const HomeContent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <HomeBanner order={1} />
        <BestProducts order={2} />
        <Cta order={3} />
        <BooksSection order={4} />
      </div>
    </div>
  );
};

export default HomeContent;
