import HomeContent from "../components/Sections/home/HomeContent";
import Products from "../data/products.json";
// import { Inter } from "@next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return <HomeContent ProductList={props.ProductList} BooksInfoList={props.BooksInfoList} />;
}

export const getStaticProps = async () => {
  return {
    props: {
      ProductList: Products,
      BooksInfoList: Products,
    }, // will be passed to the page component as props
  };
};
