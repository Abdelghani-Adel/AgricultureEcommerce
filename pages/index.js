import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeContent from "../components/Sections/home/HomeContent";
import Products from "../data/products.json";
import { getCartDetails } from "../redux/slices/cartSlice";

export default function Home(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartDetails());
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
