import { useSession } from "next-auth/react";
import HomeContent from "../components/Sections/home/HomeContent";
import Products from "../data/products.json";

export default function Home(props) {
  const session = useSession();
  // session.data && console.log(session.data.user.token);
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
