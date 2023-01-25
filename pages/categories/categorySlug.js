import { useRouter } from "next/router";
import React from "react";
import { withTranslation } from "react-multi-lang";
import Breadcrumbs from "../../components/layout/Reusable/Breadcrumbs";
import CategoryContent from "../../components/Sections/categories/CategoryContent";
import Categories from "../../data/category.json";
import Products from "../../data/products.json";

const categories = [
  {
    FAClassificationId: 82,
    FACompany_Id: 1,
    FAEntityID: 81,
    FAClassification_ParentId: 81,
    FAClassificationCode: "CAT0000082",
    RefLocal: null,
    FAClassificationName: "1 مبيدات",
    FAClassificationPath: "//CATE0000000",
    FAClassificationPathName: "//Categories",
    IsItemOnly: false,
    Cate_Id: null,
    Cost_Meth_Id: null,
    WH_Id: null,
    Wh_Loc_Id: null,
    FAClassificationHTML: "",
    FAClassificationSlug: "mopidat",
    LastModified: null,
    EntryDate: null,
    ComputerNameOrIP: null,
    User_Id: 1,
    Active: null,
    ClassificationChildren: [],
    leaf: false,
    FAClassificationImage:
      "http://192.168.10.251:800\\wwwroot\\uploads\\thumbnail_6094_ebc1996f-a20a-4064-8d01-680467c7b75c.jpg",
  },
  {
    FAClassificationId: 82,
    FACompany_Id: 1,
    FAEntityID: 81,
    FAClassification_ParentId: 81,
    FAClassificationCode: "CAT0000082",
    RefLocal: null,
    FAClassificationName: "2 مبيدات",
    FAClassificationPath: "//CATE0000000",
    FAClassificationPathName: "//Categories",
    IsItemOnly: false,
    Cate_Id: null,
    Cost_Meth_Id: null,
    WH_Id: null,
    Wh_Loc_Id: null,
    FAClassificationHTML: "",
    FAClassificationSlug: "mopidat2",
    LastModified: null,
    EntryDate: null,
    ComputerNameOrIP: null,
    User_Id: 1,
    Active: null,
    ClassificationChildren: [],
    leaf: false,
    FAClassificationImage:
      "http://192.168.10.251:800\\wwwroot\\uploads\\thumbnail_6094_ebc1996f-a20a-4064-8d01-680467c7b75c.jpg",
  },
];

function Slug(props) {
  const router = useRouter();
  console.log(props);
  return (
    <>
      <Breadcrumbs breadcrumb={{ pagename: router.query.slug }} />
      <h2>{props.Items[0].FAClassificationName}</h2>
      {/* <CategoryContent Items={props.Items} /> */}
    </>
  );
}

export const getStaticPaths = async () => {
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
  const data = await response.json();

  const paths = categories.map((category) => {
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
  const data = await response.json();

  return {
    props: {
      Items: categories.filter((cat) => cat.FAClassificationSlug == context.params.categorySlug),
    },
  };
};
export default withTranslation(Slug);
