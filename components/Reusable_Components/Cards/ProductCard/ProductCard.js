import { encrypt } from "../../../../helper/crypto";
import ProductDetails from "./ProductDetails";
import ProductFooter from "./ProductFooter";
import ProductStickers from "./ProductStickers";
import ProductThumb from "./ProductThumb";

const ProductCard = (props) => {
  const { product, style } = props;
  const encryptedID = encrypt(`${product.Item_Id}`);
  const productPath = `/products/${product.Item_Slug || "slugNotFound"}?id=${encryptedID}`;

  return (
    <div className={style}>
      <div className="product_card">
        <ProductStickers product={product} productPath={productPath} />
        <ProductThumb product={product} productPath={productPath} />
        <ProductDetails product={product} productPath={productPath} />
        <ProductFooter product={product} productPath={productPath} />
      </div>
    </div>
  );
};

export default ProductCard;
