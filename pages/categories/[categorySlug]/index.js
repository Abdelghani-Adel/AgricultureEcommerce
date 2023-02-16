import { useRouter } from "next/router";
import { withTranslation } from "react-multi-lang";
import Breadcrumbs from "../../../components/layout/Reusable/Breadcrumbs";
import CategoryProducts from "../../../components/Sections/categories/CategoryProducts/CategoryProducts";
import SubCategories from "../../../components/Sections/categories/SubCategories/SubCategories";
import { fetchCategoryProducts, fetchSubCategories } from "../../../services/categoryServices";

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

export const getServerSideProps = async (context) => {
  const categoryId = context.query.id;

  const subCategories = await fetchSubCategories(categoryId, "ar");
  if (subCategories.length > 0) {
    return {
      props: {
        categories: subCategories,
        categorySlug: context.params.categorySlug,
        showProducts: false,
      },
    };
  }

  const products = await fetchCategoryProducts(categoryId, "ar");
  return {
    props: {
      products: products,
      categorySlug: context.params.categorySlug,
      showProducts: true,
    },
  };
};
export default withTranslation(CategorySingle);
