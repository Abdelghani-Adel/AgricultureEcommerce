import { Fragment } from "react";
import ProductCard from "../../../Reusable_Components/Cards/ProductCard/ProductCard";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";

const ProductCardList = (props) => {
  const { products } = props;
  const lang = useSelector((state) => state.lang);
  return (
    <Fragment>
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductCard key={index} product={product} style={"col-md-4 col-sm-6 col-xs-12"} />
        ))
      ) : (
        <h1 className="text-center m-4">{lang && props.t("Products.NoProducts")}</h1>
      )}
    </Fragment>
  );
};

export default withTranslation(ProductCardList);
