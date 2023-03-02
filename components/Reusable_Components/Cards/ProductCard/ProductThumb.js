import Link from "next/Link";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../../../redux/slices/loaderSlice";
import Image from "next/image";

const ProductThumb = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const showLoader = () => {
    dispatch(loaderActions.showLoader());
  };

  return (
    <div className="product_card--thumb">
      <Link
        href={props.productPath}
        onClick={showLoader}
        className="position-relative d-block h-100 w-100"
      >
        <Image
          src={product.Item_Image}
          alt="Product Pic"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </Link>
    </div>
  );
};

export default ProductThumb;
