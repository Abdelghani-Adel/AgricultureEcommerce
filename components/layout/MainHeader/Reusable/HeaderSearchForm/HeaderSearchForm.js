import HeaderSearchFormLabelList from "./HeaderSearchFormLabelList";
import { FaSearch } from "react-icons/fa";
import {withTranslation} from "react-multi-lang";
const HeaderSearchForm = (props) => {
  return (
    <div className="andro_search-adv">
      <form>
        <HeaderSearchFormLabelList />
        <div className="andro_search-adv-input">
          <input
            type="text"
            className="form-control"
            placeholder={props.t("Navbar.Search")}
            name="search"
          />
          <button type="submit" name="button">
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default withTranslation(HeaderSearchForm);
