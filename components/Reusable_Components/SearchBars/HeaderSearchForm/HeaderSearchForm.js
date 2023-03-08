import HeaderSearchFormLabelList from "./HeaderSearchFormLabelList";
import { FaSearch } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchCategory } from "../../../../services/Filter";
import Link from "next/Link";
import SearchResult from "./SearchResult";
import { useRouter } from "next/router";
import { encrypt } from "../../../../helper/crypto";

const HeaderSearchForm = (props) => {
  const lang = useSelector((state) => state.lang);
  const links = useSelector((state) => state.navbarLinks);
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedId, setSelectedId] = useState(0);
  const [searchResult, setSearchResult] = useState([]);
  const [searchResultShown, setSearchResultShown] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [currentFocus, setCurrentFocus] = useState(-1);

  useEffect(() => {
    if (lang != null) {
      setPlaceholder(props.t("Navbar.Search"));
    }
  }, [lang]);

  const blurFormHandler = () => {
    // console.log("blured");
    // // setSearchResultShown(false);
  };

  const inputChangeHandler = async (e) => {
    const searchString = e.target.value;
    const result = await searchCategory(searchString, selectedId);
    setSearchText(searchString);
    setSearchResult(result);
    setSearchResultShown(true);

    if (searchString.length < 1) {
      setSearchResult([]);
      setSearchResultShown(false);
    }
  };

  const hideResult = () => {
    setSearchResultShown(false);
  };

  const clearSearchText = () => {
    setSearchText("");
  };

  const focusChangeHandler = () => {
    setSearchResultShown(true);
  };

  const catChangeHandler = (payload) => {
    setSelectedCategory(payload.FAClassificationName);
    setSelectedId(payload.FAClassificationId);
  };

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push(
        `/products/search?id=${encrypt("0")}&flag=${encrypt("0")}&textString=${searchText}`
      );
      // setSearchText("");
      setSearchResult([]);
      setSearchResultShown(false);
    }

    if (e.keyCode === 40) {
      setCurrentFocus((prev) => prev + 1);
    }
  };

  const searchHandler = () => {
    router.push(
      `/products/search?id=${encrypt("0")}&flag=${encrypt("0")}&textString=${searchText}`
    );
    setSearchResult([]);
    setSearchResultShown(false);
  };

  return (
    <div className="header_search" onBlurCapture={blurFormHandler}>
      <form className="d-flex" autoComplete="off">
        <HeaderSearchFormLabelList
          selectedCategory={selectedCategory}
          links={links}
          catChangeHandler={catChangeHandler}
        />
        <div className="header_search--input">
          <input
            type="text"
            className="form-control custom-select custom-select-sm"
            placeholder={placeholder}
            name="search"
            value={searchText}
            onChange={inputChangeHandler}
            onFocus={focusChangeHandler}
            onKeyDown={keyDownHandler}
          />
          <button type="button" aria-label="Search" onClick={searchHandler}>
            <FaSearch />
          </button>

          {searchResult.length > 0 && searchResultShown && (
            <SearchResult
              searchResult={searchResult}
              hideResult={hideResult}
              clearSearchText={clearSearchText}
              currentFocus={currentFocus}
              setSearchText={setSearchText}
            />
          )}

          {searchResultShown && <div className="overlay_search" onClick={hideResult}></div>}
        </div>
      </form>
    </div>
  );
};

export default withTranslation(HeaderSearchForm);
