import Link from "next/Link";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../../redux/slices/loaderSlice";

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
        <div className="card catg_card">
          <img className="card-img-top" src={category.FAClassificationImage} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{category.FAClassificationName}</h5>
            <div
              className="card-text"
              dangerouslySetInnerHTML={{ __html: category.FAClassificationDesc }}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
