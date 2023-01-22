import React from "react";
// import Breadcrumbs from "../../components/Breadcrumbs";
import { useRouter } from "next/router";
import { withTranslation } from "react-multi-lang";
import Breadcrumbs from "../../components/layout/Reusable/Breadcrumbs";
import ProductSingle from "../../components/Sections/products/ProductSingle";
import Products from "../../data/products.json";

function Slug(props) {
  const router = useRouter();
  // const productSlug = router.query.slug;
  // const productSlug = router.query.slug;
  // const itemDetails = Products.filter((prod) => prod.slug == productSlug)[0];

  return (
    <>
      <Breadcrumbs breadcrumb={{ pagename: router.query.slug }} />
      <ProductSingle ItemDetails={props.ItemDetails} />
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = Products.map((prod, index) => {
    return {
      params: { slug: `${prod.slug}` },
    };
  });
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking' // will be passed to the page component as props
  };
};
export const getStaticProps = async (context) => {
  const items = Products.filter((prod) => prod.slug == context.params.slug);
  return {
    props: {
      ItemDetails: items[0],
    },
  };
};
export default withTranslation(Slug);
