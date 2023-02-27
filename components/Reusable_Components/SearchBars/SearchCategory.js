const SearchCategory = (props) => {
  return (
    <div className="category_search">
      <form method="post">
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Look for Fruits, Vegetables"
            name="search"
          />
          {/* <button type="submit" name="button">
            <i className="fa fa-search" />
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default SearchCategory;
