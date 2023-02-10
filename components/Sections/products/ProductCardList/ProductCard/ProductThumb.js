import Link from "next/Link";

const ProductThumb = (props) => {
  const { product } = props;
  return (
    <div className="product_card--thumb">
      <Link href={props.productPath}>
        <img src="assets/img/products/1.png" alt={product.title} />
      </Link>
    </div>
  );
};

export default ProductThumb;
