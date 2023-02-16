import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import HomeContent from "../components/Sections/home/HomeContent";
import Products from "../data/products.json";

export default function Home(props) {
  return <HomeContent ProductList={Products} BooksInfoList={props.BooksInfoList} />;
}

export const getStaticProps = async () => {
  return {
    props: {
      ProductList: Products,
      BooksInfoList: Products,
    },
  };
};
