import React from "react";
import BestProducts from "../Sections/home/BestProducts";
import BooksSection from "../Sections/home/BooksSection";
import Cta from "../Sections/home/Cta";
import HomeBanner from "../Sections/home/HomeBanner";

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
