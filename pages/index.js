import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Content from "../components/sections/home/Content";
import Products from "../data/products.json";
const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="#" />
      </Head>
      <Content
        ProductList={props.ProductList}
        BooksInfoList={props.BooksInfoList}
      />
      {/* <Instagram classname={{ style: "secondary-bg" }} /> */}
      {/* <Footer footer={{ style:"", logo:"assets/img/logo.png" }} /> */}
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      ProductList: Products,
      BooksInfoList: Products,
    }, // will be passed to the page component as props
  };
};
