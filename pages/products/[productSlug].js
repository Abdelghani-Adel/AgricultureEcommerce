import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { withTranslation } from "react-multi-lang";
import { useDispatch } from "react-redux";
import Breadcrumbs from "../../components/layout/Reusable/Breadcrumbs";
import ProductSingle from "../../components/Sections/products/ProductSingle/ProductSingle";
import { loaderActions } from "../../redux/slices/loaderSlice";
import { fetchItemDetails } from "../../services/productServices";

function Slug(props) {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loaderActions.hideLoader());
  }, []);

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
