import Link from "next/Link";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../../../../redux/slices/loaderSlice";

const ProductThumb = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const showLoader = () => {
    dispatch(loaderActions.showLoader());
  };

  return (
    <div className="product_card--thumb">
      <Link href={props.productPath} onClick={showLoader}>
        <img src={product.Item_Image} alt={product.title} />
      </Link>
    </div>
  );
};

export default ProductThumb;
