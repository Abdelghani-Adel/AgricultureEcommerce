import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";
import LazyLoad from "react-lazy-load";
import { useDispatch } from "react-redux";
import BestProducts from "../components/Sections/home/BestProducts";
import BooksSection from "../components/Sections/home/BooksSection";
import Cta from "../components/Sections/home/Cta";
import HomeBanner from "../components/Sections/home/HomeBanner";
import sections from "../data/sections.json";
import { loaderActions } from "../redux/slices/loaderSlice";

// const DynHomeBanner = dynamic(import("../components/Sections/home/HomeBanner"));
// const DynBestProducts = dynamic(import("../components/Sections/home/BestProducts"), {
//   ssr: false,
// });
// const DynCta = dynamic(import("../components/Sections/home/Cta"), {
//   ssr: false,
// });
// const DynBooksSection = dynamic(import("../components/Sections/home/BooksSection"), {
//   ssr: false,
// });

export default function Home() {
  const dispatch = useDispatch();
  const pageStructure = sections.pages.find((page) => page.id == "home");

  useEffect(() => {
    dispatch(loaderActions.hideLoader());
  }, []);

  return (
    <>
      <Head>
        <title>Zera3a Market</title>
        <meta name="description" content="Zera3a Market Website" />
      </Head>
      <div className="container-fluid">
        <div className="row">
          <HomeBanner />

          <LazyLoad>
            {!pageStructure.sections.best_products.hidden && (
              <BestProducts
                order={pageStructure.sections.best_products.position}
                cards_in_slide={pageStructure.sections.best_products.cards_in_slide}
              />
            )}
          </LazyLoad>

          <LazyLoad>
            {!pageStructure.sections.cta.hidden && (
              <Cta order={pageStructure.sections.cta.position} />
            )}
          </LazyLoad>

          <LazyLoad>
            {!pageStructure.sections.books.hidden && (
              <BooksSection
                order={pageStructure.sections.books.position}
                cards_in_slide={pageStructure.sections.books.cards_in_slide}
                structure={pageStructure.sections.books}
              />
            )}
          </LazyLoad>
        </div>
      </div>
    </>
  );
}
