const SearchCategory = (props) => {
  return (
    <div className="sidebar-widget widget-search">
      <form method="post">
        <div className="andro_search-adv-input">
          <input
            type="text"
            className="form-control"
            placeholder="Look for Fruits, Vegetables"
            name="search"
          />
          <button type="submit" name="button">
            <i className="fa fa-search" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchCategory;
