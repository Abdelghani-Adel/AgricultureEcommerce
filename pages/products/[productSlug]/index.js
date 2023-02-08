import React from "react";
import { useRouter } from "next/router";
import { withTranslation } from "react-multi-lang";
import Breadcrumbs from "../../../components/layout/Reusable/Breadcrumbs";
import ProductSingle from "../../../components/Sections/products/ProductSingle/ProductSingle";
import Products from "../../../data/products.json";
import { getAuthHeaders } from "../../../helper/auth";

function Slug(props) {
  const router = useRouter();
  console.log(props);

  return (
    <>
      <Breadcrumbs breadcrumb={{ pagename: router.query.productSlug }} />
      <ProductSingle ItemDetails={props.productDetails} />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const productDetails = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/getItemsDetails`,
    {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify({
        Item_Id: context.query.id,
        lang: "AR",
      }),
    }
  );

  const details = await productDetails.json();
  return {
    props: {
      productDetails: details,
    },
  };
};

export default withTranslation(Slug);
