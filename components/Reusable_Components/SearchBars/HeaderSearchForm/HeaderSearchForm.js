import HeaderSearchFormLabelList from "./HeaderSearchFormLabelList";
import { FaSearch } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";
import { useState } from "react";
import { searchCategory } from "../../../../services/Filter";
import Link from "next/Link";
import SearchResult from "./SearchResult";

const HeaderSearchForm = (props) => {
  const lang = useSelector((state) => state.lang);
  const links = useSelector((state) => state.navbarLinks);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedId, setSelectedId] = useState(0);
  const [searchResult, setSearchResult] = useState();
  const [searchResultShown, setSearchResultShown] = useState(false);

  const inputChangeHandler = async (e) => {
    const searchString = e.target.value;
    const result = await searchCategory(searchString, selectedId);
    setSearchResult(result);
    setSearchResultShown(true);
    if (searchString.length < 1) {
      setSearchResult(null);
      setSearchResultShown(false);
    }
  };

  const hideResult = () => {
    setSearchResultShown(false);
  };

  const focusChangeHandler = () => {
    setSearchResultShown(true);
  };

  const catChangeHandler = (payload) => {
    setSelectedCategory(payload.FAClassificationName);
    setSelectedId(payload.FAClassificationId);
  };

  return (
    <div className="header_search">
      <form className="d-flex">
        <HeaderSearchFormLabelList
          selectedCategory={selectedCategory}
          links={links}
          catChangeHandler={catChangeHandler}
        />
        <div className="header_search--input">
          {lang && (
            <input
              type="text"
              className="form-control"
              placeholder={props.t("Navbar.Search")}
              name="search"
              onChange={inputChangeHandler}
              onFocus={focusChangeHandler}
            />
          )}
          <button type="submit" aria-label="Search">
            <FaSearch />
          </button>

          {searchResult && searchResultShown && (
            <SearchResult searchResult={searchResult} hideResult={hideResult} />
          )}

          {searchResultShown && <div className="overlay" onClick={hideResult}></div>}
        </div>
      </form>
    </div>
  );
};

export default withTranslation(HeaderSearchForm);
