import React, { Component } from "react";
import Head from "next/head";
// import Breadcrumbs from "../../components/Breadcrumbs";
import Breadcrumbs from "../../components/layout/Reusable/Breadcrumbs";
import Content from "../../components/products/content";
import Products from "../../data/products.json";
import { withTranslation } from "react-multi-lang";
import { useRouter } from "next/router";

function Slug(props) {
  const router = useRouter();
  console.log("slug ", router.query.slug);
  return (
    <>
      <Breadcrumbs breadcrumb={{ pagename: router.query.slug }} />
      <Content ItemDetails={props.ItemDetails} />
    </>
  );
}

//  class Slug extends Component {
//     render() {
//         return (
//             <>
//                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
//                 <Content ItemDetails={this.props.ItemDetails}/>
//             </>
//         )
//     }
// }

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
