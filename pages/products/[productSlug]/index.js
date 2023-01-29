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

export const getStaticPaths = async () => {
  // API fetch to get all the product slugs
  const response = await fetch(
    "http://192.168.10.251:800/api/ECommerceSetting/getItemMainByCategoryAll",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lang: "en",
        Cate_Id: 87,
        limit: 6,
        start: 1,
      }),
    }
  );

  const paths = Products.map((prod) => {
    return {
      params: { productSlug: `${prod.slug}` },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  // getting all slugs, then I will filter them to extract out the productID based on product Slug
  // const getAllSlugs = await fetch(
  //   "http://192.168.10.251:800/api/ECommerceSetting/getItemMainByCategoryAll",
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       lang: "en",
  //       Cate_Id: 87,
  //       limit: 6,
  //       start: 1,
  //     }),
  //   }
  // );
  // const allSlugs = await getAllSlugs.json();
  // const productObject = allSlugs.filter(
  //   (product) => product.Item_Slug == context.params.productSlug
  // )[0];
  // const productID = productObject.Item_Id;

  // const fetchProductDetails = await fetch(
  //   "http://192.168.10.251:800/api/ECommerceSetting/getItemsDetails",
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       Item_Id: productID, // context.params.productID
  //       lang: "en",
  //     }),
  //   }
  // );

  // const product = fetchProductDetails[0];

  const productDetails = Products.filter((prod) => prod.slug == context.params.productSlug)[0];
  return {
    props: {
      productDetails: productDetails,
    },
  };
};
export default withTranslation(Slug);
