import Link from "next/Link";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../../../redux/slices/loaderSlice";
import { encrypt } from "../../../../helper/crypto";
import SearchResultSingle from "./SearchResultSingle";

const SearchResult = ({
  searchResult,
  hideResult,
  clearSearchText,
  currentFocus,
  setSearchText,
}) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(loaderActions.showLoader());
    hideResult();
    clearSearchText();
  };

  return (
    <div className="search_result border_1 border_primary">
      <ul>
        {searchResult.map((result, i) => (
          <SearchResultSingle
            key={i}
            id={i}
            result={result}
            clickHandler={clickHandler}
            currentFocus={currentFocus}
            setSearchText={setSearchText}
          />
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
