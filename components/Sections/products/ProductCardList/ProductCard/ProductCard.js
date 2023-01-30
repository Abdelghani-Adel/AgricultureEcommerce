import { withTranslation } from "react-multi-lang";
import ProductDetails from "./ProductDetails";
import ProductFooter from "./ProductFooter";
import ProductStickers from "./ProductStickers";
import ProductThumb from "./ProductThumb";

const ProductCard = (props) => {
  const { product } = props;
  const productPath = `/products/${product.Item_Slug}`;

  return (
    <div className="col-md-4 col-sm-6 col-xs-12 masonry-item">
      <div className="andro_product andro_product-has-controls">
        <ProductStickers product={product} productPath={productPath} />
        <ProductThumb product={product} productPath={productPath} />
        <ProductDetails product={product} productPath={productPath} />
        <ProductFooter product={product} productPath={productPath} />
      </div>
    </div>
  );
};

export default withTranslation(ProductCard);
