import { useRouter } from "next/router";
import React from "react";
import { withTranslation } from "react-multi-lang";
import Breadcrumbs from "../../components/layout/Reusable/Breadcrumbs";
import CategoryContent from "../../components/Sections/categories/CategoryContent";
import Categories from "../../data/category.json";
import Products from "../../data/products.json";

function Slug(props) {
  const router = useRouter();
  return (
    <>
      <Breadcrumbs breadcrumb={{ pagename: router.query.slug }} />
      <CategoryContent Items={props.Items} />
    </>
  );
}

export const getStaticPaths = async () => {
  const paths = Categories.map((prod) => {
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
  return {
    props: {
      Items: Products.filter((prod) => prod.CategoryName == context.params.slug),
    },
  };
};
export default withTranslation(Slug);
