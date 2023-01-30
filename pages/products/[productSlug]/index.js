import React from "react";
// import Breadcrumbs from "../../components/Breadcrumbs";
import { useRouter } from "next/router";
import { withTranslation } from "react-multi-lang";
import Breadcrumbs from "../../../components/layout/Reusable/Breadcrumbs";
import ProductSingle from "../../../components/Sections/products/ProductSingle";
import Products from "../../../data/products.json";

function Slug(props) {
  const router = useRouter();

  return (
    <>
      <Breadcrumbs breadcrumb={{ pagename: router.query.slug }} />
      <ProductSingle ItemDetails={props.productDetails} />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const productDetails = Products.filter((prod) => prod.slug == context.params.productSlug)[0];
  return {
    props: {
      productDetails: productDetails,
    },
  };
};

export default withTranslation(Slug);
