import { Fragment } from "react";
import CategoryItem from "./CategoryItem/CategoryItem";

const CategoryItemList = (props) => {
  const { currentItems } = props;
  return (
    <Fragment>
      {currentItems.map((item, index) => (
        <CategoryItem key={index} item={item} />
      ))}
    </Fragment>
  );
};

export default CategoryItemList;
