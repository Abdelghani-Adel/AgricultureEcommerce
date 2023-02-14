import { useRouter } from "next/router";
import { withTranslation } from "react-multi-lang";
import Breadcrumbs from "../../../components/layout/Reusable/Breadcrumbs";
import CategoryProducts from "../../../components/Sections/categories/CategoryProducts/CategoryProducts";
import SubCategories from "../../../components/Sections/categories/SubCategories/SubCategories";

const CategorySingle = (props) => {
  const { categories, showProducts, products } = props;
  const router = useRouter();

  return (
    <>
      <Breadcrumbs breadcrumb={{ pagename: router.query.categorySlug }} />
      {showProducts ? (
        <CategoryProducts products={props.products} slug={router.query.categorySlug} />
      ) : (
        <SubCategories categories={categories} />
      )}
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  // API fetch to get the array of sub_categories
  const subCategoriesRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/GetCategoriesMenu`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lang: "ar",
        FAClassification_ParentId: ctx.query.id,
      }),
    }
  );
  const subCategories = await subCategoriesRes.json();

  if (!subCategories) {
    return {
      notFound: true,
    };
  }

  if (subCategories.length > 0) {
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
    `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/getItemMainByCategory`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lang: "ar",
        Cate_Id: ctx.query.id,
        limit: 6,
        start: 1,
      }),
    }
  );
  const products = await productsRes.json();

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: products,
      categorySlug: ctx.params.categorySlug,
      id: ctx.query.id,
      test: products,
      showProducts: true,
    },
  };
};

export default withTranslation(CategorySingle);
