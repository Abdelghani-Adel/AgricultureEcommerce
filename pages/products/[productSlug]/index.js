import React from "react";
// import Breadcrumbs from "../../components/Breadcrumbs";
import { useRouter } from "next/router";
import { withTranslation } from "react-multi-lang";
import Breadcrumbs from "../../../components/layout/Reusable/Breadcrumbs";
import ProductSingle from "../../../components/Sections/products/ProductSingle/ProductSingle";
import Products from "../../../data/products.json";

function Slug(props) {
  const router = useRouter();

  console.log(props.test);

  return (
    <>
      <Breadcrumbs breadcrumb={{ pagename: router.query.productSlug }} />
      <ProductSingle ItemDetails={props.productDetails} />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const productDetails = Products.filter((prod) => prod.slug == context.params.productSlug)[0];
  return {
    props: {
      productDetails: productDetails,
      test: process.env.API_SERVER,
    },
  };
};

export default withTranslation(Slug);
