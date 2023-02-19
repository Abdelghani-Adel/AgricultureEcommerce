import { withTranslation } from "react-multi-lang";
import ProductDetails from "./ProductDetails";
import ProductFooter from "./ProductFooter";
import ProductStickers from "./ProductStickers";
import ProductThumb from "./ProductThumb";

const ProductCard = (props) => {
  const { product, style } = props;
  console.log("style " ,style)
  const productPath = `/products/${product.Item_Slug || "slugNotFound"}?id=${product.Item_Id}`;

  return (
    <div style={style}>
      <div className="product_card">
        <ProductStickers product={product} productPath={productPath} />
        <ProductThumb product={product} productPath={productPath} />
        <ProductDetails product={product} productPath={productPath} />
        <ProductFooter product={product} productPath={productPath} />
      </div>
    </div>
  );
};

export default withTranslation(ProductCard);
