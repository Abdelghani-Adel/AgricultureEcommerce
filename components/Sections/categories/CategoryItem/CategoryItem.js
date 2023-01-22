import { withTranslation } from "react-multi-lang";
import CategoryItemDetails from "./CategoryItemDetails";
import CategoryItemFooter from "./CategoryItemFooter";
import CategoryItemStickers from "./CategoryItemStickers";
import CategoryItemThumb from "./CategoryItemThumb";

const CategoryItem = (props) => {
  const { item } = props;
  return (
    <div className="col-md-4 col-sm-6 col-xs-12 masonry-item">
      <div className="andro_product andro_product-has-controls">
        <CategoryItemStickers item={item} />
        <CategoryItemThumb item={item} />
        <CategoryItemDetails item={item} />
        <CategoryItemFooter item={item} />
      </div>
    </div>
  );
};

export default withTranslation(CategoryItem);
