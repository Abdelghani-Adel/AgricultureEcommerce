import { Fragment } from "react";
import CategoryItem from "./CategoryItem/CategoryItem";

const CategoryItemList = (props) => {
  const { currentItems } = props;
  return (
    <Fragment>
      {currentItems.length > 0 ? (
        currentItems.map((item, index) => <CategoryItem key={index} item={item} />)
      ) : (
        <h1 className="text-center m-4">
          No Products Found For <span className="text-danger fw-bold">{props.slug}</span> Category!
        </h1>
      )}
    </Fragment>
  );
};

export default CategoryItemList;
