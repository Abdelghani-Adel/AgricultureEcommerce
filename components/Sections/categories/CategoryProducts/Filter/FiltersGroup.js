import { filters } from "../../../../../helper/filters";
import Filter from "./Filter";

const FiltersGroup = (props) => {
  return (
    <div className="sidebar-widget">
      {filters.map((filter) => (
        <Filter filter={filter} key={filter.filterID} />
      ))}
    </div>
  );
};

export default FiltersGroup;
