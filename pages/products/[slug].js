import React from "react";
// import Breadcrumbs from "../../components/Breadcrumbs";
import { useRouter } from "next/router";
import { withTranslation } from "react-multi-lang";
import Breadcrumbs from "../../components/layout/Reusable/Breadcrumbs";
import ProductSingle from "../../components/Sections/products/ProductSingle";
import Products from "../../data/products.json";

function Slug(props) {
  const router = useRouter();

  return (
    <>
      <Breadcrumbs breadcrumb={{ pagename: router.query.slug }} />
      <ProductSingle ItemDetails={props.ItemDetails} />
    </>
  );
}

export const getStaticPaths = async () => {
  // API fetch to get all the product slugs
  const paths = Products.map((prod, index) => {
    return {
      params: { slug: `${prod.slug}` },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  // API fetch to get all products
  const items = Products.filter((prod) => prod.slug == context.params.slug);
  return {
    props: {
      ItemDetails: items[0],
    },
  };
};
export default withTranslation(Slug);
