import { Fragment } from "react";
import ProductCard from "./ProductCard/ProductCard";
import { withTranslation } from "react-multi-lang";

const ProductCardList = (props) => {
  const { products } = props;
  return (
    <Fragment>
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductCard key={index} product={product} style={"col-md-4 col-sm-6 col-xs-12"} />
        ))
      ) : (
        <h1 className="text-center m-4">{props.t("Products.NoProducts")}</h1>
      )}
    </Fragment>
  );
};

export default withTranslation(ProductCardList);
