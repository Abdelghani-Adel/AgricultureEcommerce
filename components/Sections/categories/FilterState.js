const FilterState = (props) => {
  return (
    <div className="sidebar-widget">
      <h5 className="widget-title"> Brand </h5>
      <ul className="sidebar-widget-list">
        {/* {brand.map((item, i) => (
                    <li key={i}>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={"customCheck" + item.id}
                        />
                        <label className="custom-control-label" htmlFor={"customCheck" + item.id}>
                          {item.title}
                        </label>
                      </div>
                    </li>
                  ))} */}
      </ul>
    </div>
  );
};

export default FilterState;
