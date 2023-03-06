import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductCardList from "../../components/Sections/products/ProductCardList/ProductCardList";
import { loaderActions } from "../../redux/slices/loaderSlice";
import { getSearchItem } from "../../services/Filter";

const FilterResult = (props) => {
  const products = props.products.data;
  const dispatch = useDispatch();

  dispatch(loaderActions.hideLoader());

  return (
    <div className="section pt-4">
      <div className="container">
        <div className="row">
          <ProductCardList products={products ? products : []} />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const flag = context.query.flag;
  const products = await getSearchItem(id, flag);

  return {
    props: {
      products: products,
    },
  };
};

export default FilterResult;
