import Link from "next/Link";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../../../redux/slices/loaderSlice";

const SearchResult = ({ searchResult, hideResult }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(loaderActions.showLoader());
    hideResult();
  };
  return (
    <div className="search_result border_1 border_primary">
      <ul>
        {searchResult.map((result, i) => (
          <li className="result" key={i} onClick={clickHandler}>
            <Link
              href={{
                pathname: `/product/${result.ItemSlug}`,
                query: { id: `${result.ItemId}`, flag: result.itemCateFlg },
              }}
            >
              {result.ItemName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
