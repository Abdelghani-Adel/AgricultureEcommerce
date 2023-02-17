import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeContent from "../components/Sections/home/HomeContent";
import Products from "../data/products.json";
import { loaderActions } from "../redux/slices/loaderSlice";

export default function Home(props) {
  const dispatch = useDispatch();
  const session = useSession();
  // console.log(session);

  useEffect(() => {
    dispatch(loaderActions.hideLoader());
  }, []);

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
