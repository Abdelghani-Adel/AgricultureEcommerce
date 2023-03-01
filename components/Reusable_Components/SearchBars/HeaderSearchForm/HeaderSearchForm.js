import HeaderSearchFormLabelList from "./HeaderSearchFormLabelList";
import { FaSearch } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
const HeaderSearchForm = (props) => {
  return (
    <div className="header_search">
      <form className="d-flex">
        <HeaderSearchFormLabelList />
        <div className="header_search--input">
          <input
            type="text"
            className="form-control"
            placeholder={props.t("Navbar.Search")}
            name="search"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default withTranslation(HeaderSearchForm);
