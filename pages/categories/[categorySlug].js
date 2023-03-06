import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { withTranslation } from "react-multi-lang";
import { useDispatch } from "react-redux";
import Breadcrumbs from "../../components/Reusable_Components/Breadcrumbs";
import CategoryProducts from "../../components/Sections/categories/CategoryProducts/CategoryProducts";
import SubCategories from "../../components/Sections/categories/SubCategories/SubCategories";
import { loaderActions } from "../../redux/slices/loaderSlice";
import { subNavActions } from "../../redux/slices/subCategoryNavSlice";
import { fetchCategoryProducts, fetchSubCategories } from "../../services/categoryServices";

const CategorySingle = (props) => {
  const { categories, showProducts } = props;
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(subNavActions.clear());
    };
  }, []);

  useEffect(() => {
    if (categories && categories.length > 0) {
      dispatch(subNavActions.hydrate(categories));
    } else {
      dispatch(subNavActions.clear());
    }
  }, [props]);

  useEffect(() => {
    dispatch(loaderActions.hideLoader());
  });

  return (
    <>
      <Head>
        <title>{props.categorySlug}</title>
        <meta name="description" content={props.categorySlug} />
      </Head>
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
