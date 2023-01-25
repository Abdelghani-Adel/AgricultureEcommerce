import { useRouter } from "next/router";
import { withTranslation } from "react-multi-lang";
import Breadcrumbs from "../../../components/layout/Reusable/Breadcrumbs";
import CategoryProducts from "../../../components/Sections/categories/CategoryProducts/CategoryProducts";
import SubCategories from "../../../components/Sections/categories/SubCategories/SubCategories";

const CategorySingle = (props) => {
  const { categories, categorySlug, showProducts, products } = props;
  const router = useRouter();
  return (
    <>
      <Breadcrumbs breadcrumb={{ pagename: router.query.categorySlug }} />
      {showProducts ? (
        <CategoryProducts products={products} />
      ) : (
        <SubCategories categories={categories} />
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  // API fetch to get all the category slugs
  const response = await fetch("http://192.168.10.251:800/api/ECommerceSetting/GetCategoriesMenu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lang: "en",
      FAClassification_ParentId: 81,
    }),
  });
  // const slugs = await response.json();

  // Static data for designing purposes
  const slugs = [
    {
      FAClassificationSlug: "mopidat",
    },
    {
      FAClassificationSlug: "mopidat2",
    },
    {
      FAClassificationSlug: "supplements",
    },
    {
      FAClassificationSlug: "organic",
    },
    {
      FAClassificationSlug: "organic2",
    },
  ];

  const paths = slugs.map((category) => {
    return {
      params: { categorySlug: `${category.FAClassificationSlug}` },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
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

  // API fetch to get the subCategories if => IsItemOnly = false

  // API fetch to get the products of the category if => IsItemOnly = true
  const response = await fetch(
    "http://192.168.10.251:800/api/ECommerceSetting/getItemMainByCategory",
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
  const products = await response.json();

  const subCategories = categories.filter(
    (cat) => cat.FAClassificationSlug == context.params.categorySlug
  );

  return {
    props: {
      categories: subCategories[0].ClassificationChildren,
      products: products.data,
      categorySlug: context.params.categorySlug,
      showProducts: subCategories[0].IsItemOnly,
    },
  };
};

export default withTranslation(CategorySingle);
