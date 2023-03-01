import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { withTranslation } from "react-multi-lang";
import { useDispatch } from "react-redux";
import Breadcrumbs from "../../components/Reusable_Components/Breadcrumbs";
import ProductSingle from "../../components/Sections/products/ProductSingle/ProductSingle";
import { loaderActions } from "../../redux/slices/loaderSlice";
import { fetchItemDetails } from "../../services/productServices";

function Slug(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  console.log(props);

  useEffect(() => {
    dispatch(loaderActions.hideLoader());
  }, []);

  return (
    <>
      <Head>
        <title>{props.productDetails.header_title}</title>
        <meta property="og:title" content={props.productDetails.header_title} />
        <meta name="description" content={props.productDetails.header_description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="devsdiamond.com" />
        <meta property="og:image" content={`https://devsdiamond.com/img/offer.jpeg`} />
      </Head>
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
