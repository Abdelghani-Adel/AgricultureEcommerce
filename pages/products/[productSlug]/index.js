import React from "react";
import { useRouter } from "next/router";
import { withTranslation } from "react-multi-lang";
import Breadcrumbs from "../../../components/layout/Reusable/Breadcrumbs";
import ProductSingle from "../../../components/Sections/products/ProductSingle/ProductSingle";
import Products from "../../../data/products.json";
import { getAuthHeaders } from "../../../helper/auth";
import { fetchItemDetails } from "../../../services/productServices";

function Slug(props) {
  const router = useRouter();

  return (
    <>
      <Breadcrumbs breadcrumb={{ pagename: router.query.productSlug }} />
      <ProductSingle ItemDetails={props.productDetails} />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const Item_Id = context.query.id;
  const details = await fetchItemDetails(Item_Id, "ar");
  return {
    props: {
      productDetails: details,
    },
  };
};

export default withTranslation(Slug);
