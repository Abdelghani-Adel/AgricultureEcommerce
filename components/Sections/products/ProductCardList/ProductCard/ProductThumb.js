import Link from "next/Link";

const ProductThumb = (props) => {
  const { product } = props;
  return (
    <div className="andro_product-thumb text-center">
      <Link href={props.productPath}>
        <img src={"../assets/img/products/7.png"} alt={product.title} />
      </Link>
    </div>
  );
};

export default ProductThumb;
