import { Head, Html } from "next/document";
import { useRouter } from "next/router";
import { withTranslation } from "react-multi-lang";
import Breadcrumbs from "../../../components/layout/Reusable/Breadcrumbs";
import CategoryProducts from "../../../components/Sections/categories/CategoryProducts/CategoryProducts";
import SubCategories from "../../../components/Sections/categories/SubCategories/SubCategories";

const CategorySingle = (props) => {
  const { categories, categorySlug, showProducts, products } = props;
  const router = useRouter();
  console.log(products);
  return (
    <>
      <Breadcrumbs breadcrumb={{ pagename: router.query.categorySlug }} />
      {showProducts ? (
        <CategoryProducts products={products} slug={router.query.categorySlug} />
      ) : (
        <SubCategories categories={categories} />
      )}
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  // API fetch to get the array of sub_categories
  const subCategoriesRes = await fetch(
    "http://192.168.10.251:800/api/ECommerceSetting/GetCategoriesMenu",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lang: ctx.query.lang,
        FAClassification_ParentId: ctx.query.id,
      }),
    }
  );
  const categories = [
    {
      FAClassificationName: "مبيدات",
      FAClassificationPath: "//CATE0000000",
      FAClassificationPathName: "//Categories",
      IsItemOnly: false,
      FAClassificationSlug: "mopidat",
      ClassificationChildren: [
        {
          FAClassificationName: "2 مبيدات",
          FAClassificationPath: "//CATE0000000",
          FAClassificationPathName: "//Categories",
          IsItemOnly: true,
          FAClassificationSlug: "mopidat2",
          ClassificationChildren: [],
        },
        {
          FAClassificationName: "2 مبيدات",
          FAClassificationPath: "//CATE0000000",
          FAClassificationPathName: "//Categories",
          IsItemOnly: true,
          FAClassificationSlug: "mopidat2",
          ClassificationChildren: [],
        },
        {
          FAClassificationName: "2 مبيدات",
          FAClassificationPath: "//CATE0000000",
          FAClassificationPathName: "//Categories",
          IsItemOnly: true,
          FAClassificationSlug: "mopidat2",
          ClassificationChildren: [],
        },
        {
          FAClassificationName: "2 مبيدات",
          FAClassificationPath: "//CATE0000000",
          FAClassificationPathName: "//Categories",
          IsItemOnly: true,
          FAClassificationSlug: "mopidat2",
          ClassificationChildren: [],
        },
      ],
    },
    {
      FAClassificationName: "Organic",
      FAClassificationPath: "//CATE0000000",
      FAClassificationPathName: "//Categories",
      IsItemOnly: true,
      FAClassificationSlug: "organic",
      ClassificationChildren: [],
    },
    {
      FAClassificationName: "Organic 2",
      FAClassificationPath: "//CATE0000000",
      FAClassificationPathName: "//Categories",
      IsItemOnly: true,
      FAClassificationSlug: "organic2",
      ClassificationChildren: [],
    },
    {
      FAClassificationName: "2 مبيدات",
      FAClassificationPath: "//CATE0000000",
      FAClassificationPathName: "//Categories",
      IsItemOnly: true,
      FAClassificationSlug: "mopidat2",
      ClassificationChildren: [],
    },
  ];
  const subCategories = categories.filter(
    (cat) => cat.FAClassificationSlug == ctx.params.categorySlug
  );
  if (subCategories[0].ClassificationChildren.length > 0) {
    return {
      props: {
        categories: subCategories,
        categorySlug: ctx.params.categorySlug,
        showProducts: false,
      },
    };
  }

  // API fetch to get the array of products | send slug || get the products
  const productsRes = await fetch(
    "http://192.168.10.251:800/api/ECommerceSetting/getItemMainByCategory",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lang: ctx.query.lang,
        Cate_Id: ctx.query.id,
        limit: 6,
        start: 1,
        // start: ctx.query.start ? ctx.query.start : 1,
      }),
    }
  );
  const products = await productsRes.json();

  return {
    props: {
      products: products,
      categorySlug: ctx.params.categorySlug,
      showProducts: true,
    },
  };
};

// export const getStaticProps = async (context) => {
//   const categories = [
//     {
//       FAClassificationName: "مبيدات",
//       FAClassificationPath: "//CATE0000000",
//       FAClassificationPathName: "//Categories",
//       IsItemOnly: false,
//       FAClassificationSlug: "mopidat",
//       ClassificationChildren: [
//         {
//           FAClassificationName: "2 مبيدات",
//           FAClassificationPath: "//CATE0000000",
//           FAClassificationPathName: "//Categories",
//           IsItemOnly: true,
//           FAClassificationSlug: "mopidat2",
//           ClassificationChildren: [],
//         },
//         {
//           FAClassificationName: "2 مبيدات",
//           FAClassificationPath: "//CATE0000000",
//           FAClassificationPathName: "//Categories",
//           IsItemOnly: true,
//           FAClassificationSlug: "mopidat2",
//           ClassificationChildren: [],
//         },
//         {
//           FAClassificationName: "2 مبيدات",
//           FAClassificationPath: "//CATE0000000",
//           FAClassificationPathName: "//Categories",
//           IsItemOnly: true,
//           FAClassificationSlug: "mopidat2",
//           ClassificationChildren: [],
//         },
//         {
//           FAClassificationName: "2 مبيدات",
//           FAClassificationPath: "//CATE0000000",
//           FAClassificationPathName: "//Categories",
//           IsItemOnly: true,
//           FAClassificationSlug: "mopidat2",
//           ClassificationChildren: [],
//         },
//       ],
//     },
//     {
//       FAClassificationName: "Organic",
//       FAClassificationPath: "//CATE0000000",
//       FAClassificationPathName: "//Categories",
//       IsItemOnly: true,
//       FAClassificationSlug: "organic",
//       ClassificationChildren: [],
//     },
//     {
//       FAClassificationName: "Organic 2",
//       FAClassificationPath: "//CATE0000000",
//       FAClassificationPathName: "//Categories",
//       IsItemOnly: true,
//       FAClassificationSlug: "organic2",
//       ClassificationChildren: [],
//     },
//     {
//       FAClassificationName: "2 مبيدات",
//       FAClassificationPath: "//CATE0000000",
//       FAClassificationPathName: "//Categories",
//       IsItemOnly: true,
//       FAClassificationSlug: "mopidat2",
//       ClassificationChildren: [],
//     },
//   ];

//   // API fetch to get the array of sub_categories | send slug || get the sub_categories
//   // if the array.length == 0
//   // return {
//   //   props: {
//   //     categories: subCategories,
//   //     categorySlug: context.params.categorySlug,
//   //     showProducts: false,
//   //   },
//   // };

//   // API fetch to get the array of products for the category | send slug || get the products
//   // if the array.length == 0
//   // return {
//   //   props: {
//   //     products: products_Array,
//   //     categorySlug: context.params.categorySlug,
//   //     showProducts: true,
//   //   },
//   // };

//   // API fetch to get the products of the category if => IsItemOnly = true
//   const response = await fetch(
//     "http://192.168.10.251:800/api/ECommerceSetting/getItemMainByCategory",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         lang: context.query.lang,
//         Cate_Id: 87,
//         limit: 6,
//         start: 1,
//       }),
//     }
//   );
//   const products = await response.json();

//   const subCategories = categories.filter(
//     (cat) => cat.FAClassificationSlug == context.params.categorySlug
//   );

//   return {
//     props: {
//       categories: subCategories[0].ClassificationChildren,
//       products: products.data,
//       categorySlug: context.params.categorySlug,
//       showProducts: subCategories[0].IsItemOnly,
//     },
//   };
// };

export default withTranslation(CategorySingle);
