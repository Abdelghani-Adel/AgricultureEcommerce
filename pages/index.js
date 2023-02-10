import { useSession } from "next-auth/react";
import HomeContent from "../components/Sections/home/HomeContent";
import Products from "../data/products.json";

export default function Home(props) {
  const session = useSession();
  // debugger;
  session.data && console.log(session);

  // const nnn = new Date();

  // nnn.setHours(nnn.getHours() + 1);
  // console.log(nnn.getTime());
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
