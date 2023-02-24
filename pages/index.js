import { useEffect } from "react";
import { useDispatch } from "react-redux";
import BestProducts from "../components/Sections/home/BestProducts";
import BooksSection from "../components/Sections/home/BooksSection";
import Cta from "../components/Sections/home/Cta";
import HomeBanner from "../components/Sections/home/HomeBanner";
import { loaderActions } from "../redux/slices/loaderSlice";
import sections from "../data/sections.json";

export default function Home() {
  const dispatch = useDispatch();
  const pageStructure = sections.pages.find((page) => page.id == "home");

  useEffect(() => {
    dispatch(loaderActions.hideLoader());
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <HomeBanner order={1} />

        {!pageStructure.sections.best_products.hidden && (
          <BestProducts
            order={pageStructure.sections.best_products.position}
            cards_in_slide={pageStructure.sections.best_products.cards_in_slide}
          />
        )}

        {!pageStructure.sections.cta.hidden && <Cta order={pageStructure.sections.cta.position} />}

        {!pageStructure.sections.books.hidden && (
          <BooksSection
            order={pageStructure.sections.books.position}
            cards_in_slide={pageStructure.sections.books.cards_in_slide}
            structure={pageStructure.sections.books}
          />
        )}
      </div>
    </div>
  );
}
