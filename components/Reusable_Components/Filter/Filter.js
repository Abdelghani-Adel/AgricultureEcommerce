import OptionsGroup from "./OptionsGroup";

const Filter = (props) => {
  const { filter } = props;
  return (
    <div className="mb-4">
      <h5 className="decorated_title"> {filter.filterName} </h5>
      <OptionsGroup options={filter.filterOptions} />
    </div>
  );
};

export default Filter;
