import HeaderSearchFormLabelList from "./HeaderSearchFormLabelList";
import { FaSearch } from "react-icons/fa";

const HeaderSearchForm = (props) => {
  return (
    <div className="andro_search-adv">
      <form>
        <HeaderSearchFormLabelList />
        <div className="andro_search-adv-input">
          <input
            type="text"
            className="form-control"
            placeholder="Look for Fruits, Vegetables"
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

export default HeaderSearchForm;
