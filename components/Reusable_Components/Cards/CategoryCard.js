import Link from "next/Link";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../../redux/slices/loaderSlice";
import Image from "next/image";

const CategoryCard = ({ category, style }) => {
  const dispatch = useDispatch();
  const showLoader = () => {
    dispatch(loaderActions.showLoader());
  };

  console.log(category);

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
          <div className="category_card--thumb">
            <Image src={category.FAClassificationImage} fill style={{ objectFit: "contain" }} />
          </div>
          <div className="category_card--body">
            <h5 className="txt-primary">{category.FAClassificationName}</h5>
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
