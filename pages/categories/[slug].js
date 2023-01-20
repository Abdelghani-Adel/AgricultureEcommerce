import React, { Component } from "react";
import Head from "next/head";
import Breadcrumbs from "../../components/layout/Reusable/Breadcrumbs";
import Content from "../../components/sections/categories/Content";
import Products from "../../data/products.json";
import Categories from "../../data/category.json";
import { withTranslation } from "react-multi-lang";
import { useRouter } from "next/router";

function Slug(props) {
  const router = useRouter();
  //  console.log("slug " ,router.query.slug);
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="#" />
      </Head>
      <Breadcrumbs breadcrumb={{ pagename: router.query.slug }} />
      <Content Items={props.Items} />
    </>
  );
}

//  class Slug extends Component {
//     render() {
//         const router = useRouter();
//         console.log("slug " ,router.query.slug);

//         return (
//             <>
//              <Head>
//                     <title></title>
//                     <meta
//                         name="description"
//                         content="#"
//                     />
//                      <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
//                 </Head>
//                 <Breadcrumbs breadcrumb={{ pagename: this.props.slug }} />
//                 <Content Items={this.props.Items}/>

//             </>
//         )
//     }
// }

export const getStaticPaths = async () => {
  const paths = Categories.map((prod, index) => {
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
