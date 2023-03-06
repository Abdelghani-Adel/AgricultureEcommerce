import Link from "next/Link";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../../redux/slices/loaderSlice";
import Image from "next/image";

const CategoryCard = ({ category, style }) => {
  const dispatch = useDispatch();
  const showLoader = () => {
    dispatch(loaderActions.showLoader());
  };

  return (
    <div className={style}>
      <Link
        href={{
          pathname: `/categories/${category.FAClassificationSlug}`,
          query: { id: `${category.FAClassificationId}` },
        }}
        onClick={showLoader}
      >
        <div className="category_card border_1 border_primary">
          <div className="category_card--thumb position-relative">
            <Image
              src={category.FAClassificationImage}
              fill
              style={{ objectFit: "contain" }}
              alt="Category Pic"
            />
          </div>
          <div className="category_card--body">
            <p className="txt-primary h5 fw-bold">{category.FAClassificationName}</p>
            <div
              className="text-muted"
              dangerouslySetInnerHTML={{ __html: category.FAClassificationDesc }}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
